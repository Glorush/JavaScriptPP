var canva = document.getElementById('my-canva');
// console.log(canva)

// canva.style.border = 'thick solid #0000FF'
canva.width = window.innerWidth;
canva.height = window.innerHeight;
// canva.style.background ="orange";
var c = canva.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0 , 255, 0.1)'
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.1)';
c.fillRect(250, 250, 100, 100);
// console.log(canva)


