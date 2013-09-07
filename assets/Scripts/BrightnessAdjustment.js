#pragma strict
public static var MoonRise;

function Start () {
	MoonRise = false;
	if(Application.platform == RuntimePlatform.Android){
		light.intensity = 1;
	} else if(Application.platform == RuntimePlatform.WindowsEditor){
		light.intensity = 0.8;
	}
}

function Update () {
	if(MoonRise){
		if(Application.platform == RuntimePlatform.Android && light.intensity > 0.4){
		light.intensity -= Time.deltaTime / 30;
		} else if(Application.platform == RuntimePlatform.WindowsEditor && light.intensity > 0.2){
			light.intensity -= Time.deltaTime / 30;
		}
	}	
}
		
