const title = document.querySelector('.page-title');
const shoutButton = document.querySelector('.shout-button');
function sayHello() { title.textContent = 'Bienvenue sur mon profil !'; }
shoutButton.addEventListener('click', sayHello);
const email = document.querySelector('.email');
const copyButton = document.querySelector('.copy-email');
const status = document.querySelector('.copy-status');
let resetTimer;
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email.textContent.trim());
    copyButton.textContent = 'Copié !'; status.textContent = 'Lien copié.';
    clearTimeout(resetTimer);
    resetTimer = setTimeout(function () { copyButton.textContent = 'Copier mon lien GitHub'; status.textContent = ''; }, 2000);
  } catch (error) { status.textContent = 'Copie impossible : sélectionne le lien et copie-la manuellement.'; }
}
copyButton.addEventListener('click', copyEmail);
document.querySelector('.theme-button').addEventListener('click', function () { document.body.classList.toggle('dark'); });
