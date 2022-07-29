let answer1 = [
    `print("Hello world")`, 
    `print("hello world")`
]
let answer2 = [
    `print("Hello world" + "I'm a programmer")`, 
    `print("Hello world"+"I'm a programmer")`,
    `print("hello world" + "I'm a programmer")`,
    `print("hello world"+"I'm a programmer")`
]

let answer3 = [
    `print("Hello world, " + "I'm " + 13 + " years old")`, 
    `print("Hello world, "+"I'm "+13+" years old")`,
    `print("Hello world, "+"I'm "+ 13 +" years old")`
]
let answer4 = [
    `print("Hello world, " + "I'm " + str(13) + " years old")`, 
    `print("Hello world, "+"I'm "+str(13)+" years old")`,
    `print("Hello world, "+"I'm "+ str(13) +" years old")`
]

let count1 = 0

function resp1(){

    count1++
    let res = document.getElementById("respuesta1").value

    if (answer1[0] == res || answer1[1] == res) {
        document.getElementById("ans1").style.display = "block"
        document.getElementById("explanation1").style.display = "block"
        document.getElementById("error1").style.display = "none"
    }else{
        document.getElementById("error1").style.display = "block"
        document.getElementById("ans1").style.display = "none"
    }
    if(count1 == 3){
        document.getElementById("help1").style.display = "block"
    }
    document.getElementById("help1").onclick = function(){
        document.getElementById("respuesta1").value = 'print("Hello world")'
    }
}

let count2 = 0

function resp2(){

    count2++
    let res = document.getElementById("respuesta2").value

    if (answer2[0] == res || answer2[1] == res || answer2[2] == res || answer2[3] == res) {
        document.getElementById("ans2").style.display = "block"
        document.getElementById("explanation2").style.display = "block"
        document.getElementById("error2").style.display = "none"
    }else{
        document.getElementById("error2").style.display = "block"
        document.getElementById("ans2").style.display = "none"
    }
    if(count2 == 3){
        document.getElementById("help2").style.display = "block"
    }
    document.getElementById("help2").onclick = function(){
        document.getElementById("respuesta2").value = `print("Hello world" + "I'm a programmer")`
    }
}

let count3 = 0

function resp3(){

    count3++
    let res = document.getElementById("respuesta3").value

    if (answer3[0] == res || answer3[1] == res || answer3[2] == res) {
        document.getElementById("ans3").style.display = "block"
        document.getElementById("explanation3").style.display = "block"
        document.getElementById("error3").style.display = "none"
    }else{
        document.getElementById("error3").style.display = "block"
        document.getElementById("ans3").style.display = "none"
    }
    if(count3 == 3){
        document.getElementById("help3").style.display = "block"
    }
    document.getElementById("help3").onclick = function(){
        document.getElementById("respuesta3").value = `print("Hello world, " + "I'm " + 13 + " years old")`
    }
}

let count4 = 0

function resp4(){

    count4++
    let res = document.getElementById("respuesta4").value

    if (answer4[0] == res || answer4[1] == res || answer4[2] == res) {
        document.getElementById("ans4").style.display = "block"
        document.getElementById("explanation4").style.display = "block"
        document.getElementById("error4").style.display = "none"
    }else{
        document.getElementById("error4").style.display = "block"
        document.getElementById("ans4").style.display = "none"
    }
    if(count4 == 3){
        document.getElementById("help4").style.display = "block"
    }
    document.getElementById("help4").onclick = function(){
        document.getElementById("respuesta4").value = `print("Hello world, " + "I'm " + str(13) + " years old")`
    }
}