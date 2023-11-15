let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMove = {
    calcAttack: function() {
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        let playerAttack = function() {
            let calcBaseDamage;
            if(player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            }else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamgae = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamgae;
        
            //Number of Hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        
            //return output
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        
        let enemyAttack = function() {
            let calcBaseDamage;
            if(enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            }else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamgae = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamgae;
        
            //Number of Hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
        
            //return output
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        
        }
        
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        
        //Initiate attack

        let playerFirst = function() {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if(enemy.health <= 0) {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
                alert(enemy.enemyType + " has been killed. Restart the browser to play again");
            }else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                let enemyAttackValues = enemyAttack();
            
                let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - enemyTotalDamage;
                alert(enemy.enemyType + " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if(player.health <= 0) {
                    alert("You loose! Restart the browser to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }     
            }
        }

        let enemyFirst = () => {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert(enemy.enemyType+ " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if(player.health <= 0) {
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                alert("You loose! Restart the browser to play again");
            }else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                let playerAttackValues = playerAttack();
            
                let playerTotalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - playerTotalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if(enemy.health <= 0) {
                    alert("You win! Restart the browser to play again");
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                }else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }     
            }
        }
        
        if(getPlayerSpeed > getEnemySpeed) {
           playerFirst();
        } else if(getPlayerSpeed < getEnemySpeed) {
           enemyFirst();
        }else {
            if(player.agility > enemy.agility) {
                playerFirst();
            }else if(player.agility < enemy.agility){
                enemyFirst();
            }
        }
    }
}


