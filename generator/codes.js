function getMapConfig(code, meaning) {
    return { code: code, meaning: meaning };
}
let mc = getMapConfig;
module.exports = {
    group1: [
        mc("100", "Continue"),
        mc("101", "Switching Protocols"),
        mc("102", "Processing"),
        mc("103", "Early Hints")
    ],
    group2: [
        mc("200", "OK"),
        mc("201", "Created"),
        mc("202", "Accepted"),
        mc("203", "Non-Authoritative Information (since HTTP/1.1)"),
        mc("204", "No Content"),
        mc("205", "Reset Content"),
        mc("206", "Partial Content (RFC 7233)"),
        mc("207", "Multi-Status (WebDAV; RFC 4918)"),
        mc("208", "Already Reported (WebDAV; RFC 5842)"),
        mc("226", "M Used (RFC 3229)")
    ],
    group3: [
        mc("300", "Multiple Choices"),
        mc("301", "Moved Permanently"),
        mc("302", "Found (Previously \"Moved temporarily\")"),
        mc("303", "See Other (since HTTP/1.1)"),
        mc("304", "Not Modified (RFC 7232)"),
        mc("305", "Use Proxy (since HTTP/1.1)"),
        mc("306", "Switch Proxy"),
        mc("307", "Temporary Redirect (since HTTP/1.1)"),
        mc("308", "Permanent Redirect (RFC 7538)"),
    ]
};