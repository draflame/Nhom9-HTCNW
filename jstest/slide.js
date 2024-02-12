let list= document.querySelector('.slide .list');
let items= document.querySelectorAll('.slide .list .item');
let dots= document.querySelectorAll('.slide .dots li');
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active=0;

next.onclick= function(){
    if(active+1>items.length-1){
        active=0;
    }else{
        active++;
    }
    reloadSlide();
}
prev.onclick= function(){
    if(active<0){
        active=items.length-1;
    }
    else{
        active--;
    }
    reloadSlide();

}    
function reloadSlide(){
    let left=items[active].offsetLeft;
    list.style.left= -left + 'px';
    updateDot();
    clearInterval(autoSlide);
    autoSlide= setInterval(()=>{next.onclick()},5000);
}
function updateDot(){
    let lastActiveDot= document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li,key)=>{
    li.addEventListener('click',function(){
        active=key;
        reloadSlide();
    })
})
let autoSlide= setInterval(()=>{next.onclick()},5000);