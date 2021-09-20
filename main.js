var mouse_event="empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
   color=document.getElementById("color").value;
   width_of_line=document.getElementById("width_of_line").value; 
   mouse_event="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
  function my_mouseup(e)
  {
      mouse_event="mouseUp";
  }


  canvas.addEventListener("mouseleave",my_mouseleave);
  function my_mouseleave(e)
  {
      mouse_event="mouseLeave";
  }

  canvas.addEventListener("mousemove",my_mousemove);
  function my_mousemove(e)
  {
       current_position_of_mousex=e.clientX-canvas.offsetLeft;
       current_position_of_mousey=e.clientY-canvas.offsetTop;
      if(mouse_event=="mouseDown"){
          ctx.beginPath();
          ctx.strokeStyle=color;
          ctx.lineWidth=width_of_line;
          console.log("current position of x and y cordinates=");
          console.log("x="+current_position_of_mousex+"y="+current_position_of_mousey);
          ctx.moveTo(current_position_of_mousex,current_position_of_mousey);
          console.log("current position of x and y cordinates=");
          console.log("x="+ current_position_of_mousex+"y="+current_position_of_mousey);
          ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
          ctx.stroke();
      }
      last_position_of_x=current_position_of_mousex;
      last_position_of_y=current_position_of_mousey;
  }

  canvas.addEventListener("touchmove", my_touchmove);
  function my_touchmove(e)
  {
   current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

  
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;

      console.log("Last position of x and y coordinates = ");
      console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
      ctx.moveTo(last_position_of_x, last_position_of_y);

      console.log("Current position of x and y coordinates = ");
      console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
      ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
      ctx.stroke();
      

      last_position_of_x = current_position_of_touch_x; 
      last_position_of_y = current_position_of_touch_y;
  }

  function clear()
  {
      ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
  }