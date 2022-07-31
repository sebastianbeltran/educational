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

let count8 = 0

let answer8 = [
`input("What is your favorite movie?")`,
`input("what is your favorite movie?")`
]

function resp8(){

    count8++
    let res = document.getElementById("respuesta8").value

    if (answer8[0] == res || answer8[1] == res || answer8[2] == res) {
        document.getElementById("ans8").style.display = "block"
        document.getElementById("explanation8").style.display = "block"
        document.getElementById("error8").style.display = "none"
    }else{
        document.getElementById("error8").style.display = "block"
        document.getElementById("ans8").style.display = "none"
    }
    if(count8 == 3){
        document.getElementById("help8").style.display = "block"
    }
    document.getElementById("help8").onclick = function(){
        document.getElementById("respuesta8").value = answer8[0]
    }
 
}

let count9 = 0

let answer9 = [
`movie = input("What is your favorite movie?")
print(movie + " is also my favorite movie")`,
`movie=input("What is your favorite movie?")
print(movie+" is also my favorite movie")`,
`movie=input("What is your favorite movie?")
print(movie+"is also my favorite movie")`,
`movie = input("What is your favorite movie?")
print(movie + "is also my favorite movie")`
]

function resp9(){

    count9++
    let res = document.getElementById("respuesta9").value

    if (answer9[0] == res || answer9[1] == res || answer9[2] == res || answer9[3] == res) {
        document.getElementById("ans9").style.display = "block"
        document.getElementById("explanation9").style.display = "block"
        document.getElementById("error9").style.display = "none"
    }else{
        document.getElementById("error9").style.display = "block"
        document.getElementById("ans9").style.display = "none"
    }
    if(count9 == 3){
        document.getElementById("help9").style.display = "block"
    }
    document.getElementById("help9").onclick = function(){
        document.getElementById("respuesta9").value = answer9[0]
    }
 
}

let count10 = 0

let answer10 = [
`age = input("How old are you?")
print(age + " is my favorite number")`,
`age=input("How old are you?")
print(age+ " is my favorite number")`,
`age = input("How old are you?")
print(age + "is my favorite number")`,
`age=input("How old are you?")
print(age+"is my favorite number")`
]

function resp10(){

    count10++
    let res = document.getElementById("respuesta10").value

    if (answer10[0] == res || answer10[1] == res || answer10[2] == res || answer10[3] == res) {
        document.getElementById("ans10").style.display = "block"
        document.getElementById("explanation10").style.display = "block"
        document.getElementById("error10").style.display = "none"
    }else{
        document.getElementById("error10").style.display = "block"
        document.getElementById("ans10").style.display = "none"
    }
    if(count10 == 3){
        document.getElementById("help10").style.display = "block"
    }
    document.getElementById("help10").onclick = function(){
        document.getElementById("respuesta10").value = answer10[0]
    }
 
}

let count11 = 0

let answer11 = [
`number = input("Give me a number for 1 to 10:")
print(int(number) + 20)`,
`number=input("Give me a number for 1 to 10:")
print(int(number)+20)`,
`number = int(input("Give me a number for 1 to 10: "))
print(number + 20)`,
`number=int(input("Give me a number for 1 to 10: "))
print(int(number)+20)`
]

function resp11(){

    count11++
    let res = document.getElementById("respuesta11").value

    if (answer11[0] == res || answer11[1] == res || answer11[2] == res || answer11[3] == res) {
        document.getElementById("ans11").style.display = "block"
        document.getElementById("explanation11").style.display = "block"
        document.getElementById("error11").style.display = "none"
    }else{
        document.getElementById("error11").style.display = "block"
        document.getElementById("ans11").style.display = "none"
    }
    if(count11 == 3){
        document.getElementById("help11").style.display = "block"
    }
    document.getElementById("help11").onclick = function(){
        document.getElementById("respuesta11").value = answer11[0]
    }
 
}

let count12 = 0

let answer12 = [
`password = input("Type your password:")
if password == "cas123":
 print("Your password is correct")
else:
 print("Your password is wrong")`,
`password = input("Type your password:")

if password == "cas123":
 print("Your password is correct")
else:
 print("Your password is wrong")`,
`password = input("Type your password:")
if password=="cas123":
 print("Your password is correct")
else:
 print("Your password is wrong")`,
`password = input("Type your password:")

if password=="cas123":
 print("Your password is correct")
else:
 print("Your password is wrong")`
]

function resp12(){

    count12++
    let res = document.getElementById("respuesta12").value

    if (answer12[0] == res || answer12[1] == res || answer12[2] == res || answer12[3] == res) {
        document.getElementById("ans12").style.display = "block"
        document.getElementById("explanation12").style.display = "block"
        document.getElementById("error12").style.display = "none"
    }else{
        document.getElementById("error12").style.display = "block"
        document.getElementById("ans12").style.display = "none"
    }
    if(count12 == 3){
        document.getElementById("help12").style.display = "block"
    }
    document.getElementById("help12").onclick = function(){
        document.getElementById("respuesta12").value = answer12[0]
    }
 
}

let count13 = 0

let answer13 = [
`age = input("How old are you?")

if int(age) >= 18:
 print("You can access to the movie")
else:
 print("You can not access to the movie")`,
`age = input("How old are you?")
if int(age) >= 18:
 print("You can access to the movie")
else:
 print("You can not access to the movie")`,
`age = int(input("How old are you?"))

if age >= 18:
 print("You can access to the movie")
else:
 print("You can not access to the movie")`,
`age = int(input("How old are you?"))
if age >= 18:
 print("You can access to the movie")
else:
 print("You can not access to the movie")`
]

function resp13(){

    count13++
    let res = document.getElementById("respuesta13").value

    if (answer13[0] == res || answer13[1] == res || answer13[2] == res || answer13[3] == res) {
        document.getElementById("ans13").style.display = "block"
        document.getElementById("explanation13").style.display = "block"
        document.getElementById("error13").style.display = "none"
    }else{
        document.getElementById("error13").style.display = "block"
        document.getElementById("ans13").style.display = "none"
    }
    if(count13 == 3){
        document.getElementById("help13").style.display = "block"
    }
    document.getElementById("help13").onclick = function(){
        document.getElementById("respuesta13").value = answer13[0]
    }
 
}