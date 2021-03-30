var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
bmw=30;
bmh=30;
var player_object=" ";
var bmo=" ";
function update_image() {
    fabric.Image.fromURL("player.png", function (Img){       
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set ({
            top: player_y,
            left: player_x
        });
          canvas.add(player_object); 
    });
}       
function new_image (get_image) {
    fabric.Image.fromURL(get_image, function (Img){       
        bmo=Img;
        bmo.scaleToWidth(bmw);
        bmo.scaleToHeight(bmh);
        bmo.set ({
            top: player_y,
            left: player_x
        });
          canvas.add(bmo); 
    });
}       
 window.addEventListener("keydown", my_keydown);
 function my_keydown (e) {
     keyPressed= e.keyCode;
     console.log(keyPressed);
     if (e.shiftKey == true && keyPressed=="88"){
console.log("shift and p pressed together");
bmw=bmw + 10;
bmh=bmh+10;
document.getElementById("current_width").innerHTML = bmw;
document.getElementById("current_height").innerHTML = bmh;

     }
     if (e.shiftKey == true && keyPressed=="77"){
        console.log("shift and m pressed together");
        bmw=bmw - 10;
        bmh=bmh-10;
        document.getElementById("current_width").innerHTML = bmw;
        document.getElementById("current_height").innerHTML = bmh;
        
 }
 if (keyPressed== '38')
 {
     up();
    console.log("up");
 }
 if (keyPressed== '40')
 {
     down();
    console.log("down");
 }
 if (keyPressed== '37')
 {
     left();
    console.log("left");
 }
 if (keyPressed== '39')
 {
     right();
    console.log("right");
 }
 if (keyPressed== '87')
 {
     new_image("wall.jpg");
    console.log("w");
 }
 if (keyPressed== '71')
 {
     new_image("ground.png");
    console.log("g");
 }
 if (keyPressed== '76')
 {
     new_image("light_green.png");
    console.log("l");
 }
 if (keyPressed== '84')
 {
     new_image("trunk.jpg");
    console.log("t");
 }
 if (keyPressed== '82')
 {
     new_image("roof.jpg");
    console.log("r");
 }
 if (keyPressed== '89')
 {
     new_image("yellow_wall.png");
    console.log("y");
 }
 if (keyPressed== '68')
 {
     new_image("dark_green.png");
    console.log("d");
 }
 if (keyPressed== '85')
 {
     new_image("unique.png");
    console.log("u");
 }
 if (keyPressed== '67')
 {
     new_image("cloud.jpg");
    console.log("c");
 }
}
function up() 
{ if(player_y >=0) 
    { player_y = player_y - bmh; 
    console.log("block image height = " + bmh);
     console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
      canvas.remove(player_object); 
      update_image(); 
} 
}
function down() 
{ if(player_y <=500) 
    { player_y = player_y + bmh; 
    console.log("block image height = " + bmh);
     console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
      canvas.remove(player_object); 
      update_image(); 
} 
}
function left() 
{ if(player_x >0) 
    { player_x = player_x - bmw; 
    console.log("block image width = " + bmw);
     console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
      canvas.remove(player_object);
      update_image(); 
} 
}
function right() 
{ if(player_x <=850) 
    { player_x = player_x + bmw; 
    console.log("block image width = " + bmw);
     console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
      canvas.remove(player_object); 
      update_image(); 
} 
}