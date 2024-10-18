var warthunder = [];
warthunder[2024] = "Mad thunder";
warthunder[2023] = "Mobile Infantry";
warthunder[2022] = "Worm Thunder";
warthunder[2021] = "Warfare 2077";
warthunder[2020] = "Space Thunder";
warthunder[2019] = "Earth Thunder";
warthunder[2018] = "Hats off to you";
warthunder[2017] = "rank IX";
warthunder[2016] = "Sailing fleet in war thunder!";
warthunder[2015] = "Unrealistic batttles";
warthunder[2014] = "GAIJILLA";
warthunder[2013] = "Little ponies in the sky";


function frissit(){
    var ev = document.getElementById('ev').value;
    evszam.innerHTML = ev;
    wt.innerHTML = warthunder[ev];
}

function nagyKezdo(szoveg){
    return szoveg.charAt(0).toUpperCase() + szoveg.slice(1);
}

function veletlen(){
    ev.value=Math.floor(Math.random() * 36) + 1979;
}