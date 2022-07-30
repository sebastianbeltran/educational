let answer1 = [
    `print("Hello world")`, 
    `print("hello world")`
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
        document.getElementById("respuesta1").value = answer1[0]
    }
}

let count2 = 0

let answer2 = [
    `print("Hello world" + "I'm a programmer")`, 
    `print("Hello world"+"I'm a programmer")`,
    `print("hello world" + "I'm a programmer")`,
    `print("hello world"+"I'm a programmer")`
]

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
        document.getElementById("respuesta2").value = answer2[0]
    }
}

let count3 = 0

let answer3 = [
    `print("Hello world, " + "I'm " + 13 + " years old")`, 
    `print("Hello world, "+"I'm "+13+" years old")`,
    `print("Hello world, "+"I'm "+ 13 +" years old")`
]

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
        document.getElementById("respuesta3").value = answer3[0]
    }
}

let count4 = 0

let answer4 = [
    `print("Hello world, " + "I'm " + str(13) + " years old")`, 
    `print("Hello world, "+"I'm "+str(13)+" years old")`,
    `print("Hello world, "+"I'm "+ str(13) +" years old")`
]

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
        document.getElementById("respuesta4").value = answer4[0]
    }
}

let count5 = 0

let answer5 = [
`language = "Python"
print(language)`,
`language = "Python"
print(language)`,
`language="Python"
print(language)`
]

function resp5(){

    count5++
    let res = document.getElementById("respuesta5").value

    if (answer5[0] == res || answer5[1] == res || answer5[2] == res) {
        document.getElementById("ans5").style.display = "block"
        document.getElementById("explanation5").style.display = "block"
        document.getElementById("error5").style.display = "none"
    }else{
        document.getElementById("error5").style.display = "block"
        document.getElementById("ans5").style.display = "none"
    }
    if(count5 == 3){
        document.getElementById("help5").style.display = "block"
    }
    document.getElementById("help5").onclick = function(){
        document.getElementById("respuesta5").value = answer5[0]
    }
 
}


let count6 = 0

let answer6 = [
`number = 4
print(str(number) + " tires has a car")`,
`number = 4
print(str(number)+" tires has a car")`
]

function resp6(){

    count6++
    let res = document.getElementById("respuesta6").value

    if (answer6[0] == res || answer6[1] == res || answer6[2] == res) {
        document.getElementById("ans6").style.display = "block"
        document.getElementById("explanation6").style.display = "block"
        document.getElementById("error6").style.display = "none"
    }else{
        document.getElementById("error6").style.display = "block"
        document.getElementById("ans6").style.display = "none"
    }
    if(count6 == 3){
        document.getElementById("help6").style.display = "block"
    }
    document.getElementById("help6").onclick = function(){
        document.getElementById("respuesta6").value = answer6[0]
    }
 
}

let count7 = 0

let answer7 = [
`number = "22"
print(int(number) + 8)`,
`number = "22"
print(int(number)+8)`,
`number = "22"
print(int(number) +8)`
]

function resp7(){

    count7++
    let res = document.getElementById("respuesta7").value

    if (answer7[0] == res || answer7[1] == res || answer7[2] == res) {
        document.getElementById("ans7").style.display = "block"
        document.getElementById("explanation7").style.display = "block"
        document.getElementById("error7").style.display = "none"
    }else{
        document.getElementById("error7").style.display = "block"
        document.getElementById("ans7").style.display = "none"
    }
    if(count7 == 3){
        document.getElementById("help7").style.display = "block"
    }
    document.getElementById("help7").onclick = function(){
        document.getElementById("respuesta7").value = answer7[0]
    }
 
}