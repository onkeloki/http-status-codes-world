function getMapConfig(code, meaning) {
    return { code: code, meaning: meaning };
}
let mc = getMapConfig;
module.exports = {
    group1: [
        mc(
            "123",
            "Continue"
        ),
        mc(
            "101",
            "Switching Protocols"
        ),
        mc(
            "102",
            "Switching Protocols"
        ),
        mc(
            "103",
            "Early Hints"
        )
    ],
    group2: []
};