var pgtFinsh : PgtFinish;
var style:GUIStyle;
var count:int = 0;
var finishLineAI : BoxCollider;

function OnTriggerExit (myTrigger : Collider) {
	
	if(myTrigger.gameObject.name == "FinishLineAI"){
		count++;
		Debug.Log(count);
	}
	
	if(count == 1 && !pgtFinsh.gameFinished){
		pgtFinsh.wins++;
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