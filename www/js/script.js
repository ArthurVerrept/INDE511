window.onbeforeunload = () => {
  window.scrollTo(0, 0);  
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.querySelector(".burgerClosed").classList.replace('hidden', 'unHidden');
  document.querySelector(".burgerClosed").classList.add = ' animated fadeOut';
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";

  document.querySelector(".burgerClosed").classList.replace('unHidden', 'hidden');
}

window.addEventListener('scroll', ()=> {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > 10){
    document.querySelector('.navbar').style.transform = 'scale(0.9)';
    document.querySelector('.navbar').style.top = '-1vw';
  }
  else{
    document.querySelector('.navbar').style.transform = 'scale(1)';
    document.querySelector('.navbar').style.top = '0';
  }
  
});


window.addEventListener('load', (event) => {
  const svg = document.querySelectorAll('.svg');


  for (let i = 0; i < svg.length; i++) {
    var x = 0;
    if (i == 22 || i == svg.length-1){
      svg[i].classList.add('animated');
      svg[i].classList.add('bounceInDown');
      x = i / 40;
      svg[i].style.animationDelay = x.toString()+'s';
      svg[i].style.animationDuration = '0.5s';
      svg[i].style.fill = '#65433D';
    }
    else{
      svg[i].classList.add('animated');
      svg[i].classList.add('pulse');
      x = i / 40;
      svg[i].style.animationDelay = x.toString()+'s';
      svg[i].style.animationDuration = '0.3s';
      svg[i].style.fill = '#65433D';
    }
  }
});

var btns = document.querySelectorAll('.shopInfoTitle');
var info = document.querySelectorAll('.shopInfoText');



for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (idNum)=>{
    var current = document.getElementsByClassName('active');
    if(current[0].id == btns[i].id){
      current[0].className = current[0].className.replace(' active underLine', '');
    }
    else{
      for (let x = 0; x < current.length; x++) {
        if(current[x].id == btns[i].id){
          current[x].className = current[x].className.replace(' active underLine', '');
          
        }
      }
    }
    btns[i].className += ' active underLine';

    for (let u = 0; u < info.length; u++) {
      info[u].classList.add('hidden');
      }
    info[i].classList.remove('hidden');
   });
} 






