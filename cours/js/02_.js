// les conditions se fait le bloc si sinon 
/*
if(condition)
Instruction1;
Instruction2;
Instruction3;
. . .
else{
autre instruction
}
*/
//var nb=20;
if(nb1<50){//ici les accolades pour limiter les instructions pour la condition if
    //ici j'écris toutes les instructions
    console.log("le nb1 est inférieur à 50");
}
else{
    //si la condition n'est pas valider il execute le code qui est dans le bloc sinon(else)
    console.log("le nb1 est supérieur ou égal à 50");
}
var age =prompt("quel est votre age");
//ecrire une condition qui prends l'age est affiché mineur s'il est inférieur à 18 et majeur si il est supérieur ou égal à 18
if (age>=18){
    console.log("Bienvenue si vous etes majeur");
}else{
    console.log("Vous etes mineur");
}
/* si on a plusieur conditions on peut faire des if....else imbriqué la syntaxe 
if( condition)