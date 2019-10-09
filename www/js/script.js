window.addEventListener('load', (event) => {
  const svg = document.querySelectorAll('.svg');

  for (let i = 0; i < svg.length; i++) {
    var x = 0;
    if (i == 22){
      svg[i].classList.add("animated");
      svg[i].classList.add("bounceInDown");
      x = i / 40;
      svg[i].style.animationDelay = x.toString()+"s";
      svg[i].style.animationDuration = "0.5s";
      svg[i].style.fill = "#65433D";
    }
    else{
      svg[i].classList.add("animated");
      svg[i].classList.add("pulse");
      x = i / 40;
      svg[i].style.animationDelay = x.toString()+"s";
      svg[i].style.animationDuration = "0.3s";
      svg[i].style.fill = "#65433D";
    }
  }
});

var btns = document.querySelectorAll('shopInfoTitle');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(){
    console.log("success");
    // if(btns[i].classList != "active"){
      
    //   btns[i].classList.add(" active");

    // }
  });
} 
