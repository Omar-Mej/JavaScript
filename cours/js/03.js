//les opérateurs arithmétiques
var nb1,nb2,result,mult,mod,div;//permet de declarer plusieurs variables en meme temps 
/*
var nb1;
var nb2;
var nb3;
*/
nb1=10;
nb2=42;
//les additions
result=nb1 + nb2;
console.log(result);
//les soustrations
result=nb2-nb1;
console.log(result);
//les multiplications
mult=nb1*nb2;
document.write(mult+ "<br>")
//les divisions
div=nb2/nb1;
document.write(div+ "<br>")
//le reste des divisions
mod=nb2%nb1;
document.write(mod);
//les incrémentations
var nb3=1;
nb3=nb3 +1;//la premiere façon d'incrémenter
console.log(nb3);
var nb4=1
nb4++;//la 2eme façon d'incrementer, nb3++,permet de s'incrementer par un
nb4++;//a chaque fois je fais ++ j'incremente avec 1
nb4++;
//on peut le faire autrement 
++nb4;
/*
nb4++ equivalent a ++nb4 est equivalent a nb4 = nb4+1 c'est equivalent a nb4+=1
*/
console.log(nb4);
//les décremention
var nb5=8;
nb5++;// ici c'est 9
nb5--;//ici 8 
nb5-=1;//ici 7
//nb5--equivalent a nb5 = nb5-1 c'est l'equivalent a nb5-=1
