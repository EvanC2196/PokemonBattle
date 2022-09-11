let calculate = {
  damageCalc: function (power, acc, mT, type) {
    console.log(
      `${turn[turnCount][currentP].name} used ${turn[turnCount][currentP].move1name}`
    );
    this.accuracyCalc(acc);
    this.effectivenessCalc(mT, type);
    damage = power * effectiveness * hit;
    console.log(`damage is ${damage}`);
  },

  effectivenessCalc: function (mT, type) {
    for (i = 0; i <= 1; i++) {
      console.log(mT);
      console.log(type[i]);

      switch (mT + type[i]) {
        case "FireWater":
          effectiveness = effectiveness * 0.5;
          break;
        case "FireGrass":
          effectiveness = effectiveness * 2;
          break;
        case "FireNormal":
          effectiveness = effectiveness * 1;
          break;
        case "FireFire":
          effectiveness = effectiveness * 0.5;
          break;
        case "FireFlying":
          effectiveness = effectiveness * 1;
          break;
        case "ElectricGrass":
          effectiveness = effectiveness * 0.5;
          break;
        case "ElectricNormal":
          effectiveness = effectiveness * 1;
          break;
      }
      console.log(effectiveness);
    }
  },

  accuracyCalc: function (acc) {
    let randomNum = Math.floor(Math.random() * 100);
    console.log(`randomNum is ${randomNum}`);
    console.log(`${turn[turnCount][currentP].move1name} accuracy is ${acc}`);
    randomNum <= acc ? (hit = 1) : (hit = 0);
    hit === 1
      ? console.log(
          `${turn[turnCount][currentP].name} used ${turn[turnCount][currentP].move1name}`
        )
      : console.log(`${turn[turnCount][currentP].name} missed`);
  },
};

let hit = 0;
let turnCount = 0;
let effectiveness = 1;
currentP = 0;

let moves = {
  flamethrower: function () {
    turnCount === 0
      ? calculate.damageCalc(30, 90, "Fire", cpu[currentP].type)
      : calculate.damageCalc(30, 90, "Fire", user[1].type);
  },
  thunder: function () {
    turnCount === 0
      ? calculate.damageCalc(120, 70, "Electric", cpu[1].type)
      : calculate.damageCalc(120, 70, "Electric", user[1].type);
  },
};

let pokemon = {
  pikachu: {
    name: "Pikachu",
    type: ["Electric", "Normal"],
    move1name: "Thunder",
    move1: moves.thunder,
  },

  charizard: {
    name: "Charizard",
    type1: "Fire",
    type2: "Flying",
    move1name: "Flamethrower",
    move1: moves.flamethrower,
  },

  squirtle: {
    type1: "Water",
    type2: "Normal",
  },

  bulbasaur: {
    name: "Bulbasaur",
    type: ["Grass", "Normal"],
  },
};

let user = [pokemon.pikachu, pokemon.charizard];
let cpu = [pokemon.squirtle, pokemon.bulbasaur];

let turn = [user, cpu];
turn[turnCount][currentP].move1();
