let pic1 = document.getElementById("pic1")
let owl1 = document.getElementById("owl1")
let pic = document.getElementById("pic")
let owl = document.getElementById("owl")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let card = document.getElementById("card")
let blur = document.getElementById("blur")
let exit = document.getElementById("exit")
let topbutton = document.getElementById("topbutton")

 window.onscroll= function() {
  if  (window.scrollY>=1200) {
    topbutton.style.visibility="visible"

 }
else if (window.scrollY<1200) {
  topbutton.style.visibility="hidden"
}}


topbutton.onclick = function () {
   window.scrollTo({
    top:0
   })
}

/*
if (window.scrollY==200) {
  //topbutton.style.visibility="visible"
  console.log("hey")
}*/


card.onclick = function() {
   blur.style.visibility="visible"
}
exit.onclick = function() {
  blur.style.visibility="hidden"
}

owl1.onclick = function () {
    owl.style.visibility="visible"
    pic1.style.visibility="visible"
    owl1.style.visibility="hidden";
    pic.style.visibility="hidden"
}
owl.onclick = function () {
    owl.style.visibility="hidden"
    pic1.style.visibility="hidden"
    owl1.style.visibility="visible";
    pic.style.visibility="visible"
}

let Button=document.querySelector("#button1")
let Button2=document.querySelector("#button2")
let Box1=document.getElementById("box1");
let Box2=document.getElementById("box2");
let Box3=document.getElementById("box3");
let Box4=document.getElementById("box4");
let Box5=document.getElementById("box5");
let box=document.querySelector("#box");
var Picture=document.getElementById("picfull");
box.setAttribute("style" , "visible");
Box1.style.opacity="100%"



let slide = function () {
  let i=1349;
  let k;
  let result=0;
Button.onclick= function (){



if  (result>=-4047) {

  result-=i
  Picture.style.transform= `translateX(${result}px)`;
  console.log(result)

if (result===-1349){
  p3.style.visibility="hidden"
  p4.style.visibility="visible"
  Box1.style.opacity="65%"
  Box2.style.opacity="100%"
}

else if (result===-2698){
  p4.style.visibility="hidden"
  Box2.style.opacity="65%"
  Box3.style.opacity="100%"
}
else if (result===-4047){
  Box3.style.opacity="65%"
  Box4.style.opacity="100%"
}
else if (result===-5396){
  Box4.style.opacity="65%"
  Box5.style.opacity="100%"
}

}
}
Button2.onclick= function (){

  k=1349

  if (result!=0 ) {
    result+=k
    Picture.style.transform= `translateX(${result}px)`;
    console.log(result)
    if (result===-0){
      
      p3.style.visibility="visible"
      p4.style.visibility="hidden"
      
      Box2.style.opacity="65%"
      Box1.style.opacity="100%"
    }

    else if (result===-1349){
      p4.style.visibility="visible"
      Box3.style.opacity="65%"
      Box2.style.opacity="100%"
    }
    else if (result===-2698){
      Box4.style.opacity="65%"
      Box3.style.opacity="100%"
    }
    else if (result===-4047){
      Box5.style.opacity="65%"
      Box4.style.opacity="100%"
    }
  }
}

}
slide();





/*
function checkGeneration (generation, gender) {
   const rules = { 
    "-3m": "great grandfather", 
    "-3f": "great grandmother",
     "-2m": "grandfather", 
     "-2f": "grandmother", 
     "-1m": "father", 
     "-1f": "mother",
      "0": "me!", 
      "1m": "son",
       "1f": "daughter",
        "2m": "grandson", 
        "2f": "granddaughter", 
        "3m": "great grandson", 
        "3f": "great granddaughter" ,
} 
const criteria = `${generation}${gender}`
return rules[criteria] 
}*/





