// Dark/Light mode 
const input = document.querySelector("#switchCheckChecked");
let bg = document.querySelector(".container-fluid");
let header = document.querySelector("header");
let a = header.querySelectorAll("a");
let ModeText = header.querySelector(".form-check-label");

function themeFunc(){
    let bgColor = window.getComputedStyle(bg).backgroundColor;
    if(bgColor ==  "rgb(0, 7, 45)"){
        bg.style.backgroundColor = "#fbfff1";
        header.style.backgroundColor = "#f4f4ed";
        for(let i = 0;i<a.length;i++){
            a[i].style.color = "black"
        }
        bg.style.color = "black";  
        ModeText.style.color = "black"

    }
    else{
        bg.style.backgroundColor = "rgb(0, 7, 45)";
        bg.style.color = "#f4f4ed";  
        header.style.backgroundColor = "#001c55";
        for(let i = 0;i<a.length;i++){
            a[i].style.color = "#f4f4ed"
        }
        ModeText.style.color = "#f4f4ed"
    }
}

// drop-down
const dropDownBox1 = document.querySelectorAll(".drop-down")[0];
const dropDownBox2 = document.querySelectorAll(".drop-down")[1];
const angleDown1 = document.querySelectorAll("i")[0];
const angleDown2= document.querySelectorAll("i")[1];

const dropDown = (x)=>{
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display  = "none";
    }
}
dropDownBox1.addEventListener("mouseleave",(e)=>{
    dropDownBox1.style.display = "none"
})
dropDownBox2.addEventListener("mouseleave",(e)=>{
   dropDownBox2.style.display = "none"
})
angleDown1.addEventListener("click",(e)=>{
    dropDown(dropDownBox1);
})
angleDown2.addEventListener("click",(e)=>{
    dropDown(dropDownBox2);
})
//Filling records Column
let expense = 0;
let inputBox = document.getElementById("input-box");
let ExpenseName = document.getElementById("Expense-name");
let Amount = document.getElementById("amount");
let records1 = document.getElementById("records1");
let records2 = document.getElementById("records2");
let records3 = document.getElementById("records3");

const Create = (name,amount)=>{
    let div = document.createElement("div");
    let p = document.createElement("p");
    let h = document.createElement("h6");
    div.className = "details-box";
    p.innerText = name;
    h.innerText = amount;
    div.appendChild(p);
    div.appendChild(h);
    records1.appendChild(div);
}
function checkInput(){
    if(ExpenseName.value.trim() != "" && Amount.value.trim() != ""){
        Create(ExpenseName.value.trim(),Amount.value.trim());
        ExpenseName.value = "";
        Amount.value = "";
    }
    else{
        alert("Please Fill all the details");
    }
}