var wheel:GameObject;
var speed:float;
var GameCamObj : GameCamTexture;

function Start () {

    speed = 50;
    
}

function OnGUI () {

	if(GameCamObj.InGame){
    	wheel.transform.Rotate(Vector3.right * Time.deltaTime * speed * 10, Space.Self);
    }

//    if(Input.GetKey("w")){
//        wheel.transform.Rotate(Vector3.right * Time.deltaTime * speed * 10, Space.Self);
//    } else if (Input.GetKey("s")){
//        wheel.transform.Rotate(Vector3.left * Time.deltaTime * speed, Space.Self);
//    }
}