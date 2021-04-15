let ham=document.getElementById('ham');
let menu=document.getElementById('menuItems');
let close=document.getElementById('cl');

ham.addEventListener('click',function(){
    menu.style.display='grid';
})
close.addEventListener('click',function(){
    menu.style.display='none';
})