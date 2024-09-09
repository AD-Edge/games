// --------  Drawing -------- //
function draw_example(){var e={grid:[[1,1,1],[0,1,1],[1,0,1]],tanks:[{y:.2,x:.2,direction:1,color:"#008cff"},{y:.2,x:2.2,direction:3,color:"#ff0004"},{y:2.2,x:2.2,direction:0,color:"#fff"}],castles:[{y:1,x:1,color:"#FFFD00"},{y:2,x:0,color:"#008cff"}],bullets:[],dude_size:.6,bullet_size:.05},t={width:100,height:100},n={width:e.grid[0].length,height:e.grid.length},r=get_cell_side(t,n),i=document.getElementById("showCanvas");set_canvas(i,t,n,r),context={level:e,grid_size:n,canvas:i,cell_side:r,dude_size:e.dude_size,bullet_size:e.bullet_size,pixel_size:r*e.dude_size/16,castle_pixel_size:r/16},cell_colors=["#1D7F7F","#68AD14"],draw(),context={}}function draw_grid(){var e=context.canvas.getContext("2d");e.clearRect(0,0,context.canvas.width,context.canvas.height),e.fillStyle="#68AD14",e.fillRect(0,0,context.grid_size.width*context.cell_side,context.grid_size.height*context.cell_side);for(var t=0;t<context.grid_size.height;t++)for(var n=0;n<context.grid_size.width;n++)context.level.grid[t][n]===0&&(e.fillStyle="#666",e.fillRect(n*context.cell_side,t*context.cell_side,context.cell_side,context.cell_side),e.fillStyle="#999",e.fillRect(n*context.cell_side,t*context.cell_side,context.cell_side,context.castle_pixel_size),e.fillRect((n+1)*context.cell_side-context.castle_pixel_size,t*context.cell_side,context.castle_pixel_size,context.cell_side),e.fillStyle="#333",e.fillRect(n*context.cell_side,(t+1)*context.cell_side-context.castle_pixel_size,context.cell_side,context.castle_pixel_size),e.fillRect(n*context.cell_side,t*context.cell_side,context.castle_pixel_size,context.cell_side))}function draw_tank_rect(e,t,n,r,i,s,o,u,a){var f;a===1?(f=o,o=u,u=f,f=i,i=16-s-o,s=f):a===2?(f=o,o=u,u=f,f=i,i=s,s=f):a===3&&(s=16-s-u),e.fillRect(t+i*r,n+s*r,o*r,u*r)}function draw_tank(e){var t=context.canvas.getContext("2d"),n=e.x*context.cell_side,r=e.y*context.cell_side;t.fillStyle=e.color,draw_tank_rect(t,n,r,context.pixel_size,4,2,8,12,e.direction),draw_tank_rect(t,n,r,context.pixel_size,7,1,2,2,e.direction),t.fillStyle="#000",draw_tank_rect(t,n,r,context.pixel_size,1,1,3,15,e.direction),draw_tank_rect(t,n,r,context.pixel_size,12,1,3,15,e.direction),draw_tank_rect(t,n,r,context.pixel_size,0,2,2,13,e.direction),draw_tank_rect(t,n,r,context.pixel_size,14,2,2,13,e.direction);for(var i=0;i<8;i++)for(var s=0;s<16;s++)inner_tank[s][i]==1&&draw_tank_rect(t,n,r,context.pixel_size,i+4,s,1,1,e.direction);t.fillStyle="#545454";for(var i=2;i<15;i+=2){var o=i==8||i==10?1:0;draw_tank_rect(t,n,r,context.pixel_size,1,i,3-o,1,e.direction),draw_tank_rect(t,n,r,context.pixel_size,12+o,i,3-o,1,e.direction)}}function draw_bullet(e){var t=context.canvas.getContext("2d");t.fillStyle=e.color,t.fillRect(e.x*context.cell_side,e.y*context.cell_side,context.bullet_size*context.cell_side,context.bullet_size*context.cell_side)}function draw_castle(e){var t=context.canvas.getContext("2d"),n=e.x*context.cell_side,r=e.y*context.cell_side;t.fillStyle=e.color,draw_tank_rect(t,n,r,context.castle_pixel_size,1,1,14,14,0),t.fillStyle="#68AD14",draw_tank_rect(t,n,r,context.castle_pixel_size,3,3,4,4,0),draw_tank_rect(t,n,r,context.castle_pixel_size,9,3,4,4,0),draw_tank_rect(t,n,r,context.castle_pixel_size,3,9,4,4,0),draw_tank_rect(t,n,r,context.castle_pixel_size,9,9,4,4,0),t.fillStyle=e.color,draw_tank_rect(t,n,r,context.castle_pixel_size,5,5,6,6,0)}function draw(){document.getElementById("time_remaining").innerHTML=context.level.remaining_time|0,draw_grid();for(var e=0;e<context.level.castles.length;e++)draw_castle(context.level.castles[e]);for(var e=0;e<context.level.tanks.length;e++)draw_tank(context.level.tanks[e]);for(var e=0;e<context.level.bullets.length;e++)draw_bullet(context.level.bullets[e])}var inner_tank=[[0,0,0,1,1,0,0,0],[0,0,1,0,0,1,0,0],[1,1,1,0,0,1,1,1],[1,0,1,0,0,1,0,1],[1,0,1,0,0,1,0,1],[1,0,1,1,1,1,0,1],[1,1,0,0,0,0,1,1],[1,0,0,1,1,0,0,1],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[1,0,0,1,1,0,0,1],[1,1,0,0,0,0,1,1],[1,0,1,1,1,1,0,1],[0,0,0,0,0,0,0,0]];