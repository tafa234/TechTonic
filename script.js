let stars =document.getElementById("stars");
let moon =document.getElementById("moon");
let mountains3 =document.getElementById("mountains3");
let mountains4 =document.getElementById("mountains4");
let river =document.getElementById("river");
let boat =document.getElementById("boat");
let mountains7 =document.getElementById("mountains7");
let TechTonic =document.querySelector(".TechTonic");
window.onscroll = function() {
    let value=scrollY;
    stars.style.left=value + "px";
    moon.style.top=value *3+ "px";
    mountains3.style.top=value *2+ "px";
    mountains4.style.top=value *1.5+ "px";
    river.style.top=value + "px";
    boat.style.top=value + "px";
    boat.style.left=value *3+ "px";
    TechTonic.style.fontSize=value + "px";
    if(scrollY>=96){
        TechTonic.style.fontSize=96 + "px";
        TechTonic.style.position='fixed';
        if(scrollY>=480){
            TechTonic.style.display='none';

        }else{
            TechTonic.style.display='block';
        }

    
        if(scrollY>=200){
            document.querySelector('.main').style.background='linear-gradient(rgb(19 112 155), rgb(16, 10, 58))'
        }else{
            document.querySelector('.main').style.background='linear-gradient(rgb(65, 9, 70),rgb(16, 10, 58))'
        }

    }

}