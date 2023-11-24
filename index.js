var message = document.getElementById("message");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");

formulaire.onsubmit = (e) => {
  let output = document.getElementById("output");

  let msgParagraph = document.createElement("p");
  msgParagraph.innerHTML = message.value + "\n" + prenom.value + nom.value;
  output.appendChild(msgParagraph);
  message.value = "";
  prenom.value = "";
  nom.value = "";
  e.preventDefault();
};

document.getElementById("formulaire").addEventListener("submit", function (e) {
  var erreur;

  if (!prenom.value) {
    erreur = "Tous les champs doivent être remplis";
  }
  if (!nom.value) {
    erreur = "Tous les champs doivent être remplis";
  }
  if (!message.value) {
    erreur = "Tous les champs doivent être remplis";
  }

  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
  } else {
    alert("formulaire envoyé!");
  }
});
