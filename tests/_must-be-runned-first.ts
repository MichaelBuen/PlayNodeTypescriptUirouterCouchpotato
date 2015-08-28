// As long this javascript is executed first, tests will be fine

if (window["def"] == undefined) {
    window["def"] = window["define"];

    window["define"] = function(depArray : string[], c: any) {
        console.log('define intercepted');
        console.log(depArray);
    };
}



function doTest(test) {
    var def = window["def"];

    def(test);
}