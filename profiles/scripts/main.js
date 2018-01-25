var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.png') {
      myImage.setAttribute ('src','images/image3.png');
    }else if(mySrc === 'images/image3.png') {
      myImage.setAttribute ('src','images/image2.png');
    }else {
	  myImage.setAttribute ('src','images/image1.png');
	}
   
}