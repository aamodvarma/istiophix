(() => {
  var scene = document.getElementById("scene");
  var room = document.getElementById("room");

  var paused = true;

  var accel = 0.5;
  var maxSpeed = 10;

  var speedX = 0;
  var speedZ = 0;
  var speedY = 0;

  var cameraPositionX = 0;
  var cameraPositionZ = 300;
  var cameraPositionY = 0;


  var cameraRotationX = 0;
  var cameraRotationY = 0;

  var upKeyPressed = false;
  var downKeyPressed = false;
  var leftKeyPressed = false;
  var rightKeyPressed = false;
  var upupKeyPressed = false;
  var downdownKeyPressed = false;

  const update = () => {
    if (!paused) {
      requestIdleCallback(update);
    }

    if (upKeyPressed) {
      if (speedZ < maxSpeed) {
        speedZ += accel;
      }
    } else if (downKeyPressed) {
      if (speedZ > -maxSpeed) {
        speedZ -= accel;
      }
    } else {
      if (speedZ > accel) {
        speedZ -= accel;
      } else if (speedZ < -accel) {
        speedZ += accel;
      } else {
        speedZ = 0;
      }
    }

    if (leftKeyPressed) {
      if (speedX < maxSpeed) {
        speedX += accel;
      }
    } else if (rightKeyPressed) {
      if (speedX > -maxSpeed) {
        speedX -= accel;
      }
    } else {
      if (speedX > accel) {
        speedX -= accel;
      } else if (speedX < -accel) {
        speedX += accel;
      } else {
        speedX = 0;
      }
    }

    if (upupKeyPressed) {
      if (speedY < maxSpeed) {
        speedY += accel;
      }
    } else if (downdownKeyPressed) {
      if (speedY > -maxSpeed) {
        speedY -= accel;
      }
    } else {
      if (speedY > accel) {
        speedY -= accel;
      } else if (speedY < -accel) {
        speedY += accel;
      } else {
        speedY = 0;
      }
    }

    cameraRotationX = Math.max(cameraRotationX, -Math.PI / 2);
    cameraRotationX = Math.min(cameraRotationX, Math.PI / 2);

    cameraPositionX -= Math.cos(cameraRotationY) * speedX;
    cameraPositionZ -= Math.sin(cameraRotationY) * speedX;

    cameraPositionX += Math.sin(cameraRotationY) * speedZ;
    cameraPositionZ -= Math.cos(cameraRotationY) * speedZ;

    cameraPositionY -=  speedY;

    if (cameraPositionY > 150) {
        cameraPositionY = 150
      } else if (cameraPositionY < -250){
        cameraPositionY = -250
      }
    if (cameraPositionX > 550) {
        cameraPositionX = 550
      } else if (cameraPositionX < -550){
        cameraPositionX = -550
      }
    if (cameraPositionZ > 550) {
        cameraPositionZ = 550
      } else if (cameraPositionZ < -550){
        cameraPositionZ = -550
      }


    scene.style.transform =
      "translateZ(701px)" +
      "rotateX(" +
      cameraRotationX.toFixed(6) +
      "rad)" +
      "rotateY(" +
      cameraRotationY.toFixed(6) +
      "rad)";

    room.style.transform =
      "translate3d(" + -cameraPositionX + "px," + -cameraPositionY + "px," + -cameraPositionZ + "px)";

  };

 

  

  

  document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement) {
      start();
    } else {
      stop();
    }
  });

  update();
})();
