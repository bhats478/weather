var cities;
var city;
var circleY = 0;

function setup() {

  cities = createSelect();
  cities.option('New York,NY');
  cities.option('London,GB');
  cities.option('Hong Kong,HK')
  //Change these cities and/or add your own

  cities.changed(loadCity);
  loadCity();


  createCanvas(900,600);

}

function draw() {
  if(city){ //Your drawing should go inside this if statement
    background(city.main.temp,0,0);
    fill("SkyBlue")
    textSize(10);
    text("black = cold",10,20);
    text("red = hot",10,30)

    fill("white")
    textSize(30);
    text("humidity",5,70);
    text("pressure",5,170)

    stroke("white");
    strokeWeight(10);
    line(0,90,(city.main.humidity*10),90);
    line(0,190,(city.main.pressure/2),190);

//cloud drawing + number of clouds
    ellipse(70,290,80,80);
    ellipse(130,290,110,110);
    ellipse(190,290,80,80);

    textAlign(CENTER);
    textSize(80);
    fill("Cadetblue");
    text(city.clouds.all,130,320);

//wind speed
    textSize(30);
    text("wind speed",100,450);
    text(city.wind.speed,230,450);
    strokeWeight(4);
    stroke(0,0,city.wind.speed*12);
    line(200,400,500,400);
    line(180,410,600,410);
    line(270,420,620,420);
    line(270,430,640,430);
    line(270,440,650,440);
    line(270,450,640,450);
    line(270,460,620,460);
    line(180,470,600,470);
    line(200,480,500,480);

//sunset
    stroke("orange")
    fill("yellow");
    ellipse(800,circleY,100,100);
    circleY = circleY + 1;
    if(circleY >= windowWidth){
      circleY = 0
    }

    strokeWeight(0);
    fill("pink");
    textSize(20);
    text("time until sunset",780,300);
    text(((city.sys.sunset*1000)-Date.now()),780,340);






//city.main.humidity
  }
}

//These functions below load the weather data and save it to the city variable.
//There is no need to edit these functions.
function loadCity(){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cities.value()+
   '&APPID=f02124924447c73bc1d1626b1bee5f45&units=imperial';//set units=metric if you prefer Celcius
  loadJSON(url,setCity);
}
function setCity(data){
  city = data;
}
