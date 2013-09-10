#pragma strict
var timer : float;
var secondCamera : Camera;
var gameCamera : Camera;
var touchPosition : Vector2;
var select : GUITexture;
var switched : boolean;
var questionMark : GUITexture;
var instructionShowing : boolean;

function Start () {
	timer = 14;
	secondCamera.enabled = false;
	gameCamera.enabled = false;
	switched = false;
	instructionShowing = false;
}

function Update () {
	if(!switched){
		timer -= Time.deltaTime;
	    if (timer < 0){
	    	camera.enabled = false;
	    	secondCamera.enabled = true;
	    	switched = true;
	    }
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
	//Select texture is touched/clicked
	if((xPos > select.pixelInset.x && xPos < select.pixelInset.x + select.pixelInset.width) && (yPos > select.pixelInset.y && yPos < select.pixelInset.y + select.pixelInset.height)){
		//Skip splash screen
		timer = -1;
	}
	if((xPos > questionMark.pixelInset.x && xPos < questionMark.pixelInset.x + questionMark.pixelInset.width) && (yPos > questionMark.pixelInset.y && yPos < questionMark.pixelInset.y + questionMark.pixelInset.height)){
		//Show questionMark
		Debug.Log(camera.cullingMask);
		if(!instructionShowing){
			camera.cullingMask = -50286337;
			instructionShowing = true;
		} else {
			camera.cullingMask = -117395201;
			instructionShowing = false;
		}		
	}
}