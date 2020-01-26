var css= document.querySelector("h3");
var col1=document.querySelector(".color1");
var col2=document.querySelector(".color2");
var grd= document.getElementById("gradient");
// var col1=document.getElementById("col1");
// var col2=document.getElementById("col2");

//console.log(col1);

col1.addEventListener("input",function(){
    grd.style.background="linear-gradient(to right,"+ col1.value+ "," +col2.value+")"
});
col2.addEventListener("input",function(){
    grd.style.background="linear-gradient(to right,"+ col1.value+ "," +col2.value+")"
});
col2.addEventListener("input",function(){
    grd.style.background="linear-gradient(to right,"+ col1.value+ "," +col2.value+")"
});

