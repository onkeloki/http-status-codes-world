
module.exports = {
    hasNext: (codeGroup, index) => {
        return index < codeGroup.length - 1
    },
    hasPrev: (codeGroup, index) => {
        return index > 0
    },
    openNorth: (northId, template) => {
        tpl = module.exports.open(template, "north");
        tpl = JSON.stringify(tpl);
        tpl = tpl.split("XXX_EXIT_NORTH_XXX").join(northId + ".json#start-south")
        tpl = JSON.parse(tpl);
        return tpl;
    },
    openSouth: (southId, template) => {
        tpl = module.exports.open(template, "south");
        tpl = JSON.stringify(tpl);
        tpl = tpl.split("XXX_EXIT_SOUTH_XXX").join(southId + ".json#start-north")
        tpl = JSON.parse(tpl);
        return tpl;
    },


    openLeft: (codeGroup, index, template) => {
        tpl = module.exports.open(template, "west");
        tpl = JSON.stringify(tpl);
        tpl = tpl.split("XXX_EXIT_WEST_XXX").join(codeGroup[index - 1].code + ".json#start-east")
        tpl = JSON.parse(tpl);
        return tpl;
    },
    openRight: (codeGroup, index, template) => {
        tpl = module.exports.open(template, "east");
        tpl = JSON.stringify(tpl);
        tpl = tpl.split("XXX_EXIT_EAST_XXX").join(codeGroup[index + 1].code + ".json#start-west")
        tpl = JSON.parse(tpl);

        return tpl;
    },
    open: (template, direction) => {
        tplClone = JSON.parse(JSON.stringify(template));
        tplClone.layers.forEach((layer) => {
            if (layer.name == "block-" + direction ||
                layer.name == "door-" + direction) {
                layer.data.forEach((d, i) => {
                    layer.data[i] = 0;
                })
            }
        });
        return tplClone;
    }
};