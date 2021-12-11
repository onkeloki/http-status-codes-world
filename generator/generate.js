
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

const generatedCodes = [];
mapTemplate = require('../' + sourceMapName + '.json');
generateCodeGroup(codes.group1);
generateCodeGroup(codes.group2);
generateCodeGroup(codes.group3);
generateTS();
copyAssets();
saveScript();


console.log("ALL DONE");
function generateCodeGroup(codeGroup) {
    generatedCodes.push(...codeGroup);
    codeGroup.forEach((codeItem) => {
        let mapJson = numberReplacer.replace(codeItem.code, mapTemplate);
        mapJson = assetsManager.renameImagePath(mapJson);
        writeFile(codeItem.code, mapJson);
    })
}

function writeFile(code, mapJson) {

    mapJson = JSON.stringify(mapJson);
    mapJson = mapJson.replace("XXX_CODE_XXX", "XXX_" + code + "_XXX")
    fs.writeFile(outPutFolderPath + code + '.json', mapJson, function (err) {
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