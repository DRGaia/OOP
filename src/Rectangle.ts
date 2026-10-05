export {}

// Objektin luominen suorakulmiolle (rectangle)
const rectangle = {
    x: 50,           // Vasemman yläkulman x-koordinaatti
    y: 50,           // Vasemman yläkulman y-koordinaatti
    width: 200,      // Leveys
    height: 100      // Korkeus
};

// Canvas-elementti ja konteksti
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// Tarkistetaan, että konteksti on olemassa
if (ctx) {
    // Asetetaan täyttöväri
    ctx.fillStyle = "blue";
    
    // Piirretään suorakulmio käyttämällä rectangle-objektin ominaisuuksia
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}
