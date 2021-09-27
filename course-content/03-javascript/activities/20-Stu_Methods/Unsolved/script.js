var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

//unshifting constellations
constellations.unshift("Canis Major");
console.log(constellations);

//removing venus
planets.splice(5, 1);
console.log(planets);

// or 
planets.pop();
console.log(planets);


// making galaxy

var galaxy = planets.concat(constellations);
console.log(galaxy);

// polaris caps
var upper = star.toUpperCase();
console.log(upper);
console.log(star);

