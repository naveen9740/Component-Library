let btn=document.getElementById('btn');
let toast=document.getElementById('toast-container');
let closeToast=document.getElementById('closeToast');

btn.addEventListener('click',function(){
    toast.style.display='block';
});
closeToast.addEventListener('click',function(){
    toast.style.display='none';
})