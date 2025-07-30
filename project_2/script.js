let selectfield = document.getElementById("selectfield")
let selectText = document.getElementById("selectText")

let options = document.getElementsByClassName("options")
let list = document.getElementById("list")

selectfield.addEventListener("click",function(e){
    list.classList.toggle("hide")

})
for (option of options) {
    option.addEventListener("click",function(e){
        
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide")

    })
    
}