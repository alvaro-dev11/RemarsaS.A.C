// ===========Light box===========
const btnRead=document.querySelectorAll('#btn-read');
const images = document.querySelectorAll('.card-img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.img-close');

images.forEach(img=>{
    img.addEventListener('click', ()=>{
        addImage(img.getAttribute('SRC'), img.getAttribute('ALT'))
    })
})


// FUNCION PARA AGREGAR UNA IMAGEN
const addImage = (srcImage, altImage) => {
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}
// FUNCION PARA QUITAR EL CONTAINER DE LA IMAGEN AL DAR CLICK EN EL BOTÓN CLOSE
closeModal.addEventListener('click', () => {
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})
