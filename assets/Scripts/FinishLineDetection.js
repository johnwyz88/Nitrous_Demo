var finishLineOneWay : BoxCollider;
var charger : GameObject;
var colt : GameObject;
var nitrous : GameObject;
var lambo : GameObject;
var light : BrightnessAdjustment;

function OnTriggerExit (myTrigger : Collider) {	
	if(myTrigger.gameObject.name == "FinishLineDetection"){
		finishLineOneWay.isTrigger = true;
	}
	
	if(myTrigger.gameObject.name == "BoostLineAI"){
		Debug.Log("AI Speed Boost"); 			
				
		charger.GetComponent(iMove).speed = Random.Range(40,49);		
		do{
			colt.GetComponent(iMove).speed = Random.Range(40,49);
		} while (colt.GetComponent(iMove).speed == charger.GetComponent(iMove).speed);
		
		nitrous.GetComponent(iMove).speed = Random.Range(50,60);
		
		do{
			lambo.GetComponent(iMove).speed = Random.Range(50,60);
		} while (lambo.GetComponent(iMove).speed == nitrous.GetComponent(iMove).speed);
		
		Debug.Log("Sun rising"); 
		BrightnessAdjustment.MoonRise = true;
	}
}