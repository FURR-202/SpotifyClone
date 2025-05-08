// Dark/Light mode 
const input = document.querySelector("#switchCheckChecked");
let bg = document.querySelector(".container-fluid");
let header = document.querySelector("header");
let a = header.querySelectorAll("a");
let ModeText = header.querySelector(".form-check-label");
let DisplayMoney = document.getElementById("TotalMoney");

function themeFunc(){
    let bgColor = window.getComputedStyle(bg).backgroundColor;
    if(bgColor ==  "rgb(0, 7, 45)"){
        bg.style.backgroundColor = "#fbfff1";
        header.style.backgroundColor = "#f4f4ed";
        DisplayMoney.style.backgroundColor = "black";
        DisplayMoney.style.color = "white";
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
         DisplayMoney.style.backgroundColor = "#f4f4ed";
        DisplayMoney.style.color = "black"
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
let ExpenseName = document.getElementById("Expense-name");
let Amount = document.getElementById("amount");
let profitName = document.getElementById("Profit-name");
let profit = document.getElementById("profitAmount");
let records1 = document.getElementById("records1");
let records2 = document.getElementById("records2");
let records3 = document.getElementById("records3");


let page = document.querySelector(".container-fluid");
let MoneyInputBox = document.querySelector(".container");
let MoneyInput = document.getElementById("userMoney");
//User Money

let money = JSON.parse(localStorage.getItem("money")) ? JSON.parse(localStorage.getItem("money")) : 0
function func(){
    if(MoneyInput.value.trim() != "" && MoneyInput.value >=0){
        localStorage.setItem("money",MoneyInput.value);
        page.style.display = "block";
        MoneyInputBox.style.display = "none";
        let h1 = document.createElement("h1");
        h1.innerText = money;
        DisplayMoney.appendChild(h1)
    }
    else{
        alert("Please Enter Valid Amount");
    }
}
if(money === 0){
    page.style.display = "none";
    MoneyInputBox.style.display = "block";
}
else{
    let h1 = document.createElement("h1");
        h1.innerText = money;
        DisplayMoney.appendChild(h1)
}
 
const Create = (name,amount,type)=>{
    amount = parseInt(amount);
    let div = document.createElement("div");
    let p = document.createElement("p");
    let h = document.createElement("h6");
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.padding  = "3px";
    div.className = "details-box";
    p.innerText = name;
    div.style.marginBottom = "2px";
    if(type === "expense"){
        div.style.backgroundColor = "#ef233c";
        h.innerText = `−₹${amount}`;
    }
    else{
        div.className = "details-box bg-success";
        h.innerText = `+₹${amount}`;
    }
    btn.addEventListener("click",(e)=>{
        let box = e.target.parentNode// this is for the target parent
        removeBox(box);
    })
    div.appendChild(p);
    div.appendChild(h);
    div.appendChild(btn);
    records1.prepend(div);
}
let i = JSON.parse(localStorage.getItem("NumberOfItem")) ? JSON.parse(localStorage.getItem("NumberOfItem")) : 0;
// getting records from localstrorage
    if(JSON.parse(localStorage.getItem(0))){
        for(let i = 0;i<=JSON.parse(localStorage.getItem("NumberOfItem"));i++){
         let value = JSON.parse(localStorage.getItem(i))
         Create(value[0],value[1],value[2]);
        }
    }

class Input{
    constructor(name,amount,type){
        this.name = name;
        this.amount = amount;
        this.type = type;
    }
    checkInput(){
        if(this.name.value.trim() != "" && this.amount.value.trim() != ""){
            Create(this.name.value.trim(),this.amount.value.trim(),this.type);
            localStorage.setItem(`${i}`,JSON.stringify([this.name.value.trim(),this.amount.value.trim(),this.type]));
            localStorage.setItem("NumberOfItem",JSON.stringify(i));
            if(this.type === "expense"){
                money = money - parseInt(this.amount.value);
                localStorage.setItem("money",JSON.stringify(money));
                DisplayMoney.querySelector("h1").innerText = money;
            }
            else{
                money = money + parseInt(this.amount.value);
                localStorage.setItem("money",JSON.stringify(money));
                DisplayMoney.querySelector("h1").innerText = money;
            }
            this.name.value = "";
            this.amount.value = "";
            inputBox.style.display = "none";
            profitInput.style.display = "none";
            i++;
        }
        else{
            alert("Please Fill all the details");
        }
    }
}


// display Expense input-box
let inputBox = document.getElementById("input-box");
document.querySelector(".btn-danger").addEventListener("click",()=>{
    if(inputBox.style.display === "none"){
        inputBox.style.display = "flex";
    }
    else{
        inputBox.style.display = "none";
    }
    
})
// display profit Input Box
let profitInput = document.getElementById("Profit-input-box");
document.querySelector(".btn-success").addEventListener("click",()=>{
    if(profitInput.style.display === "none"){
        profitInput.style.display = "flex";
    }
    else{
        profitInput.style.display = "none";
    }
})
// adding expense 
document.querySelector(".btn-warning").addEventListener("click",()=>{
    new Input(ExpenseName,Amount,"expense").checkInput();
});
//adding profit
document.querySelector(".btn-info").addEventListener("click",()=>{
    new Input(profitName,profit,"profit").checkInput();

})
//clearing Expense}
function Clear() {
    localStorage.clear();
    i = 0;
    money = 0;
    records1.innerHTML = "";
}
// remove a specific record
// const DeleteRecord = (target)=>{
//     target.innerHTML = ""
// }
const removeBox = (box)=>{
    let h6  = box.querySelector("h6").innerText;
    let value  = [box.querySelector("p").innerText,""];
    for(let i = 2;i<h6.length;i++){
        value[1] = value[1] + h6[i];
    }
    console.log(value)
    let num = parseInt(value[1]);//amount that have to be + or - from the money
    console.log(num);
    let boxColor = window.getComputedStyle(box).backgroundColor
    console.log(boxColor);

    if(boxColor === "rgb(239, 35, 60)"){//expense
        money = money + num;
        localStorage.setItem("money",JSON.stringify(money));
        value.push("expense");
        let key = localStorage.key(JSON.stringify(value));
        console.log(key)
        localStorage.removeItem(key);
    }
    else{//profit
        money = money - num;
        localStorage.setItem("money",JSON.stringify(money));
        value.push("profit");
        let key = localStorage.key(value);
        localStorage.removeItem(key);
    }

   box.remove();
}

function test(){
    let value = ["Rent paid", "90", "expense"];
   for(let i = 0;i<localStorage.length;i++){
    let res = JSON.parse(localStorage.getItem(i));
    if(typeof(res) === "object"){
        if(res[0] ===  value[0] && res[1] === value[1]){
            console.log("again found it");
            localStorage.key()
            break
        }
       
    }
   }
    // localStorage.removeItem(key);
    // console.log(typeof(value),value)
}


