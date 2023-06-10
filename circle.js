function calculate(){
    var radius = document.getElementById("radius").value;
    var peri = 2 * 3.14 * parseInt(radius);
    document.getElementById("resultperi").value=peri;
};

function calculate(){
    var radius = document.getElementById("radius").value;
    var area =  3.14 * parseInt(radius) * parseInt(radius);
    document.getElementById("resultarea").value=area;
};

