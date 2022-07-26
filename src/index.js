let answer = 
`fruit = input("Which is your favorite fruit?")

if fruit == "apple":
  print("I love you")
else:
  print("I hate you")

number = input("Give me your favorite number")

if int(number) == 3:
  print("I love this number")
else: 
  print("I hate this number")`

function resp(){
    let res = document.getElementById("respuesta").value
    
    if (res === answer){
        document.getElementById("result").innerHTML = "YES"
    }else{
        document.getElementById("result").innerHTML = "NO"
    }
}