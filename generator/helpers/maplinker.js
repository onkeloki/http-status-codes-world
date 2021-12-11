
module.exports = {
    hasNext: (codeGroup, index) => {
        return index < codeGroup.length - 1
    },
    hasPrev: (codeGroup, index) => {
        return index > 0
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