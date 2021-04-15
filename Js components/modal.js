let modalBox=document.getElementById('my-modal');
let btnModal=document.getElementById('btn');
let closeX=document.getElementById('close');


btnModal.addEventListener('click',clickBtn);
function clickBtn(){
    modalBox.style.display='block';
}

closeX.addEventListener('click',closeBox);
function closeBox(){
    modalBox.style.display='none';
}
