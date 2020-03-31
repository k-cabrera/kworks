var submitbutton = document.getElementById("submit");
submitbutton.onclick = changeNumber;

function changeNumber(){
    var firstinput= document.getElementById("firstnumber").value;
    var secondinput = document.getElementById("secondnumber").value;
    var thirdinput = document.getElementById("thirdnumber").value;
    var nums = [firstinput, secondinput, thirdinput];
    nums.sort(function(a,b) {return a-b});
    var firstresult = document.getElementById("firstnum");
    var secondresult = document.getElementById("secondnum");
    var thirdresult = document.getElementById("thirdnum");
    firstresult.innerHTML = nums[0];
    secondresult.innerHTML = nums[1];
    thirdresult.innerHTML = nums[2];
}