const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeElementColors = (element) => {
  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();
};

const addEventListener = (element) => {
  element.addEventListener('click', (event) => {
    changeElementColors(event.target);
  });
};

const addImage = (container) => {
  const images = container.getElementsByTagName('img');
  const newImage = images[0].cloneNode();
  container.appendChild(newImage);
};

const increaseSize = (container) => {
  const images = container.getElementsByTagName('img');
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    const currentWidth = lastImage.clientWidth;
    lastImage.style.width = currentWidth + 100 + 'px';
  }
};

const decreaseSize = (container) => {
  const images = container.getElementsByTagName('img');
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    const currentWidth = lastImage.clientWidth;
    if (currentWidth > 50) {
      lastImage.style.width = currentWidth - 100 + 'px';
    }
  }
};

const removeImage = (container) => {
  const images = container.getElementsByTagName('img');
  if (images.length > 1) {
    container.removeChild(images[images.length - 1]);
  }
};

const imageUtils = [addImage, increaseSize, decreaseSize, removeImage];

const addEventListenersForButtons = (buttons, container) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => imageUtils[i](container));
  }
};

export { addEventListener, addEventListenersForButtons };
