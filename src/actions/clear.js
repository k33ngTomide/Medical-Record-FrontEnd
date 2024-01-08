
const clear = () => {
  const elements = ['home', 'profile', 'patients', 'hospitals', 'helps'];

  const buttons = ['home_button', 'profile_button', 'patient_button', 'hospital_button', 'help_button']

  elements.forEach((element) => {
    document.getElementById(element).style.display = 'none';
  });
  
  buttons.forEach((button) => {
    document.getElementById(button).style.backgroundColor = '#e2e6e6';
  });
  
}

module.exports = clear