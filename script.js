


function darkMode(){
    const test=document.getElementById("openLight").className
    console.log(test)
}

function validateForm(){
    var checkbox= document.getElementById("acc")
    if (!checkbox.checked){
        alert("Bitte bestätigen Sie die AGB")
    }
    else{
        alert("Vielen Dank !")
    }

}