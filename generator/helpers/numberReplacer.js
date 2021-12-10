const numbers = require("./numbers")

module.exports = {

    replace: (numberStr, template, tileIdToReplace) => {
        tplClone = JSON.parse(JSON.stringify(template));
        for (var pos = 0; pos < numberStr.length; pos++) {
            let layerName = "DISPLAY_" + pos;
            tplClone.layers.forEach((layer) => {
                if (layer.name == layerName) {
                    let newData = module.exports.tilesToNumber(layer.data, numbers[numberStr.charAt(pos)], tileIdToReplace);
                    console.log(newData);
                    //layer.data = 

                }
            });
        }
        console.log(tplClone);
        return tplClone;
    },
    tilesToNumber: (originalArray, numbersArray, tileIdToReplace) => {

        originalArray.forEach((originalArrayEntry, originalPos) => {
            if (originalArrayEntry == tileIdToReplace) {
                originalArray[originalPos] = "K";

                console.log("jawollo")
            }

        })

        return originalArray;

    }

};