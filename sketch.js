//   side-by-side     https://www.youtube.com/watch?v=XnpwawlwLw8
//     https://forum.processing.org/two/discussion/14798/how-to-split-a-p5-js-sketch-into-multiple-files
//    https://www.youtube.com/watch?v=Su792jEauZg&feature=youtu.be


//   p5: Instance Mode, Multiple js-files and Library Design #541
//   https://github.com/CodingTrain/Rainbow-Topics/issues/541


//  HTML iframes
//  https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_height_width


//  How to Embed p5.js Sketches
//  http://cmuems.com/2018/60212f/resources/embedding-p5js/


//  JavaScript - How To Implement Multiple p5.js Sketches
//  https://www.youtube.com/watch?v=fbqboV1iHy0&t=248s


//  7.5: Multiple js Files - p5.js Tutorial
//  https://www.youtube.com/watch?v=Yk18ZKvXBj4&t=89s







// using p5.js and NOT p5.min.js

// let s, r, t, v;

// var s = function(p) { // p could be any variable name
let s = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(20, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background('red');
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (y > 400) { y = 0 };
        y++;
    }
};

// var r = function(p) { // p could be any variable name
let r = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(440, 20);
        p.frameRate();
    };

    p.draw = function() {
        p.background('green');
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (x > 400) { x = 0 };
        x++;
    }
};

// var t = function(p) { // p could be any variable name
let t = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(860, 440);
        p.frameRate();
    };

    p.draw = function() {
        p.background('blue');
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (y > 400) { y = 0 };
        y++;
    }
};

// var v = function(p) { // p could be any variable name
let v = function(p) { // p could be any variable name
    var x = 0;
    var y = 0;

    p.setup = function() {
        p.createCanvas(400, 400).position(1280, 440);
        p.frameRate();
    };

    p.draw = function() {
        p.background('yellow');
        p.fill(255);
        p.rect(x, y, 25, 50);
        step();
    };

    function step() {
        if (x > 400) { x = 0 };
        x++;
    }
};


let a = new p5(s);
let b = new p5(r);
let c = new p5(t);
let d = new p5(v);

// new p5(s, 'c1');
// new p5(r, 'c2');
// new p5(t, 'c3');
// new p5(v, 'c4');