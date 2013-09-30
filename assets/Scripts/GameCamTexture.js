#pragma strict
var num3 : GUITexture;
var num2 : GUITexture;
var num1 : GUITexture;
var go : GUITexture;
var charger : GameObject;
var colt : GameObject;
var nitrous : GameObject;
var lambo : GameObject;
var pgt : GameObject;
var selectCamera : Camera;
var pgtAdminControl : PgtAdminControl;
public static var countDown : int;
var startCount : boolean;
public static var InGame : boolean;
var pgtFinish : PgtFinish;
var questionMarkDisplay : boolean;
var questionMark : GUITexture;
var instructionShowing : boolean;
var touchPosition : Vector2;
var currentTime : float;
var previousTime : float;
var timeDiff : float;


function Start () {
	startCount = false;
	countDown = 350;
	InGame = false;
	questionMarkDisplay = false;
	instructionShowing = false;
	currentTime = Time.time;
    previousTime = 0;
    timeDiff = 0;
}

function Update () {
//	Debug.Log(camera.cullingMask.ToString());

	if(startCount){
		currentTime = Time.time;
		timeDiff = currentTime - previousTime;
		timeDiff *= 100;
		countDown = 350 - timeDiff;	
		Debug.Log(timeDiff);
		if(countDown <= 350 && countDown > 250){
			camera.cullingMask = -134114561;
		} else if(countDown <= 250 && countDown > 150){
			camera.cullingMask = -134049025;
		} else if(countDown <= 150 && countDown > 50){
			camera.cullingMask = -133917953;
		} else if(countDown <= 50 && countDown > 0){
			camera.cullingMask = -133655809;
			pgtAdminControl.FindAvatar0();
			pgt.rigidbody.constraints.value__ = 0;
		} else {
			camera.cullingMask = -117402881;
			startCount = false;
			countDown = 350;
			currentTime = Time.time;
		    previousTime = 0;
		    timeDiff = 0;
			charger.GetComponent(iMove).enabled = true;
			colt.GetComponent(iMove).enabled = true;
			nitrous.GetComponent(iMove).enabled = true;
			lambo.GetComponent(iMove).enabled = true;
			
			charger.GetComponent(iMove).speed = Random.Range(30,39);		
			do{
				colt.GetComponent(iMove).speed = Random.Range(30,39);
			} while (colt.GetComponent(iMove).speed == charger.GetComponent(iMove).speed);
			
			nitrous.GetComponent(iMove).speed = Random.Range(40,50);
			
			do{
				lambo.GetComponent(iMove).speed = Random.Range(40,50);
			} while (lambo.GetComponent(iMove).speed == nitrous.GetComponent(iMove).speed);
		
			InGame = true;	
			
			charger.GetComponent(AudioSource).enabled = true;
			colt.GetComponent(AudioSource).enabled = true;
			lambo.GetComponent(AudioSource).enabled = true;
			nitrous.GetComponent(AudioSource).enabled = true;
			questionMarkDisplay = true;			
		}
	}	
	
	if(pgtFinish.gameFinished){
		if(pgtFinish.wins == 1){
			camera.cullingMask = -99577089;	
			questionMarkDisplay = false;
		} else if(pgtFinish.wins == 2){
			camera.cullingMask = -98528513;	
			questionMarkDisplay = false;
		} else if(pgtFinish.wins == 3){
			camera.cullingMask = -96431361;	
			questionMarkDisplay = false;	
		} else if(pgtFinish.wins > 3){
			camera.cullingMask = -100609281;	
			questionMarkDisplay = false;	
		}
	}
	
	if(questionMarkDisplay){
		if(Application.platform == RuntimePlatform.Android && Input.GetTouch(0).phase == TouchPhase.Began && Input.touchCount == 1){
				touchPosition = Input.GetTouch(0).position;
				TouchEventHandler(touchPosition.x, touchPosition.y);
			}
		else if((Application.platform == RuntimePlatform.WindowsEditor || Application.platform == RuntimePlatform.WindowsPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer) && Input.GetMouseButtonDown(0)){
				touchPosition = Input.mousePosition;
				TouchEventHandler(touchPosition.x, touchPosition.y);
		}
	}
}

function TouchEventHandler(xPos : int, yPos : int){	
	if((xPos > questionMark.pixelInset.x && xPos < questionMark.pixelInset.x + questionMark.pixelInset.width) && (yPos > questionMark.pixelInset.y && yPos < questionMark.pixelInset.y + questionMark.pixelInset.height)){
		//Show questionMark
//		Debug.Log(camera.cullingMask);
		if(!instructionShowing){
			camera.cullingMask = -50294017;
			instructionShowing = true;
		} else {
			camera.cullingMask = -117402881;
			instructionShowing = false;
		}		
	}
}

function StartGame(){
	selectCamera.enabled = false;
	camera.enabled = true;
	startCount = true;
	previousTime = Time.time;
}