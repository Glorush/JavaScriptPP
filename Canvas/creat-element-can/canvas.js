var canva = document.getElementById('my-canva');
// console.log(canva)


canva.width = window.innerWidth;
canva.height = window.innerHeight;
var c = canva.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0 , 255, 0.1)'
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.1)';
c.fillRect(250, 250, 100, 100);

// line 
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "orange";
c.stroke();

// Arc / Circle 

