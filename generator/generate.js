fs = require('fs');
codes = require("./codes.js");

generateCodeGroup(codes.group1);



function generateCodeGroup(codeGroup) {
    codeGroup.forEach((codeItem) => {
        writeFile(codeItem.code, codeItem.meaning);
    })

}



function writeFile(code, meaning) {
    fs.writeFile('../dist/' + code + '.txt', meaning, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });

}
codes.forEach((code, index) => {

    /*   console.log(code, index)
      fs.writeFile('../dist/' + code.code + '.txt', code.meaning, function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
      }); */

})

