var wins:int = 0;
var style:GUIStyle;
var count:int = 0;
var finishLineOneWay : BoxCollider;


function OnTriggerExit (myTrigger : Collider) {
	
	if(myTrigger.gameObject.name == "FinishLineOneWay"){
		count++;
		Debug.Log(count);
	}
	
	if(count >= 1){
		wins++;
		count = 0;
		finishLineOneWay.isTrigger = false;
	}	
}

function OnGUI(){
//	style.fontSize = 40;
//	style.normal.textColor = Color.yellow;
//	GUI.Label(Rect(30, 120, 1000, 100),"Pgt: " + wins + " out of 3",style);
//	if (wins >= 3) {
//		Application.LoadLevel("Credits");
//	}
}