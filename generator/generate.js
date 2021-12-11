
const fs = require('fs');
const codes = require("./codes.js");
const numberReplacer = require('./helpers/numberReplacer.js');

mapTemplate = require('../map.json');
//console.log(mapTemplate);
generateCodeGroup(codes.group1);




function generateCodeGroup(codeGroup) {
    codeGroup.forEach((codeItem) => {
        let mapJson = numberReplacer.replace(codeItem.code, mapTemplate);

        writeFile(codeItem.code, mapJson);
    })
}



function writeFile(code, mapJson) {
    mapJson = JSON.stringify(mapJson);
    fs.writeFile('../' + code + '.json', mapJson, function (err) {
        if (err) return console.log(err);
        console.log('create ' + code + '.json');
    });
}

