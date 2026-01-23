




const flechaIzquierda = document.getElementById('flecha-Izquierda');
const flechaDerecha = document.getElementById('flecha-Derecha');
const contenedorImg = document.getElementById('contenedor-img');
const imagenes = document.querySelectorAll('.img_clientes');

let currentIndex = 0;
const imagesToShow = 10; // Número de imágenes visibles a la vez
const totalImages = imagenes.length;
const maxIndex = Math.ceil(totalImages/imagesToShow)-1; // Calcula el número máximo de pasos

flechaIzquierda.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + maxIndex + 1) % (maxIndex+1 );
    contenedorImg.style.transform = `translateX(-${currentIndex * 100 / (maxIndex+1)}%)`;
});

flechaDerecha.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    contenedorImg.style.transform = `translateX(-${currentIndex * 100 / (maxIndex+1 )}%)`; 
}); 



/*==========================================
==========================================================*/ 



const videos = document.querySelectorAll('.video-background');
let indice = 0;

window.addEventListener('DOMContentLoaded', () => {
    // Mostrar el primer video inmediatamente
   

    function deslizarVideos() {
        // Eliminar la clase 'active' del video actual
        videos[indice].classList.remove('active');
        // Actualizar el índice al siguiente video
        indice = (indice + 1) % videos.length;
        // Añadir la clase 'active' al siguiente video
        videos[indice].classList.add('active');
    }

    // Cambiar de video cada 9 segundos
    setInterval(deslizarVideos, 9000);
}); 



/*=========================================================================*/ 



const nav=document.querySelector('.nav') 

const menu=document.getElementById('icon-bar') 

const servicios=document.querySelector('.menu-Servicios')

 let validar=true



 nav.addEventListener('click',()=>{
    menu.classList.remove('modificado')
    servicios.classList.remove('modificado')
    nav.classList.remove('activo') 
   
          
        
  
})



menu.addEventListener('click',(e)=>{ 
   

       if(!validar){  
        menu.classList.remove('modificado')
        servicios.classList.remove('modificado')
        nav.classList.remove('activo') 
        
          
    
       }  

    

      
        else{ 
            menu.classList.add('modificado')
            servicios.classList.add('modificado')
            nav.classList.add('activo')
            menu.style.position='fixex'
            menu.style.top='0px'
            menu.style.left='0px'
          
    
        }  

        validar=!validar

})  



