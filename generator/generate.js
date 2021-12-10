
const fs = require('fs');
const codes = require("./codes.js");
const numberReplacer = require('./helpers/numberReplacer.js');

mapTemplate = require('../map.json');
//console.log(mapTemplate);
generateCodeGroup(codes.group1);




function generateCodeGroup(codeGroup) {
    codeGroup.forEach((codeItem) => {
        numberReplacer.replace(codeItem.code, mapTemplate, "456");

        writeFile(codeItem.code, codeItem.meaning);
    })
}



function writeFile(code, meaning) {
    console.log("writing");
    fs.writeFile('../dist/' + code + '.json', meaning, function (err) {
        if (err) return console.log(err);
        console.log('create ' + code + '.json');
    });
}

