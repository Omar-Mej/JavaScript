//la concatenation des variables et des chaines de caracteres
var var1="je suis une chaine de caractere";
var var2="cancaténée a partir de plusiseur chaines";
var result=var1+" "+var2;// la concaténation se fait avec l'operateur +, on peut concaténé des variables avec des chaine de caracteres
console.log(result)
document.write(result + "<br>")
//laconcaténation des variables de types number 
var annee=2017;
var mois =11;
var calcul= annee + mois;//la concaténation avec des numbers ce deffère a celle des chaines de caracteres, avec les numbers se fait comme operation d'addition

document.write(calcul);
var calcul=annee.toString() + mois.toString();//pour concatener des nuber sous form de chaine de caracetere, on oeut utiliser la fonction toString()
console.log(calcul);//ici il va concatener sous forme string
document.write("Bonjour groupe de vitry vous ete en mois de : " +mois)