


var niz = [9, 9, 10, 2, 3, 4, 4, 5, 7,8,2,44,62,1,25,44,5];
var noviNiz = niz.slice().sort(); 
                                                                       
var rezultat = [];
for (var i = 0; i < niz.length - 1; i++) {
    if (noviNiz[i + 1] == noviNiz[i]) {
        rezultat.push(noviNiz[i]);

    }
}

console.log("Duplikati su brojevi: " + rezultat);