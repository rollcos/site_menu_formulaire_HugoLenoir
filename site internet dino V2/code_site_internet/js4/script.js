"use strict"
// enrengistrer les info
let pseudo=document.querySelector("#pseudo");
console.log(pseudo);
let bt=document.querySelector('#bt')
function check(e){
    e.preventDefault();
    let pseudoValue=pseudo.ariaValueMax;
    console.log(pseudo.value)
}bt.addEventListener('click',check)

// Expression régulière pour valider les mots de passe
const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!#$%&?]).{8,}$/;



// Fonction pour vérifier si un mot de passe est valide
function validatePassword(password) {
    return passwordRegex.test(password);
}

// Exemple d'utilisation
const password1 = "Secret123!";
const password2 = "WeakPass"; // Ne respecte pas les critères

if (validatePassword(password1)) {
    console.log("Le mot de passe est valide !");
} else {
    console.log("Le mot de passe ne respecte pas les critères.");
}

if (validatePassword(password2)) {
    console.log("Le mot de passe est valide !");
} else {
    console.log("Le mot de passe ne respecte pas les critères.");
}