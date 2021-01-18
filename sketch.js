var cat, mouse,garden;
var catImg,mouseImg,gardenImg;
function preload() {
    //load the images here
mouseImg = loadImage("jerryOne.png","jerryTwo.png","jerrryThree.png","jerryFour.png");
catImg = loadImage("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
gardenImg = loadImage("garden.png");









}

function setup(){
    createCanvas(1000,800);
    
    ground = createSprite(1,1,1000,800);
    ground.addImage(gardenImg);

    mouse = createSprite(100,100,20,20);
    mouse.addImage(mouseImg);

    cat =createSprite(900,900,20,20);
    cat.addImage(catImg);


}

function draw() {

    background(255);
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

 
 if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimatiom("catRunning",catImg2);
    cat.changeAnimation("catRunning");
 }

}
