var finishLineOneWay : BoxCollider;

function OnTriggerExit (myTrigger : Collider) {	
	if(myTrigger.gameObject.name == "FinishLineDetection"){
		finishLineOneWay.isTrigger = true;
	}
}