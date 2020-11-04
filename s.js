s = function(p) { // p could be any variable name
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