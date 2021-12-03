// TODO: Add a comment describing what kind of function this is
// This a constructor function 
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// Protoype is adding an method that prints out a its porperties(keys)
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// This is prototyping is adding a key for if the the HP is > 0, then it prints out the chartacter is alive, els, the character has died.
// adds the a key isAlive? and adds a true or false valur to that
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// It adds a key add attack, attack is equal to characters2's HP - that strength of whatever is passed to this
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// adds key levelUp, increase characters ag, strg, and HP. Store this function as a key value
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console /
// 55

warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
//  ('Crusher', 'Warrior', 25, 10, 55);
warrior.isAlive();
true
rogue.levelUp();
new Character('Dodger', 'Rogue', 24, 25, 75);
// TODO: Add a comment describing what you expect to see printed in the console
//
rogue.printStats();
