var wins:int = 0;
var style:GUIStyle;
var count:int = 0;
var finishLineOneWay : BoxCollider;
public static var gameFinished : boolean;
var pgtAdminControl : PgtAdminControl;
var replay : GUITexture;
var touchPosition : Vector2;

function Start(){
	gameFinished = false;
}

function OnTriggerExit (myTrigger : Collider) {
	
	if(myTrigger.gameObject.name == "FinishLineOneWay"){
		count++;
		Debug.Log(count);
	}
	
	if(count >= 1){
		wins++;
		count = 0;
		finishLineOneWay.isTrigger = false;
		gameFinished = true;
		pgtAdminControl.brake = 200;
	}	
}

function OnGUI(){
	if(gameFinished){
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
	//Replay texture is touched/clicked
	if((xPos > replay.pixelInset.x && xPos < replay.pixelInset.x + replay.pixelInset.width) && (yPos > replay.pixelInset.y && yPos < replay.pixelInset.y + replay.pixelInset.height)){
		Application.LoadLevel(0);	
	}
}