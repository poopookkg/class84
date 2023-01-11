canvas = document.getElementById("canbutt");
ctx = canvas.getContext("2d");

rover_weight = 100;
rover_height = 100;

background_image = "mar.jpg";
rover_image = "rover.png";

rover_x = 100;
rover_y = 100;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}