var CheminComplet = document.location.href;
var CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
var NomDuFichier  = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
var tabID = NomDuFichier.split("?")
var id1 = tabID[1];
var id2 = tabID[2];

console.log(id1);
console.log(id2);

const joueur1 = (id) => {
    const req = new XMLHttpRequest();
    let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json";

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            const json = JSON.parse(this.responseText);
            document.getElementById('Namej1').innerHTML = json.name;
            document.getElementById('Intelligence1').innerHTML = json.powerstats.intelligence;
            document.getElementById('Force1').innerHTML = json.powerstats.strength;
            document.getElementById('Vitesse1').innerHTML = json.powerstats.speed;
            document.getElementById('Endurence1').innerHTML = json.powerstats.durability;
            document.getElementById('Puissance1').innerHTML = json.powerstats.power;
            document.getElementById('Attaque1').innerHTML = json.powerstats.combat;
            document.getElementById('url_logo1').innerHTML = json.images
            }
    }
    req.open('GET', url, true);
    req.send();
};
joueur1(id1)


const joueur2 = (id) => {
    const req = new XMLHttpRequest();
    let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json";

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
            const json = JSON.parse(this.responseText);
            document.getElementById('Namej2').innerHTML = json.name;
            document.getElementById('Intelligence2').innerHTML = json.powerstats.intelligence;
            document.getElementById('Force2').innerHTML = json.powerstats.strength;
            document.getElementById('Vitesse2').innerHTML = json.powerstats.speed;
            document.getElementById('Endurence2').innerHTML = json.powerstats.durability;
            document.getElementById('Puissance2').innerHTML = json.powerstats.power;
            document.getElementById('Attaque2').innerHTML = json.powerstats.combat;
            }
    }
    req.open('GET', url, true);
    req.send();
};
joueur2(id2)