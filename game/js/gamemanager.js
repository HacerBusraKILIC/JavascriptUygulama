let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function (classType) {
        switch (classType) {
            case "Gusion":
                player = new Player(classType, 2578, 469, 2578, 119, 50)
                break;

            case "Kagura":
                player = new Player(classType, 2556, 519, 2556, 118, 200)
                break;

            case "Miya":
                player = new Player(classType, 2524, 445, 2524, 129, 50)
                break;

            case "Nana":
                player = new Player(classType, 2501, 510, 2501, 115, 100)
                break;

            case "Zilong":
                player = new Player(classType, 2689, 405, 2689, 123, 250)
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img_hero/' + classType.toLowerCase() +
            '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' +
            player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: '
            + player.speed + '</p></div>';
    },

    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },

    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //create enemy!
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;

            case 1:
                enemy = enemy01;
                break;
        }

        getHeader.innerHTML = '<p>Task: Choose tour move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img_enemy/' + enemy.enemyType.toLowerCase() +
            '.png" alt="' +enemy.enemyType+ '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' 
            + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' 
            + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}