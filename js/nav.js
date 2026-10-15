// Mobile menu: open and close the navigation on small screens
const nav = document.querySelector('.nav');
document.querySelector('.burger').onclick = () => nav.classList.toggle('open');

// Mobile menu: expand a dropdown group when it is tapped
document.querySelectorAll('.grp > button').forEach(b => {
  b.onclick = () => b.parentElement.classList.toggle('open');
});
