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

export { addEventListener };
