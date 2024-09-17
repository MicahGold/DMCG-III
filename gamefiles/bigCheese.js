class bigCheese {
  constructor(xPos, yPos, xVelo, yVelo) {
    if(xPos == undefined){
      this.xPos = 0;
    }else{
      this.xPos = xPos;
    }
    if(yPos == undefined){
      this.yPos = 0;
    }else{
      this.yPos = xPos;
    }
    if(xVelo == undefined){
      this.xVelo = 0;
    }else{
      this.xVelo = xVelo;
    }
    if(yVelo == undefined){
      this.yVelo = 0;
    }else{
      this.yVelo = yVelo;
    }
    this.enabled = false;
    this.splitArr = [];
    this.isAlive = true;
    this.jumpCooldown = 0.5;
    this.canJump = true;
    this.isSplit = false;
    this.width = 50;
    this.height = 50;
    this.xAccel = 0;
    this.gravity = 0.09;
    this.friction = 10;
    this.isMoving = false;
    this.gForce = 0;
    this.isJumping = true;
    this.initializeKeyListeners();
  }
  refresh() {
    if (this.enabled) {
      if (this.isJumping) {
        this.yPos = this.yPos - this.yVelo;
        this.yVelo = this.yVelo - this.gravity;
        this.canJump = false;
        //this.editJumpCooldown();

    }
    else{
      this.yVelo = 0;
    }
    if(this.xVelo != 0 ){
        this.xVelo = this.xVelo - Math.sign(this.xVelo)*this.friction*0.01;
    }
    else{

      }
      this.xPos = this.xPos + this.xVelo;

      this.xVelo = this.xVelo + this.xAccel;
    }
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getX() {
    return this.xPos;
  }
  getY() {
    return this.yPos;
  }
  getXVelo() {
    return this.xVelo;
  }
  getYVelo() {
    return this.yVelo;
  }
  setXPos(number) {
    this.xPos = number;
  }
  setYPos(number) {
    this.yPos = number;
  }
  setXVelo(number) {
    this.xVelo = number;
  }
  setYVelo(number) {
    this.yVelo = number;
  }
  setIsJumping(val) {
    this.isJumping = val;
  }
  /*move(direction) {
      if(this.isAlive == true){
        switch(direction){
          case 87:
            this.jump();
            break;
          case 65:
            this.xPos = this.xPos + this.xVelo;
            break;
          case 68:
            this.xPos = this.xPos + this.xVelo;
            break;
        }
        //Level.checkForCollision();
        //Level.checkForLand();
      }
      //Level.checkForCollision();
      //Level.checkForLand();
    }
  }

  jump() {
    this.isJumping = true;
    this.currentAirTime = performance.now() - this.startJumpTime;
    this.isMoving = true;
    this.canJump = false;
    this.yPos = this.yVelo * this.currentAirTime - (0.5 * this.gravity * this.currentAirTime * this.currentAirTime);
    this.yVelo = this.yVelo + (this.gravity * this.currentAirTime);
  }
*/
  updateYPos() {

  }
  enable(){
      this.enabled = true;
    }
    disable(){
      this.enabled = false;
    }
  initializeKeyListeners() {
    let self = this;
    window.addEventListener("keydown", function(e) { //W = 87
      if (self.enabled) {

        if (e.key == "w")/*&&self.canJump)*/ { //87
          console.log(self.canJump);
          console.log(self,'w');
          //self.startJumpTime = performance.now();
          self.setYPos(self.yPos-5);
          self.yVelo = 5; //dummy value
          this.isJumping = true;
        };
        if (e.key == "a") { //65
             console.log("a pressed");
          //  console.log('xVelo '+ self.xVelo);

          if (self.xVelo > 0) {
            self.xAccel = -0.05;
            //  console.log("bruh ");
          } else {
            self.xVelo = -5;
          }
        };
        if (e.key == "d") { //68
          console.log('d');
          if (self.xVelo < 0) {
            self.xAccel = 0.05;
            //console.log("bruh");
          } else {
            self.xVelo = 5;
          }

        };

        if (e.key == "s") { //68
          console.log("S key clicked");
          }
      }
    });
  }
  // if (document.getElementById(87).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
  //   yPos = yPos - 1;
  //   canJump = false;
  //   yVelo++;
  //   yVelo = yVelo - (yVelo * 2);
  //   let t = setInterval(addYVelo(), 16.6666666667);
  //   clearInterval(t);
  //   while (isMoving = false || checkForCollision().equals(false)) {
  //     let a = setInterval(gravitationalForce(), 16.6666666667);
  //   }
  //   clearInterval(t);
  // }

  // if (document.getElementById(65).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
  //   xVelo++;
  //   xVelo = xVelo - (xVelo * 2);
  //   let t = setInterval(addXVelo(), 16.6666666667);
  //   clearInterval(t);
  // }

  // if (document.getElementById(68).addEventListener("click", function()) && this.isAlive == true && this.isMoving == true) {
  //   xVelo++;
  //   xVelo = Math.abs(xVelo);
  //   let t = setInterval(addXVelo(), 16.6666666667);
  //   clearInterval(t);
  // }

  addYVelo() {
    yPos = yPos + yVelo;
  }

  gravitationalForce() {
    gForce = yVelo + gravity;
  }

  addXVelo() {
    xPos = xPos + xVelo;
  }

  // landOnPlatform() {
  //   yVelo = 0;
  //   while (xVelo < 0) {
  //     xVelo++;
  //   }
  //   while (xVelo > 0) {
  //     xVelo--;
  //   }
  //   isMoving = false;
  //   while (jumpCooldown > 0) {
  //     let j = setInterval(editJumpCooldown(), 16.6666666667);
  //   }
  //   clearInterval(j);
  //   canJump = true;
  // }

  editJumpCooldown() {
    if(this.jumpCooldown>0){
    this.jumpCooldown = this.jumpCooldown - 0.1;
    }
    else{
      this.canJump=true;
    }
  }
  split() {
    if (this.jumpCooldown == true) return;
    this.isSplit = true;
    //https://stackoverflow.com/questions/9419263/how-to-play-audio
    //let audio = new Audio(dreamaboutcheese); //which audio file is it supposed to be?
    //audio.play();
    const left = new leftCheese(this.xPos, this.yPos, this.xVelo, this.yVelo); //need velo inputs?
    const middle = new middleCheese(this.xPos, this.yPos, this.xVelo, this.yVelo);
    const right = new rightCheese(this.xPos, this.yPos, this.xVelo, this.yVelo);
    this.splitArr[0] = left;
    this.splitArr[1] = middle;
    this.splitArr[2] = right;
  }

  //https://stackoverflow.com/questions/26269433/check-javascript-condition-every-frame/26269529
  // window.onload = function() {
  //     checkForCollision(platforms, traps, lava) {
  //          for(int i = 0; i < platforms.length; i++){
  //            if(xPos == platforms[i].getXPos() && yPos == platforms[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //          for(int i = 0; i < traps.length; i++){
  //            if(xPos == traps[i].getXPos() && yPos == traps[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //          for(int i = 0; i < lava.length; i++){
  //            if(xPos == lava[i].getXPos() && yPos == lava[i].getYPos()){
  //              die();
  //              return;
  //            }
  //          }
  //      setInterval(checkForCollision, 16.6666666667); //(method, time in milliseconds)
  //  }
  // }
  // window.onload = function() {
  //     checkForLand(platforms, traps, lava) {
  //          for(int i = 0; i < platforms.length; i++){
  //            if(platforms[i].inLandingRange(xPos, yPos)){
  //              land();
  //              return;
  //            }
  //          }
  //      setInterval(checkForLand, 16.6666666667); //(method, time in milliseconds)
  //  }
  // }

  die() {
    isAlive = false;
    //micah figure out ur sh*t bro
  }
}
