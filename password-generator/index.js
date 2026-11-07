const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


pass1.addEventListener("click", function() {
    navigator.clipboard.writeText(pass1.textContent)
        .then(function() {
            console.log("Password copied!")
        })
})

pass2.addEventListener("click", function() {
    navigator.clipboard.writeText(pass2.textContent)
        .then(function() {
            console.log("Password copied!")
        })
})

function genPass(){
    let newPass1 = ""
    let newPass2 = ""
    for(let i = 0; i<15; i++){
        let num1 = Math.floor(Math.random() * characters.length)
        let num2 = Math.floor(Math.random() * characters.length)
        newPass1+=characters[num1]
        newPass2+=characters[num2] 
        
    }
    pass1.textContent = newPass1
    pass2.textContent = newPass2
}


