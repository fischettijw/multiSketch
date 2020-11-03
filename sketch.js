//   side-by-side     https://www.youtube.com/watch?v=XnpwawlwLw8
//     https://forum.processing.org/two/discussion/14798/how-to-split-a-p5-js-sketch-into-multiple-files


// using p5.js and NOT p5.min.js

var s = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(20, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (y > 400) { y = 0 };
        y++;
    }
};

var r = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(440, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (x > 400) { x = 0 };
        x++;
    }
};

var t = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(860, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (y > 400) { y = 0 };
        y++;
    }
};

var v = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(1280, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (x > 400) { x = 0 };
        x++;
    }
};


new p5(s, 'c1');
new p5(r, 'c2');
new p5(t, 'c3');
new p5(v, 'c4');