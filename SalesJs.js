var cpnBtn =document.getElementById("cpnBtn")
var cpnCode =document.getElementById("cpnCode")
var cpnBtn1 =document.getElementById("cpnBtn1")
var cpnCode1 =document.getElementById("cpnCode1")
var cpnBtn2 =document.getElementById("cpnBtn2")
var cpnCode2 =document.getElementById("cpnCode2")

/**Copy the code, change the display of the button , display copied, display again copy code */
cpnBtn.onclick = function(){
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = "COPIED"
    setTimeout(function(){
        cpnBtn.innerHTML = "COPY CODE";
    }, 3000);
}

cpnBtn1.onclick = function(){
    navigator.clipboard.writeText(cpnCode1.innerHTML);
    cpnBtn1.innerHTML = "COPIED"
    setTimeout(function(){
        cpnBtn1.innerHTML = "COPY CODE";
    }, 3000);
}

