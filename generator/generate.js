
const fs = require('fs');
const codes = require("./codes.js");
const numberReplacer = require('./helpers/numberReplacer.js');

const generatedCodes = [];
mapTemplate = require('../map.json');
generateCodeGroup(codes.group1);
generateCodeGroup(codes.group2);
generateCodeGroup(codes.group3);


generateTS();

function generateCodeGroup(codeGroup) {
    generatedCodes.push(...codeGroup);
    codeGroup.forEach((codeItem) => {
        let mapJson = numberReplacer.replace(codeItem.code, mapTemplate);

        writeFile(codeItem.code, mapJson);
    })
}

function writeFile(code, mapJson) {
    mapJson = JSON.stringify(mapJson);
    mapJson = mapJson.replace("XXX_CODE_XXX", "XXX_" + code + "_XXX")
    fs.writeFile('../' + code + '.json', mapJson, function (err) {
        if (err) return console.log(err);
        console.log('create ' + code + '.json');
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
        console.log(templateStr);

        fs.writeFile('../src/index.generated.ts', templateStr, function (err) {
            if (err) return console.log(err);
            // console.log('create ' + code + '.json');
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
