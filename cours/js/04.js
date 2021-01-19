//les boucles permettent de repeter des actions n fois
//on a les boucle for (pour ....),la boucle while (tant que ...),la boucle do while()
/*
* syntaxe de boucle for 
* for(la valeur de demarrage de la boucle ; la limite de la boucle ; le chiffre d'incrementation)
* for (var i =0;i<10 ;i++), la boucle va commencer a 0 et finir a 9 en s'incrementant 1 a 1
*/
for(var i = 0; i<10; i++){
    document.write(i+"<br>");
}
//l'incrementation 2 par 2 
for(var i = 0; i<10; i=i+2) {    
    document.write(i*i+"<br>");
}
for(var i = 0; i<=5; i++){
    document.write(i+"*"+i+"="+i*1+"<br>");
}
document.write("<h3>-------------boucle while---------------</h3>");
/*---------la boucle while (tant que)-----------
while(condition){
    //des instructions
}*/
var nb=5;
while(nb<10){//tant que la valeur br est inferieur a 10 execute moi ces instructions
    document.write(nb+"<br>");
    nb++;

}
//exo
var compte=1000;
while(compte<=2000){
var temp=0;
    document.write(compte+"<br>");
    compte+=50
}