const numbers = require("./numbers")

module.exports = {
    replace: (numberStr, template) => {
        tplClone = JSON.parse(JSON.stringify(template));
        for (var pos = 0; pos < numberStr.length; pos++) {
            let layerName = "DISPLAY_" + pos;
            tplClone.layers.forEach((layer) => {
                if (layer.name == layerName) {
                    console.log(layer.name + "-->" + numberStr.charAt(pos))
                    let newData = module.exports.tilesToNumber(layer.data, numbers[numberStr.charAt(pos)]);
                    layer.data = newData;

                }
            });
        }
        console.log("STRRR")
        console.log(JSON.stringify(tplClone));
        return tplClone;
    },
    tilesToNumber: (originalArray, numbersArray, tileIdToReplace) => {
        let nextNewTileId = 0;
        originalArray.forEach((originalArrayEntry, originalPos) => {
            if (originalArrayEntry != 0) {
                if (numbersArray[nextNewTileId] == 0) {
                    originalArray[originalPos] = 0;
                }
                nextNewTileId++;

            }
        })
        return originalArray;

    }

};