let font;  //載入字型文字
let points = [];  //轉成點狀文字
let k = 300
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/LXGWWenKaiMonoTC-Bold.ttf") 
}
//===================================================

function setup(){
  createCanvas(windowWidth, windowHeight);
  background("#FFBF69")
   points = font.textToPoints("胡妍妮", width/2-400, height/2+300, 300, {
     sampleFactor:0.1
   }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
   for (let i=0; i<points.length; i++) { 
     //text(str(i),points[i].x,points[i].y)
     noStroke()
     fill("#CBF3F0")
     ellipse(points[i].x,points[i].y,20)
 }
}

function draw(){ 
  background("#FFBF69");
   noFill()
   stroke("#ffc2d1")
   strokeWeight(3)

   var rect_width = 50
   var bc_w = 50
   var sc_w = 25
 push()
   for(let j=0;j<height;j=j+1){
     for(let i=0;i<width;i=i+1){
       ellipse(25+bc_w*i,25+50*j,0+bc_w)
       rect(0+rect_width*i,0+50*j,rect_width)
       ellipse(sc_w*(i+1),50+50*j,25)
     }
     pop()
   }
    for (let i=0; i<points.length; i++) { 
      //text(str(i),points[i].x,points[i].y)
      noStroke()
      fill("#CBF3F0")
      ellipse(points[i].x,points[i].y,20)
    }
    noFill()
    stroke(0)
    if (mouseIsPressed){
      rect(width/2-550,height/2,1200,400)
      fill(255, 255, 0);
      ellipse(200+k, 200+100, 150, 150);
    
      // 繪製黑色的眼睛
      fill(0);
      ellipse(160+k, 180+100, 20, 20);
      ellipse(240+k, 180+100, 20, 20);
    
      // 繪製紅色的嘴巴
      fill(255, 0, 0);
      arc(200+k, 230+100, 90, 60, 0, PI);
    
    }else{

    }
}