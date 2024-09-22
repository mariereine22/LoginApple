// const deverouiller = document.getElementById("submit-btn");
// connect.addEventListener("click", function () {
//   window.location.href = "index/index.html";
// });

// Sélection des boutons par leurs IDs
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");

// Ajouter un événement au bouton "Annuler" pour renvoyer à la page index.html
cancelBtn.addEventListener("click", function () {
  window.location.href = "/index.html"; // Redirection vers la page d'accueil
});

// Ajouter un événement au bouton "Déverrouiller" pour renvoyer à page.html
submitBtn.addEventListener("click", function () {
  window.location.href = "../page-app/page.html"; // Redirection vers la page de déverrouillage
});
