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

function Start () {
	countDown = 350;
	InGame = false;
}

function Update () {
//	Debug.Log(camera.cullingMask.ToString());

	if(startCount){
		countDown -= Time.deltaTime;	
		if(countDown <= 350 && countDown > 250){
			camera.cullingMask = -16674049;
		} else if(countDown <= 250 && countDown > 150){
			camera.cullingMask = -16608513;
		} else if(countDown <= 150 && countDown > 50){
			camera.cullingMask = -16477441;
		} else if(countDown <= 50 && countDown > 0){
			camera.cullingMask = -16215297;
			pgtAdminControl.FindAvatar0();
			pgt.rigidbody.constraints.value__ = 0;
		} else {
			camera.cullingMask = -16739585;
			startCount = false;
			countDown = 350;
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
		}
	}	
	
	if(pgtFinish.gameFinished){
		if(pgtFinish.wins == 1){
			camera.cullingMask = -7302401;	
		} else if(pgtFinish.wins == 2){
			camera.cullingMask = -6253825;	
		} else if(pgtFinish.wins == 3){
			camera.cullingMask = -4156673;		
		} else if(pgtFinish.wins > 3){
			camera.cullingMask = -16723201;		
		}
	}
}

function StartGame(){
	Debug.Log("Start Game!");
	selectCamera.enabled = false;
	camera.enabled = true;
	startCount = true;
}