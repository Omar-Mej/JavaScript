/* 
switch syntaxe
var semaine=prompt("donnez moi un chiffre en 1 et 7");
switch(semaine){//selon la valeur de la variable semaine
    case 1://cas numero 1 (c'est la premiere valeur de semaine)
        instruction1;
        break;
    case 2:
        instruction2;
        break;
    case 3:
        instruction3;
        break;//break c'est pour sortir de ce cas 
        default://
    

}
*/
var semaine=parseInt(prompt("donnez moi un chiffre en 1 et 7"));
switch(semaine){
    case 1:
        console.log("le chiffre tappez correspond a lundi");
        break;
    case 2:
        console.log("le chiffre tappez correspond a mardi");
        break;
    case 3:
        console.log("le chiffre tappez correspond a mercredi");
        break;
    case 4:
        console.log("le chiffre tappez correspond a jeudi");
        break;  
    case 5:
        console.log("le chiffre tappez correspond a vendredi");
        break;     
    case 6:
        console.log("le chiffre tappez correspond a samedi");
        break;
    case 7:
        console.log("le chiffre tappez correspond a dimanche");
        break;
    default:
        console.log("le chiffre correspond pas");
}
//demander a l'utilisateur de tapper le premier caractere deson navigateur
var browser=prompt("tappez le premier caractere de to navigateur");
switch(browser){
    case 'o':
        console.log("cela correspond a Opera");
        break;
    default:
        console.log("la valeur entrez est fausse");
}
//vous aller declarer de variable 
//var a=5;
//var b=7;
document.write("<h4>-------------------</h4>")
    var a=5;
    var b=7;
    var operateur=prompt("donner l'operateur");
    switch(operateur){
        case '+':
        document.write("l'addition de "+a + " et " +b + "donne " +(a+b));
        break;
        default:
    }