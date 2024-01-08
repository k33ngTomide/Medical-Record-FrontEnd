import clear from './clear'


const homeClick = () => {
  clear();
  document.getElementById('home').style.display = 'flex';
  document.getElementById('home_button').style.backgroundColor = 'lightblue';
}

export default homeClick;