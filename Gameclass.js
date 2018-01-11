//Codigo de Game

// Constructor de Game
function Game(){
    this.maxTime = 0;
    this.score = 0;
    this.parcels = [];
    this.mapArray = [];
    this.blocksArray = [];
    this.driverMan = new DriverMan ();
    this.parcelArray = [];
    this.listOfPolicemans = [];
    this.counterID = undefined;
    this.moverID = undefined;
    this.andando = new Audio ('./audios/andando.mp3');
    this.defondo = new Audio ('./audios/audiofondo.mp3');
}
  
//Crea el socre board con las vidas y llama a la funcion para crear la cuenta-atrás
Game.prototype.createScoreBoard = function (life) {
    life=this.driverMan.life;
    var scoreboardhtml = ''
    for(var i=1; i<=life; i++){
        scoreboardhtml+= `<div class="life"></div>`   
    }
    $('.scoreboard').html(scoreboardhtml);
    this.timmerSetup();
    this.timmerStart();
}

Game.prototype.updateScoreBoard = function (life) {
    life=this.driverMan.life;
    var scoreboardhtml = ''
    for(var i=1; i<=life; i++){
        scoreboardhtml+= `<div class="life"></div>`   
    }
    $('.scoreboard').html(scoreboardhtml);

}

Game.prototype.createBoard = function() {
    
    this.mapArray = [
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","p","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","p","b","s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","p","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","p","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","p","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2","s1","s2","s2"],
        ["s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","b"],
        ["s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b","s1","b","b","s1","b","b","s1","b","p","s1","b","b","s1","b","b"],
    ];

    var gameboardhtml ='';
    for (var y=0; y<this.mapArray.length; y++) {
        for (var x=0; x<this.mapArray[y].length; x++) {
            if (this.mapArray[x][y]==="s1"){
                gameboardhtml += `<div class="street street1" data-x="${x}" data-y="${y}"></div>`;
            } if (this.mapArray[x][y]==="s2"){
                gameboardhtml += `<div class="street street2" data-x="${x}" data-y="${y}"></div>`;
            } if (this.mapArray [x][y]==="b"){
                gameboardhtml += `<div class="block" data-x="${x}" data-y="${y}"></div>`;
            } if (this.mapArray [x][y]==="p"){
                this.parcelArray.push(this.mapArray[x][y]);
                gameboardhtml += `<div class="parceltarget" data-x="${x}" data-y="${y}"></div>`;
            }
        }
    }
    $('.gameboard').html(gameboardhtml);
  }
  

//Inserta el conductor en la posición 0,0 del mapa y le da la posición al objeto driverMan
Game.prototype.insertDriver = function() {
    var selector = '[data-x=' + 0 + '][data-y=' + 0 + ']';
    $(selector).addClass('deliveryman')
    $('.deliveryman').addClass('dmandown');
    this.driverMan.xPos = 0;
    this.driverMan.yPos = 0;
  };
  

//Asigna cada tecla a una acción y llama a la función al pulsarla
Game.prototype.setKeys = function () {
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                this.moveLeft();
                break;

            case 38: // up
                this.moveUp();
                break;

            case 39: // right
                this.moveRight();
                break;

            case 40: // down
                this.moveDown();
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    }.bind(this));
}


//Cada acción llama a la función move y le pasa los parámetros que necesita
Game.prototype.moveLeft = function () {
    this.move(-1,0,"dmanleft");
}

Game.prototype.moveRight = function() {
    this.move(1,0,"dmanright");
}

Game.prototype.moveUp = function() {
    this.move(0,-1,"dmanup");
}

Game.prototype.moveDown = function() {
    this.move(0,1,"dmandown");
}

//Mueve al driver o le choca en función del mapa
Game.prototype.move = function (nextX, nextY, dmandirection) {
    var nextPosition = '[data-x=' + (this.driverMan.xPos + nextX) + '][data-y=' + (this.driverMan.yPos + nextY) + ']';
    if ( $(nextPosition).hasClass("street") ) {
            $('.deliveryman').removeClass('dmanup');
            $('.deliveryman').removeClass('dmanright');
            $('.deliveryman').removeClass('dmandown');
            $('.deliveryman').removeClass('dmanleft');  
            $('.deliveryman').removeClass('deliveryman');
          $(nextPosition).addClass('deliveryman');
          $('.deliveryman').addClass(dmandirection);
          this.driverMan.xPos += nextX
          this.driverMan.yPos += nextY
          this.andando.play();
        } else if ($(nextPosition).hasClass("parceltarget")) {
            $('.deliveryman').removeClass('dmanup');
            $('.deliveryman').removeClass('dmanright');
            $('.deliveryman').removeClass('dmandown');
            $('.deliveryman').removeClass('dmanleft');  
            $('.deliveryman').addClass(dmandirection);
            $(nextPosition).removeClass('parceltarget');
            $(nextPosition).addClass('parceldelivered');
            this.parcelArray.splice(0,1);
            if(this.parcelArray.length === 0){
                alert('Has completado la ruta correctamente, ¡felicidades!');
                this.reStartGame();
            }
            this.createParcels();
        } else {
          this.crash();
        }
}
  
//Le quita una vida al driver y llama a repintar el score board. Si el driver se muere llama a la función reset game
Game.prototype.crash = function () {
    this.driverMan.life--;
    if(this.driverMan.life === 0) {
      alert('¡Aprende a conducir, has destrozado la furgo! Vaya repartidor malo estás hecho...');
      this.reStartGame();
    } else {
      alert('Has chocado, te quedan ' + this.driverMan.life + ' puntos de vida');
      this.updateScoreBoard();
    }
}

//recarga la página si se muere o se acaba el tiempo
Game.prototype.reStartGame = function() {
    location.reload();
}

Game.prototype.createParcels = function () {
    var parcelshtml = '';
    for(var i=0; i<this.parcelArray.length; i++) {
    parcelshtml += `<div class="parcelinboard"></div>`;
    }
    $('.parcelboard').html(parcelshtml);
    };


//Cronómetro
Game.prototype.timmerStart = function () {
    this.counterID = setInterval(function () {
      this.seconds--;
      $("#timecounter").html(this.seconds);
      if(this.seconds === 49){
          this.defondo.play();
      }
      
      if(this.seconds === 48){
        this.listOfPolicemans.push(new Policeman ('policeman1', 29, 6, -1, 0, 'policemanleft'));
        this.insertpoliceman();
        this.policemanInterval();
      } 
  
      if(this.seconds === 47) { 
        this.listOfPolicemans.push(new Policeman ('policeman2', 0, 9, 1, 0, 'policemanright'));
        this.insertpoliceman();
      }
  
      if(this.seconds === 45) {
        this.listOfPolicemans.push(new Policeman ('policeman3', 12, 29, 0, -1, 'policemanleft'));
        this.insertpoliceman();
      }
  
      if(this.seconds === 43) {
        this.listOfPolicemans.push(new Policeman ('policeman4', 21, 29, 0, -1, 'policemanleft'));
        this.insertpoliceman();
        
      }
  
      if(this.seconds === 41) {
        this.listOfPolicemans.push(new Policeman ('policeman5', 29, 24, -1, 0, 'policemanleft'));
        this.insertpoliceman();
        
      }
  
      if(this.seconds === 38) {
        this.listOfPolicemans.push(new Policeman ('policeman6', 29, 18, -1, 0, 'policemanleft'));
        this.insertpoliceman();
      }
      
      if(this.seconds === 15) {
        //crear dos policias
      }
  
      if(this.seconds === 10) {
        //crear dos policias
      }
  
      if(this.seconds === -1) {
        alert('Qué repartidor lento estás hecho...')
        this.reStartGame();
        // this.timmerSetup();
    };
  }.bind(this),1000);
  };
  
Game.prototype.timmerSetup = function () {
    clearInterval(this.counterID);
    
    this.seconds = 50;
    $("#timecounter").html(this.seconds);
  };

Game.prototype.timmerStop = function () {
    this.counterID = clearInterval(this.counterID);
    this.moverID = clearInterval(this.moverID);
}
  

//Policeman

//crea el policía con los atributos que tiene y que se le han dado al crearlos en el cronometro.
Game.prototype.insertpoliceman = function(poli) {
    var i = this.listOfPolicemans.length - 1
    var poli = this.listOfPolicemans[i];
    var selector = '[data-x=' + poli.xPos + '][data-y=' + poli.yPos + ']';
    $(selector).addClass(poli.classtype);
}

//elimina las clases de los policeman y vacía el array
Game.prototype.removePolicemans = function () {
    $('.policeman').removeClass('policemanleft');
    $('.policeman').removeClass('policemanright');
    this.listOfPolicemans = [];
     // $(currentSelector).removeClass(poli.name);
     // $(currentSelector).removeClass('policeman');
}

Game.prototype.restartParcels = function (){
    this.parcelArray= [];
    $('.parceltarget').addClass('block');
    $('.parceldelivered').addClass('block');
    $('.parceltarget').removeClass('parceltarget');
    $('.parceldelivered').removeClass('delivered');
}


Game.prototype.policemanInterval =  function () {
    this.moverID = setInterval(function() {
        for(var i = 0; i <= this.listOfPolicemans.length - 1; i++) {    
            this.movePoliceman(this.listOfPolicemans[i]);
            // this.listOfPolicemans[i].move()
        };
    }.bind(this),100);
}


Game.prototype.movePoliceman = function (poli) {
    var currentSelector = '[data-x=' + (poli.xPos) + '][data-y=' + (poli.yPos) + ']';
    var nextPosition = '[data-x=' + (poli.xPos + poli.xDirection) + '][data-y=' + (poli.yPos + poli.yDirection) + ']';
    if($(nextPosition).hasClass('deliveryman')){
        this.crash();
        poli.xDirection *= -1;
        poli.yDirection *= -1;
        if(poli.classtype === 'policemanleft') {
            $(currentSelector).removeClass('policemanleft');
            poli.classtype = 'policemanright';
        } else {
            poli.classtype = 'policemanleft';
            $(currentSelector).removeClass('policemanright');
        }
    } else {
        if(poli.xPos + poli.xDirection < 0 || poli.yPos + poli.yDirection < 0 || poli.xPos + poli.xDirection > 29 || poli.yPos + poli.yDirection > 29) {
            poli.xDirection *= -1;
            poli.yDirection *= -1;
            if(poli.classtype === 'policemanleft') {
                $(currentSelector).removeClass('policemanleft');
                poli.classtype = 'policemanright';
            } else {
                poli.classtype = 'policemanleft';
                $(currentSelector).removeClass('policemanright');
            }
        } else {
            $(currentSelector).removeClass('policemanright');
            $(currentSelector).removeClass('policemanleft');
            console.log(currentSelector);
            $(nextPosition).addClass(poli.classtype);
            console.log(nextPosition);
            poli.xPos = poli.xPos + poli.xDirection;
            poli.yPos = poli.yPos + poli.yDirection;
        }
    }
}


