/* 
       les variables
       la declaration des variables en javascript se fait avec
       var nom_de_varaible=valeur;
       il ya deux versions javacript(deux standard) Ecmascript5(es5) et Ecmascript6(es6)
       avec Es6= let nom_variables=valeur;
       idealament les noms des variables contient des alphanumeriques avec underscore tout est attaché et pas de caractères speciaux, il faut pas qu'il commence par un chiffre
       je peux declarer des variables vides:
       var prenom;
​
   */
 /* 
    les types de variables:
        on a le type number(entier), string(chaine de caractere), boolean(true ou false),tableau,objet, float(nombre decimal qui est avec virgule)
        chaque instruction se termine avec pont virgule ;
        var age=30;// déclaration d'une variable de type number
        var prenom="Amal";//déclaration d'une varaible de type chaine de caractère
        var bool=true/false;//la declaration d'une variable
        var nombre_dec=5.35;//la declaration d'un nombre decimal(float)
​
​
    */
   var prenom="Omar";//ici j'ai déclarer une variable
   var age=20;//ici j'affecte une valeur pour cette variable déclarer
   console.log(prenom);//console.log()permet d'afficher des variables et des instructions la console et pas dans la page html
   console.log(age);
   //pour afficher une variable  dans l'html, on utilise la fonction write()
   document.write(prenom);
   //affficher une boite de dialogue
   alert("Super Groupe de Vitry, ils ont commencé le javascript");
   //on peut le faire aussi une autre manière avec window.alert()
   window.alert(prenom);

   var question=prompt("est ce que vous avez aimé le Javscript?");
   console.log(question)
   //document.write(question);
   
   //la déclaration d'une constante se fait avec const, le nom de la constante s'écrit en MAJ, c'est une valeur constante tout au long le projet qui cahnge pas
   const DEVISE="Euro";
   const ANNE="2020";
   console.log(typeof age);//typeoff permet d'afficher le type de la variable
   //on dit que javascript est autotypés, puisque il affecte les types de variable selon la valeur affecté

   //le changement de type variable,changement de number vers string, de string vers number, de number vers float,de float vers number .
   var age=age.toString();//ici je change le type de variable age de number en chaine de caractere avec la fonction toString()
   console.log(typeof age);
   var votreDernierPrix;//les noms des variables et les fonctions ça commence par une minuscule et pour chaque nouveau mot cela commence avec une majuscule
   var annee="2020"// variable annee est de type string
   console.log(typeof annee)
   var annee=parseInt(annee);//la fonction parseInt() permet de changer le type de variable en number, integrer/entier
   console.log(typeof annee)
    /*
    Attention javascript est sensible à la casse ('case sensitive'), il fait la diff entre MAJ et MIN
     */

    /*
    la conversion de type de variable pour un type float avec parseFloat()
    */
   var prix=200;
   console.log(typeof prix);
   var prix=parseFloat("omar");
   console.log(typeof prix)
