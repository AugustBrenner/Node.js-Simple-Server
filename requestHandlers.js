// node.js request handlers module

// import modules
var exec = require("child_process").exec;
var querystring = require("querystring");

// request handler functions
function start(response, postData) {
    console.log("Request handler 'start' was called.");

    // html body
    var body  = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain:"});
    response.write("You have sent: "+
        querystring.parse(postData).text);
    response.end();
}

// export request handler functions
exports.start = start;
exports.upload = upload;