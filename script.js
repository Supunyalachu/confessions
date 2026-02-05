let data = JSON.parse(localStorage.getItem("data")) || [];

function show(){
 let box = document.getElementById("all");
 box.innerHTML="";

 data.forEach(x=>{
   let d = document.createElement("div");
   d.className="msg";
   d.innerText=x;
   box.appendChild(d);
 });
}

function add(){
 let t=document.getElementById("text").value;
 if(t=="") return;

 data.push(t);
 localStorage.setItem("data",JSON.stringify(data));
 document.getElementById("text").value="";
 show();
}

show();
