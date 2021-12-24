const { exec } = require("child_process");
const codes = require("./codes.js");
generateCodeGroup(codes.group1);
generateCodeGroup(codes.group2);
generateCodeGroup(codes.group3);
generateCodeGroup(codes.group4);
generateCodeGroup(codes.group5);

function generateCodeGroup(codeGroup) {
    codeGroup.forEach((codeItem, index) => {
        exec('say -v "Tessa" "' + codeItem.meaning + '" -o audio/' + codeItem.code);
        exec('lame -m m audio/' + codeItem.code + '.aiff audio/' + codeItem.code + '.mp3')

    })
}