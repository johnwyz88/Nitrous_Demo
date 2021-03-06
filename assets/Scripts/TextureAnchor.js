#pragma strict
var yOffSet : int;
var xOffSet : int;
var xPercent : float;
var yPercent : float;
function Update () {
	yOffSet = 10;
	xOffSet = 10;
	xPercent = 0.5;
	yPercent = 0.5;
	if(guiTexture.texture.name == "RightChevron"){
		guiTexture.pixelInset.x = Screen.width - guiTexture.pixelInset.width - xOffSet;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "LeftChevron"){
		guiTexture.pixelInset.x = xOffSet;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "Lock"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "openLock"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = Screen.height - guiTexture.pixelInset.height - yOffSet;
	} else if(guiTexture.texture.name == "select"){
		guiTexture.pixelInset.x = Screen.width - guiTexture.pixelInset.width - xOffSet;
		guiTexture.pixelInset.y = yOffSet;
	} else if(guiTexture.texture.name == "comingSoon"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "instruction"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "go"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "num3"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "num2"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "num1"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "medal1C"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "medal2C"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "medal3C"){
		guiTexture.pixelInset.x = (Screen.width - guiTexture.pixelInset.width) * xPercent;
		guiTexture.pixelInset.y = (Screen.height - guiTexture.pixelInset.height) * yPercent;
	} else if(guiTexture.texture.name == "question-mark"){
		guiTexture.pixelInset.x = Screen.width - guiTexture.pixelInset.width - xOffSet;
		guiTexture.pixelInset.y = Screen.height - guiTexture.pixelInset.height - yOffSet;
	} else if(guiTexture.texture.name == "replay"){
		guiTexture.pixelInset.x = Screen.width - guiTexture.pixelInset.width - xOffSet;
		guiTexture.pixelInset.y = yOffSet;
	} 
}