(function() {
    var options = {};
    options.steps = {
        "intro" : {
            x: -1000, y: -1500 },
        "warning": {
            x: 0, y: -1500 },
        "topics": {
            x: 850, y: 3000, rotate: 90, scale: 5 },
        "core-frameworks": {
            x: 2500, y: -1500, z:-5000, rotate: 270, scale: 1 },
        "transcompilers": {
            x: 2500, y: -3500, rotate: 270, scale: 1 },
        "sammy-js": {
            x: 2500, y: -3500, z: -5000, rotate: 270, scale: 1  },
    };

    impress().init(null,null,null,options);

}());