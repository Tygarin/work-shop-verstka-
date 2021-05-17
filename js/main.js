let choosebtn1 = document.getElementById('choose_btn1');
choosebtn1.onclick = function(){
    choosebtn1.classList.add('active');
    if(choosebtn2.classList.contains('active') == true) {
        choosebtn2.classList.remove('active');
    }
    if(choosebtn3.classList.contains('active') == true) {
        choosebtn3.classList.remove('active');
    }
    if(choosebtn4.classList.contains('active') == true) {
        choosebtn4.classList.remove('active');
    }
    if(choosebtn5.classList.contains('active') == true) {
        choosebtn5.classList.remove('active');
    }
    if(choosebtn6.classList.contains('active') == true) {
        choosebtn6.classList.remove('active');
    }
}
let choosebtn2 = document.getElementById('choose_btn2');
choosebtn2.onclick = function(){
    choosebtn2.classList.add('active');
    if(choosebtn1.classList.contains('active') == true) {
        choosebtn1.classList.remove('active');
    }
    if(choosebtn3.classList.contains('active') == true) {
        choosebtn3.classList.remove('active');
    }
    if(choosebtn4.classList.contains('active') == true) {
        choosebtn4.classList.remove('active');
    }
    if(choosebtn5.classList.contains('active') == true) {
        choosebtn5.classList.remove('active');
    }
    if(choosebtn6.classList.contains('active') == true) {
        choosebtn6.classList.remove('active');
    }
}
let choosebtn3 = document.getElementById('choose_btn3');
choosebtn3.onclick = function(){
    choosebtn3.classList.add('active');
    if(choosebtn1.classList.contains('active') == true) {
        choosebtn1.classList.remove('active');
    }
    if(choosebtn2.classList.contains('active') == true) {
        choosebtn2.classList.remove('active');
    }
    if(choosebtn4.classList.contains('active') == true) {
        choosebtn4.classList.remove('active');
    }
    if(choosebtn5.classList.contains('active') == true) {
        choosebtn5.classList.remove('active');
    }
    if(choosebtn6.classList.contains('active') == true) {
        choosebtn6.classList.remove('active');
    }
}
let choosebtn4 = document.getElementById('choose_btn4');
choosebtn4.onclick = function(){
    choosebtn4.classList.add('active');
    if(choosebtn1.classList.contains('active') == true) {
        choosebtn1.classList.remove('active');
    }
    if(choosebtn2.classList.contains('active') == true) {
        choosebtn2.classList.remove('active');
    }
    if(choosebtn3.classList.contains('active') == true) {
        choosebtn3.classList.remove('active');
    }
    if(choosebtn5.classList.contains('active') == true) {
        choosebtn5.classList.remove('active');
    }
    if(choosebtn6.classList.contains('active') == true) {
        choosebtn6.classList.remove('active');
    }
}
let choosebtn5 = document.getElementById('choose_btn5');
choosebtn5.onclick = function(){
    choosebtn5.classList.add('active');
    if(choosebtn1.classList.contains('active') == true) {
        choosebtn1.classList.remove('active');
    }
    if(choosebtn2.classList.contains('active') == true) {
        choosebtn2.classList.remove('active');
    }
    if(choosebtn3.classList.contains('active') == true) {
        choosebtn3.classList.remove('active');
    }
    if(choosebtn4.classList.contains('active') == true) {
        choosebtn4.classList.remove('active');
    }
    if(choosebtn6.classList.contains('active') == true) {
        choosebtn6.classList.remove('active');
    }
}
let choosebtn6 = document.getElementById('choose_btn6');
choosebtn6.onclick = function(){
    choosebtn6.classList.add('active');
    if(choosebtn1.classList.contains('active') == true) {
        choosebtn1.classList.remove('active');
    }
    if(choosebtn2.classList.contains('active') == true) {
        choosebtn2.classList.remove('active');
    }
    if(choosebtn3.classList.contains('active') == true) {
        choosebtn3.classList.remove('active');
    }
    if(choosebtn4.classList.contains('active') == true) {
        choosebtn4.classList.remove('active');
    }
    if(choosebtn5.classList.contains('active') == true) {
        choosebtn5.classList.remove('active');
    }
}

document.querySelector('.yt1_btn').onclick = function(){
    document.querySelector('.yt1').innerHTML = '<iframe width="555" height="300" src="https://www.youtube-nocookie.com/embed/RK1K2bCg4J8?controls=0" frameborder="0" allow="accelerometer; autoplay="1"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
document.querySelector('.yt2_btn').onclick = function(){
    document.querySelector('.yt2').innerHTML = '<iframe width="555" height="300" src="https://www.youtube-nocookie.com/embed/RK1K2bCg4J8?controls=0" frameborder="0" allow="accelerometer; autoplay="1"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

// jquery
$(document).ready(function(){
    $('.menuToggle').click(function(){
        $(this).toggleClass('active');
        $('.big_menu').slideToggle(300);
    })
})