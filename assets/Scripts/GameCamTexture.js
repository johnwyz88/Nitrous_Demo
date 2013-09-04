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


function Start () {
	countDown = 350;
}

function Update () {
	if(startCount){
		countDown -= Time.deltaTime;	
		if(countDown <= 350 && countDown > 250){
			camera.cullingMask = -8285441;
		} else if(countDown <= 250 && countDown > 150){
			camera.cullingMask = -8219905;
		} else if(countDown <= 150 && countDown > 50){
			camera.cullingMask = -8088833;
		} else if(countDown <= 50 && countDown > 0){
			camera.cullingMask = -7826689;
			pgtAdminControl.FindAvatar0();
			pgt.rigidbody.constraints.value__ = 0;
		} else {
			camera.cullingMask = -8350977;
			startCount = false;
			countDown = 350;
			charger.GetComponent(iMove).enabled = true;
			colt.GetComponent(iMove).enabled = true;
			nitrous.GetComponent(iMove).enabled = true;
			lambo.GetComponent(iMove).enabled = true;
		}
	}	
}

function StartGame(){
	Debug.Log("Start Game!");
	selectCamera.enabled = false;
	camera.enabled = true;
	startCount = true;
}