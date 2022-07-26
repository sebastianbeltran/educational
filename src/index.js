let answer = [
    `print("Hello world")`, 
    `print("hello world")`
]

function resp(){

    let res = document.getElementById("respuesta").value

    if (answer[0] == res || answer[1] == res) {
        document.getElementById("result").innerHTML = "YES"
    }else{
        document.getElementById("result").innerHTML = "NO"  
    }
    
}
