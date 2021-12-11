const fs = require("fs");
module.exports = {
    renameImagePath: (mapJson) => {
        mapJson.tilesets.forEach(element => {
            fileName = element.image.split("/");
            fileName = fileName[fileName.length - 1]
            element.fileName = fileName;
            element.image = fileName;
        });
        return mapJson;
    },
    copyImagesToDist: (mapJson, distFolder) => {
        console.log(distFolder);
        mapJson.tilesets.forEach(element => {
            fileName = element.image.split("/");
            fileName = fileName[fileName.length - 1]
            fs.copyFile("../" + element.image, distFolder + fileName, (err) => {
                if (err) throw err;
                console.log("../" + element.image, "->", distFolder + fileName);
            })



        });

    }
};