
const fs = require('fs');
var http = require("http");
var args = process.argv.slice(2);
var argv = require('minimist')(process.argv.slice(2));
let sourceMapName = "map";
let outputFolderName = "map";

if (!argv.i || !argv.o) {
    console.log("you can use:\n -i for input file\n -o for outout folder Name");
}
sourceMapName = argv.i || sourceMapName;
outputFolderName = argv.o || outputFolderName;
let outPutFolderPath = '../dist/' + outputFolderName + "/";

if (!fs.existsSync(outPutFolderPath)) {
    fs.mkdirSync(outPutFolderPath);
}

const codes = require("./codes.js");
const numberReplacer = require('./helpers/numberReplacer.js');
const assetsManager = require('./helpers/assetsManager.js');
const maplinker = require('./helpers/maplinker.js');
const { exec } = require('child_process');

const generatedCodes = [];
mapTemplate = require('../' + sourceMapName + '.json');
generateCodeGroup(codes.group1);
generateCodeGroup(codes.group2);
generateCodeGroup(codes.group3);
generateCodeGroup(codes.group4);
generateCodeGroup(codes.group5);
generateTS();
copyAssets();
copyToRcRepo();


//saveScript();

function copyToRcRepo() {
    exec("cp -Raf ../dist/map/*  ../../http-status-codes-world-rc3");


}


function generateCodeGroup(codeGroup) {

    generatedCodes.push(...codeGroup);
    codeGroup.forEach((codeItem, index) => {

        let mapJson = numberReplacer.replace(codeItem.code, mapTemplate);

        if (maplinker.hasNext(codeGroup, index)) {
            mapJson = maplinker.openRight(codeGroup, index, mapJson);
        }
        if (maplinker.hasPrev(codeGroup, index)) {
            mapJson = maplinker.openLeft(codeGroup, index, mapJson);
        }
        console.log("code", codeItem.code);
        let north = codes.getNorthByCode(codeItem.code);
        if (codes.allCodes().indexOf(north) > -1) {
            mapJson = maplinker.openNorth(north, mapJson);

        }
        let south = codes.getSouthByCode(codeItem.code);
        if (codes.allCodes().indexOf(south) > -1) {
            mapJson = maplinker.openSouth(south, mapJson);
        }

        // REOVE unnused links


        mapJson.layers.forEach((l) => {
            // REOVE unnused links
            if (l.name.startsWith("exit-")) {
                l.properties.forEach((p) => {
                    if (p.value.startsWith("XXX_EXIT")) {
                        p.value = "main.json";
                    }

                });

            }
            if (codeItem.code == "418") {
                if (l.name == "zone") {

                    l.properties.push(
                        {
                            name: 'getBadge',
                            type: 'string',
                            value: 'qPQvTwBHhoCTCMdJO5vUViQpmJ9mWGRyld0JyZDU2U9qMMASjm'
                        })
                    console.log(l.properties)
                }
            }


        });





        mapJson = assetsManager.renameImagePath(mapJson);
        /*mapStr = JSON.stringify(mapJson);
        mapStr = mapStr.replace("XXX_BELL_MSG_XXX", codeItem.code)
        mapJson = JSON.parse(mapStr); */
        writeFile(codeItem, mapJson);
    })
}

function writeFile(codeItem, mapJson) {
    saveFileName = codeItem.code;
    mapJson = JSON.stringify(mapJson);
    // mapJson = mapJson.replace("XXX_CODE_XXX", "XXX_" + codeItem.code + "_XXX")



    mapJson = mapJson.replace("1XX.json", "main.json");
    if (saveFileName == "1XX") {
        saveFileName = "main"


    }
    mapobj = JSON.parse(mapJson);
    mapobj.tilesets.forEach((ts) => {
        delete ts["fileName"];

    })
    mapJson = JSON.stringify(mapobj);
    // msg = codeItem.code + " - " + codeItem.meaning;
    mapJson = mapJson.replace("XXX_BTN_TXT_XXX", "- - " + codeItem.code + " - -" + codeItem.meaning);
    mapJson = mapJson.replace("XXX.mp3", codeItem.code + ".mp3");
    //mapJson = mapJson.replace("XXX_BELL_MSG_XXX", msg)
    fs.writeFile(outPutFolderPath + saveFileName + '.json', mapJson, function (err) {
        if (err) return console.log(err);

    });
}

function generateTS() {
    fs.readFile('../src/index.ts.tpl', 'utf8', (err, templateStr) => {
        if (err) {
            console.error(err)
            return
        }
        let additionalCode = "";
        generatedCodes.forEach(code => {
            additionalCode += codeToTypeScript(code) + "\n";
        })
        templateStr = templateStr.replace("//###TPL_HOOK###", additionalCode);
        fs.writeFile('../src/index.generated.ts', templateStr, function (err) {
            if (err) return console.log(err);
        });

    })
}

function codeToTypeScript(code) {
    let tmp = "WA.room.onEnterZone('XXX_CODE_XXX', () => {    currentPopup = WA.ui.openPopup('codePopup', 'XXX_MEANING_XXX', []);})\n"
    tmp += "WA.room.onLeaveZone('XXX_CODE_XXX', closePopUp)\n";
    tmp = tmp.split("XXX_CODE_XXX").join("XXX_" + code.code + "_XXX");
    tmp = tmp.split("XXX_MEANING_XXX").join(code.code + "\\n\\n" + code.meaning + "\\n");
    return tmp;

}
function copyAssets() {
    assetsManager.copyImagesToDist(mapTemplate, outPutFolderPath);

}
function saveScript() {
    const file = fs.createWriteStream(outPutFolderPath + "script.js");
    const request = http.get("http://localhost:8080/script.js", function (response) {
        response.pipe(file);
    });


}