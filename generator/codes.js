function getMapConfig(code, meaning) {
    return { code: code, meaning: meaning };
}
let mc = getMapConfig;
module.exports = {
    group1: [
        mc("1XX", "Informational response"),
        mc("100", "Continue"),
        mc("101", "Switching Protocols"),
        mc("102", "Processing"),
        mc("103", "Early Hints")
    ],
    group2: [
        mc("2XX", "success"),
        mc("200", "OK"),
        mc("201", "Created"),
        mc("202", "Accepted"),
        mc("203", "Non-Authoritative Information (since HTTP/1.1)"),
        mc("204", "No Content"),
        mc("205", "Reset Content"),
        mc("206", "Partial Content (RFC 7233)"),
        mc("207", "Multi-Status (WebDAV; RFC 4918)"),
        mc("208", "Already Reported (WebDAV; RFC 5842)"),
        mc("226", "IM Used (RFC 3229)")
    ],
    group3: [
        mc("3XX", "redirection"),
        mc("300", "Multiple Choices"),
        mc("301", "Moved Permanently"),
        mc("302", "Found (Previously: Moved temporarily)"),
        mc("303", "See Other (since HTTP/1.1)"),
        mc("304", "Not Modified (RFC 7232)"),
        mc("305", "Use Proxy (since HTTP/1.1)"),
        mc("306", "Switch Proxy"),
        mc("307", "Temporary Redirect (since HTTP/1.1)"),
        mc("308", "Permanent Redirect (RFC 7538)"),
    ],
    group4: [
        mc("4XX", "client error"),
        mc("400", "Bad Request"),
        mc("401", "Unauthorized"),
        mc("402", "Payment Required"),
        mc("403", "Forbidden"),
        mc("404", "Not Found"),
        mc("405", "Method Not Allowed"),
        mc("406", "Not Acceptable"),
        mc("407", "Proxy Authentication Required"),
        mc("408", "Request Timeout"),
        mc("409", "Conflict"),
        mc("410", "Gone"),
        mc("411", "Length Required"),
        mc("412", "Precondition Failed"),
        mc("413", "Payload Too Large"),
        mc("414", "URI Too Long"),
        mc("415", "Unsupported Media Type"),
        mc("416", "Range Not Satisfiable"),
        mc("417", "Expectation Failed"),
        mc("418", "I'm a teapot"),
        mc("421", "Misdirected Request"),
        mc("422", "Unprocessable Entity"),
        mc("423", "Locked"),
        mc("424", "Failed Dependency"),
        mc("425", "Too Early"),
        mc("426", "Upgrade Required"),
        mc("428", "Precondition Required"),
        mc("429", "Too Many Requests"),
        mc("431", "Request Header Fields Too Large"),
        mc("451", "Unavailable For Legal Reasons")

    ],
    group5: [
        mc("5XX", "Server Error"),
        mc("500", "Internal Server"),
        mc("501", "Not Implemented"),
        mc("502", "Bad Gateway"),
        mc("503", "Service Unavailable"),
        mc("504", "Gateway Timeout"),
        mc("505", "HTTP Version not supported"),
        mc("506", "Variant Also Negotiates"),
        mc("507", "Insufficient Storage"),
        mc("508", "Loop Detected"),
        mc("509", "Bandwidth Limit"),
        mc("510", "Not Extended"),
        mc("511", "Network Authentication Required")

    ],
    allCodes: () => {
        let r = [];
        all = [...module.exports.group1,
        ...module.exports.group2,
        ...module.exports.group3,
        ...module.exports.group4,
        ...module.exports.group5
        ]
        all.forEach((c) => {
            r.push(c.code);
        });
        return r;
    },

    getNorthByCode: (code) => {
        code = code + "";
        floor = code.substring(0, 1);
        room = code.substring(1, 3);
        lookUpfloor = floor * 1 + 1;
        lookupRoom = lookUpfloor + "" + room;
        return lookupRoom;
    },
    getSouthByCode: (code) => {
        code = code + "";
        floor = code.substring(0, 1);
        room = code.substring(1, 3);
        lookUpfloor = floor * 1 - 1;
        lookupRoom = lookUpfloor + "" + room;
        return lookupRoom;
    }
};