/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */

//The below code is from Eric's demo in class.
 (function(){
    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';


    function LivingThing(name, health){
            var name = name;
            var health = health;

            this.isAlive = function(){
                return Boolean(health);
            }

            this.getName = function(){
                return name;
            }

            this.getHealth = function(){
                return health;
            }

            this.setHealth = function(newHealth){
                if(newHealth <= 0 ){
                    newHealth = 0;
                }
                health = newHealth;
            }
        }

        let creature1 = new LivingThing("Rat", 5);
        let creature2 = new LivingThing("Goblin", 30);
        let creature3 = new LivingThing("Ogre", 80);

        var monsters = [creature1, creature2, creature3]

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }

        function Hero(name, health) {
          LivingThing.call(this, name, health);

          this.attack = function(LivingThing){
            let heroDamage = getRandomInt(0,10);
            let livingThingDamage = getRandomInt(0,10);

            this.setHealth(this.getHealth() - heroDamage);
            LivingThing.setHealth(LivingThing.getHealth() - livingThingDamage);

            console.log(this.getName() + "'s health (" + this.getHealth() + ") reduced by: " + heroDamage);
            console.log(LivingThing.getName() + "'s health (" + LivingThing.getHealth() + ") reduced by: " + livingThingDamage);
          }

          this.fight = function(livingThingArray){
            for (let i=0; i < livingThingArray.length; i++) {

                while(this.isAlive() && livingThingArray[i].isAlive()){
                    this.attack(livingThingArray[i])
                }

                if(!this.isAlive()){
                    break;
                }
            }
          }
        }

        let hero = new Hero("superman", 100)

    //The code below should work when you are done
    console.log("A hero emerges!");

    console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm");
    console.log("Will they be victorious?");

    hero.fight(monsters);

    if (hero.isAlive()) {
        console.log("The hero, " + hero.getName() + ", prevailed!");
    }
    else {
        console.log(hero.getName() + " was bested by the monsters. We are doomed");
    }

})();
