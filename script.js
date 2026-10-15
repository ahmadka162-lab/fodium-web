function appliquerLangue(langue) {
  document.querySelectorAll('[data-trad]').forEach(element => {
    const cle = element.getAttribute('data-trad');
    element.textContent = traductions[langue][cle];
  });
  localStorage.setItem('langueFodium', langue);
}

const selecteur = document.getElementById('selecteurLangue');
selecteur.addEventListener('change', (e) => appliquerLangue(e.target.value));

const langueSauvegardee = localStorage.getItem('langueFodium') || 'fr';
selecteur.value = langueSauvegardee;
appliquerLangue(langueSauvegardee);
