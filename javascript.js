const img = document.querySelectorAll('.img');
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
img[0].style.display = 'block';
let currentImage = 0;
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

const spheresContainer = document.querySelector('.spheresContainer');
for (let i = 0; i < img.length; i += 1) {
  const sphere = document.createElement('div');
  // eslint-disable-next-line no-loop-func
  sphere.addEventListener('click', () => {
    img[i].style.display = 'block';
    for (let j = 0; j < img.length; j += 1) {
      if (img[j] !== img[i]) {
        img[j].style.display = 'none';
        currentImage = i;
        sphereColor(i);
      }
    }
  });
  sphere.classList.add('sphere');
  spheresContainer.appendChild(sphere);
}
sphereColor(0);
