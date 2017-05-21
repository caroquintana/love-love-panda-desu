var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var imgs = document.getElementById("arreglopandas");

pictures.forEach(function (e) {
	var newTarget= document.createElement("li");
	var newImage = document.createElement("img");
	newImage.setAttribute("class", "image");
	newImage.setAttribute("src", e);
	newTarget.appendChild(newImage);
	imgs.appendChild(newTarget);
});