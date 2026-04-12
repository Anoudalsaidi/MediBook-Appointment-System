document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkToggle');


  if(localStorage.getItem('darkMode') === 'true'){
    document.body.classList.add('dark');
    if(toggle) toggle.checked = true; 
  }

 
  if(toggle){
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
  }
});