const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }




  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  console.log(animalJSON);



  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  var {}

  for (species of animalJSON) {
    species === "cat" ? cats.push() : dogs.push()
  }

  console.log(dogs);
  console.log(cats);


  // animalJSON.ForEach(function(animal) {
  //   if (animal.species === "dog") {
  //     dogs.push(animal);
  //   } else if (animal.species ==="cat") {
  //     cats.push(animal);
  //   }
  // })





});
