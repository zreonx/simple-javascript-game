let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch(classType) {
            case "Gamer":
                player = new Player(classType, 200, 0, 200, 100, 50);
            break; 
            case "Swordman":
                player = new Player(classType, 100, 0, 100, 150, 200);
            break; 
            case "Pirate":
                player = new Player(classType, 100, 0, 50, 200, 50);
            break; 
            case "Zombie":
                player = new Player(classType, 200, 0, 50, 200, 100);
            break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.classList.add("new-interface");
        getInterface.innerHTML = '<div class="character"><img src="img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div></div>';
    },
    setPreFight: function() {
       let getHeader = document.querySelector(".header");
       let getActions = document.querySelector(".actions");
       let getArena = document.querySelector(".arena");

       getHeader.innerHTML = '<div class="task"><p>Find an Enemy!</p></div>';
       getActions.innerHTML = '<div class="center"> <a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a></div>';
       getArena.style.visibility = "visible";

    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //create enemy
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 100);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch(chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }

       getEnemy.classList.add("new-enemy");
       getHeader.innerHTML = '<div class="task"><p>Select your move.</p></div>';
       getActions.innerHTML = '<div class="center"><a href="#" class="btn-prefight" onclick="PlayerMove.calcAttack()">Attack!</a></div>';
       getEnemy.innerHTML = '<div class="character"><img src="img/avatar-enemies/'+ enemy.enemyType.toLowerCase() +'.png " alt="'+ enemy.enemyType +'" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: '+ enemy.health +'</p><p>Mana: '+ enemy.mana +'</p><p>Strength: '+ enemy.strength +'</p><p>Mana: '+ enemy.mana +'</p><p>Agility: '+ enemy.agility +'</p><p>Speed: '+ enemy.speed +'</p></div></div>';
       getEnemy.style.visibility = "visible";
    }
}