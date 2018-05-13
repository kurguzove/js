class Fighter {
  
  constructor(name, power, health = 100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
  setDamage(dmg) {
    this.health -= dmg;
    if (this.health <= 0) {
      console.log(`${this.name} is dead`);
      throw "Game over"; 
    } else {
      console.log(`${this.name} health is ${this.health}`);
    }
  }
  
  hit(enemy, point) {
    
    if (! enemy instanceof Fighter) {
      throw "Invalid fighter :)";
    } 
    
    const dmg = this.getRandomPunch(this.power * point);
    console.log(`${this.name} kick ${enemy.name} on ${dmg}`);
    
    enemy.setDamage(dmg);
  }
  
  getRandomPunch(power) {
    let min = Math.floor(power / 2);
        
    return Math.floor(Math.random() * (power - min)) + min;
  }
}

class ImprovedFighter extends Fighter {
  
  hit(enemy, point) {
    this.doubleHit(enemy, point);
  }
  
  doubleHit(enemy, point) {
    super.hit(enemy, point * 2);
  }
}

function fight(f1, f2, ...points) {
  try {
    
//     for (let i in points) {
//       f1.hit(f2, points[i]);
//       f2.hit(f1, points[i]);
//     }
    
    // use arrow function, Luke! But, for what, master? Shut up and use.
    
    points.map(x => {
      f1.hit(f2, x);
      f2.hit(f1, x);
    });
    
  } catch (e) {
    console.log(e);
    return false;
  } 
  
  // they both still alive, strange ... 
  console.log('What a boring day!');
}

let vasya = new ImprovedFighter('vasya', 7);
let petya = new Fighter('petya', 7);

fight(petya, vasya, 5, 7, 9);  