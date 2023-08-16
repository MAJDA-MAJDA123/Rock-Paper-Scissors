// tri pqr selection

const T=[13,24,11,3,2,5,23,4,19,0];

var min;

for(let i=0;i<=9;i++){

    for(let j=i+1;j<=9;j++){

        if(T[i]>T[j]){

            min=T[j];
            T[j]=T[i];
            T[i]=min;
        }    
    }
}

console.log("tri selection "+T);

// tri par bulle

const N=[13,24,11,3,2,5,23,4,19,0];
var tmp;

do{
    var changement=false;
    for(var i=0;i<N.length-1;i++){
        if(N[i]>N[i+1]){
            tmp=N[i];
            N[i]=N[i+1];
            N[i+1]=tmp;
            changement=true;
        }
    }

}while(changement)

console.log("tri bulle "+N);

//insertion sort 



function sortInsert(tableau){

    for (let i = 1; i < tableau.length; i++) {
        let current = tableau[i];
        let j = i - 1;

        while (j >= 0 && tableau[j] > current) {
            tableau[j + 1] = tableau[j];
            j--;
        }

        tableau[j + 1] = current;
    }

    return tableau;
}

const x = [13,24,11,3,2,5,23,4,19,0];

var resultat = sortInsert(x);
console.log("sort insert "+resultat);

// recherche lineaire

function rechercheLineaire(tableau, val){
 var pos=-1;

    for(let i = 0; i < tableau.length; i++){
     if(tableau[i] ==val ){
        pos= i+1;
     }

    }    
    return pos  ;
}
const y = [13,24,11,3,2,5,23,4,19,0];
var rlt= rechercheLineaire(y,13);
console.log("la position est "+ rlt);

const z = [13,24,10];
var rs=rechercheLineaire(z,10);
console.log("la position est "+ rs);


// compter les zeros 

function countZero(matrix){    
    let compteur = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                compteur++;
            }
        }
    }

    return compteur;
}

const matrix = [    [1, 0, 0, 2],   [0, 3, 0, 4],  [5, 0, 6, 0] ];

var res = countZero(matrix);

console.log("le nombre de zero est "+ res);
