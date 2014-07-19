var es = require("event-stream");
var File = require("vinyl");
var test = require("tape");
var gjsdoc2md = require("../");
var fs = require("fs");

test("streaming mode", function(t){
    var fakeFile = new File({
      contents: fs.createReadStream("test/fixture/code.js")
    });
    
    var stream = gjsdoc2md();
    stream.write(fakeFile);
    
    stream.once("data", function(file){
        t.ok(file.isStream());
        
        file.contents.pipe(es.wait(function(err, data) {
          t.ok(/#something/.test(data));
          t.end();
        }));
    });
});

test("buffer mode", function(t){
    var fakeFile = new File({
      contents: new Buffer("/**\na global\n@type boolean\n@default\n*/\nvar something = true;\n")
    });
    
    var stream = gjsdoc2md();
    stream.write(fakeFile);
    
    stream.once("data", function(file){
        t.ok(file.isBuffer());
        t.ok(/#something/.test(file.contents.toString()));
        t.end();
    });
});
