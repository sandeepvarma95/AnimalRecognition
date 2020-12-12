let mobilenet;
let animal;

function modelReady(){
	console.log("Model is ready");
	mobilenet.predict(animal, gotResults);
}

function imageReady(){
   image(animal,0,0,width, height);
}

function gotResults(error, results){
   if(error){
	   console.error(error);
   }
   else{
	   console.log(results);
	   let lab = results[0].label;
	   let conf = results[0].confidence;
	   fill(0);
	   textSize(60);
	   text(lab, 10, height - 30);	
	   createP(lab);
	   createP(conf);
   }
}

function setup() {
	
	createCanvas(640, 480);
	animal = createImg('images/dog.jpg',imageReady);
	animal.hide();
	background(0);
	
	mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

/*function draw() {
   background(0,255,255);
}*/