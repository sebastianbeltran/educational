let answer = [
    `print("Hello world")`, 
    `print("hello world")`
]

function resp(){

    let res = document.getElementById("respuesta").value

    if (answer[0] == res || answer[1] == res) {
        document.getElementById("ans1").style.display = "block"
        document.getElementById("error1").style.display = "none"
    }else{
        document.getElementById("error1").style.display = "block"
        document.getElementById("ans1").style.display = "none"
    }
    
}
