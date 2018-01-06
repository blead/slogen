import 'normalize.css';
import './index.css';

const sloganText = document.getElementById('slogan-text');
const generateButton = document.getElementById('generate-button');

let data = {
  slogan: ((element) => element.textContent)(sloganText)
};

const render = (prevData, nextData) => {
  if(prevData.slogan != nextData.slogan) {
    sloganText.textContent = nextData.slogan;
  }
};

const handleClick = () => {
  const nextData = {
    ...data,
    slogan: generateSlogan()
  };
  render(data, nextData);
  data = nextData;
};

const generateSlogan = () => Math.random().toString(36).concat(Date.now().toString(36)).substring(2);

generateButton.addEventListener('click', handleClick);


