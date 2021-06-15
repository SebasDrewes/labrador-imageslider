// def DOM
const img = document.querySelectorAll('.img');
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const spheresContainer = document.querySelector('.spheresContainer');
// a primer imagen del node, actualiza display
img[0].style.display = 'block';
let currentImage = 0;
// selecciona node esfera, y agrega class a esfera seleccionada
// borra class de todas las esferas distintas
const sphereColor = (i) => {
  const sphere = document.querySelectorAll('.sphere');
  sphere[i].classList.add('sphereClicked');
  for (let j = 0; j < sphere.length; j += 1) {
    if (sphere[i] !== sphere[j]) {
      sphere[j].classList.remove('sphereClicked');
    }
  }
};

rightArrow.addEventListener('click', () => {
  if (img[currentImage].style.display === 'block' && img[currentImage + 1] !== undefined) {
    img[currentImage].style.display = 'none';
    img[currentImage + 1].style.display = 'block';
    currentImage += 1;
    sphereColor(currentImage);
  } else {
    img[0].style.display = 'block';
    img[img.length - 1].style.display = 'none';
    currentImage = 0;
    sphereColor(currentImage);
  }
});
leftArrow.addEventListener('click', () => {
  if (img[currentImage].style.display === 'block' && img[currentImage - 1] !== undefined) {
    img[currentImage].style.display = 'none';
    img[currentImage - 1].style.display = 'block';
    currentImage -= 1;
    sphereColor(currentImage);
  } else {
    img[img.length - 1].style.display = 'block';
    img[0].style.display = 'none';
    currentImage = img.length - 1;
    sphereColor(currentImage);
  }
});
// creacion dinamica de esferas por imagen
for (let i = 0; i < img.length; i += 1) {
  const sphere = document.createElement('div');
  // a cada esfera, se la linkea con el index de imagen correspondiente
  // para poder actualizar display con esa imagen
  // y actualiza currentImage para mantener funcionamiento arrows
  // eslint-disable-next-line no-loop-func
  sphere.addEventListener('click', () => {
    img[i].style.display = 'block';
    for (let j = 0; j < img.length; j += 1) {
      // cambia display de todas las otras imagenes, menos la clickeada
      if (img[j] !== img[i]) {
        img[j].style.display = 'none';
        currentImage = i;
        // funcion colorear esfera
        sphereColor(i);
      }
    }
  });
  sphere.classList.add('sphere');
  spheresContainer.appendChild(sphere);
}
// pinta primer esfera
sphereColor(0);
// mueve una imagen cada 5 seg
setInterval(() => {
  rightArrow.click();
}, 5000);
