const snake = document.querySelector(".snake");
const food = document.querySelector(".fruit");
const gameContainer = document.querySelector(".game-container");
const Score = document.querySelector(".score");
// console.log(gameContainer.clientHeight);
// console.log(document.body.offsetWidth - gameContainer.offsetWidth);

let score = 0;

let player = {
  x: Math.floor(Math.random() * 300),
  y: Math.floor(Math.random() * 300),
};

let fruit = {
  x: Math.floor(Math.random() * 370),
  y: Math.floor(Math.random() * 370),
};

const move = () => {
  snake.style.left = `${player.x}px`;
  snake.style.top = `${player.y}px`;
};

const moveFruit = () => {
  food.style.left = `${fruit.x}px`;
  food.style.top = `${fruit.y}px`;
};

move();
moveFruit();

console.log(player);
console.log(fruit);

const scoreAdd = () => {
  score = score + 1;
  Score.innerHTML = `Score : ${score}`;
};

const isCollide = (a, b) => {
  if (
    a.x < b.x + 10 &&
    a.x < b.x + 10 &&
    a.x + 10 > b.x &&
    a.y < b.y + 10 &&
    a.y + 10 > b.y
  ) {
    // Collision detected!
    console.log("collide");
    scoreAdd();
    fruit.x = Math.floor(Math.random() * 300);
    fruit.y = Math.floor(Math.random() * 300);
    moveFruit();
  }
};

// const isCollide = () => {
//   if (
//     player.x > fruit.x - food.clientWidth + 20 &&
//     player.x <= fruit.x + food.clientWidth + 20 &&
//     player.y > fruit.y - food.clientHeight + 20 &&
//     player.y <= fruit.y + food.clientHeight + 20
//   ) {
//     alert("colloide");
//   }
// };

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    // console.log("right");
    snake.style.transform = "rotate(-90deg)";

    var interval_id = window.setInterval(() => {}, 99999);
    for (var i = 0; i < interval_id; i++) window.clearInterval(i);
    setInterval(() => {
      if (player.x > 740) {
        snake.style.display = "none";
        player.x = -30;
        setTimeout(() => {
          snake.style.display = "block";
        }, 100);
      }
      player.x += 10;
      move();
      isCollide(player, fruit);
      console.log(player);
    }, 80);
  } else if (e.keyCode === 37) {
    // console.log("left");
    snake.style.transform = "rotate(90deg)";

    var interval_id = window.setInterval(() => {}, 99999);
    for (var i = 0; i < interval_id; i++) window.clearInterval(i);
    setInterval(() => {
      if (player.x < -30) {
        snake.style.display = "none";
        player.x = 740;
        setTimeout(() => {
          snake.style.display = "block";
        }, 100);
      }
      player.x -= 10;
      move();
      isCollide(player, fruit);
    }, 80);
  } else if (e.keyCode === 38) {
    // console.log("top");
    snake.style.transform = "rotate(-180deg)";

    var interval_id = window.setInterval(() => {}, 99999);
    for (var i = 0; i < interval_id; i++) window.clearInterval(i);
    setInterval(() => {
      if (player.y < -30) {
        snake.style.display = "none";
        player.y = 440;
        setTimeout(() => {
          snake.style.display = "block";
        }, 100);
      }
      player.y -= 10;
      move();
      isCollide(player, fruit);
    }, 80);
  } else if (e.keyCode === 40) {
    // console.log("bottom");
    snake.style.transform = "rotate(360deg)";

    var interval_id = window.setInterval(() => {}, 99999);
    for (var i = 0; i < interval_id; i++) window.clearInterval(i);
    setInterval(() => {
      if (player.y > 440) {
        snake.style.display = "none";
        player.y = -30;
        setTimeout(() => {
          snake.style.display = "block";
        }, 100);
      }
      player.y += 10;
      move();
      isCollide(player, fruit);
    }, 80);
  }
});
