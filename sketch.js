var fundo ,imgFundo
var gato,imgGato1,imgGato2;
var rato,imgRato1,imgRato2;


function preload() {
    //carregue as imagens aqui
    imgFundo = loadImage("garden.png");
    imgGato1 = loadAnimation("cat1.png");
    imgGato2 = loadAnimation("cat2.png","cat3.png");
    imgGato3 = loadAnimation("cat4.png");
    imgRato1 = loadAnimation("mouse1.png");
    imgRato2 = loadAnimation("mouse2.png","mouse3.png");
    imgRato3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(100,100,10,10);
    gato.addAnimation("gatoSentado", imgGato1);
    gato.scale = 0.2
    rato = createSprite(900,100,10,10);
    rato.addAnimation("ratoh", imgRato1);

}

function draw() {

    background(imgFundo);

    keyPressed();
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2){
    gato.velocityX = 0; 
    gato.addAnimation("ultimaImgGato",imgGato3);
    gato.changeAnimation("ultimaImgGato");
    gato.x = 300;
    gato.scale = 0.2
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
if(keyCode === LEFT_ARROW){
rato.addAnimation("ratoProvocando",imgRato2);
rato.changeAnimation("ratoProvocando");
rato.frameDalay = 25;

gato.velocityX = -5;
gato.addAnimation("gatoCorrendo",imgGato2);
gato.changeAnimation("gatoCorrendo");
}

}
