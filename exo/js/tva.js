/*
Exercice : calculer un prix TTC à partir d'un prix HT
*/
 
// Saisie du prix hors taxes

/*var prixHT = Number(prompt("Entrez le prix HT :"));
 
// Calcul du prix TTC

var tauxTVA = 20/ 100;
var prixTTC = prixHT * (1 + tauxTVA);
 
// Affichage du résultat dans la console
console.log("Le prix TTC est de " + prixTTC + " euros");*/

var prixTTC = prompt("Entrez le prix TTC :");

var tauxTVA = 20/ 100;

var prixHT = prixTTC / (1 + tauxTVA);

alert("Le prix HT est de " + prixHT + " euros");

console.log("Le prix HT est de " + prixHT + " euros");

document.write("Le prix HT est de " + prixHT + " euros");