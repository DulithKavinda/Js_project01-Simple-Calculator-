function calculate(){
    var fnum = document.getElementById("firstNumber").value;
    var snum = document.getElementById("secondNumber").value;
    var tot = parseInt(fnum) + parseInt(snum);
    document.getElementById("result").value=tot;
};

