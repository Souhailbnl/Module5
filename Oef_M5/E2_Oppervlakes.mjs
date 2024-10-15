
function cirkel(straal) {

    return Math.PI * straal * straal;
    
}

function driehoek(basis,hoogte) {

    return (basis * hoogte) / 2;
    
}

function rechthoek(zijde1,zijde2) {

    return zijde1 * zijde2;
    
}

function vierkant() {
    
    return rechthoek(4,4);
}


let oppervlakteCirkel = cirkel(3);

console.log(oppervlakteCirkel);

let oppervlakteDriehoek = driehoek(5,2);

console.log(oppervlakteDriehoek);

let oppervlakteRechthoek = rechthoek(4,4);

console.log(oppervlakteRechthoek)

let oppervlakteVierkant = vierkant();

console.log(oppervlakteVierkant)

