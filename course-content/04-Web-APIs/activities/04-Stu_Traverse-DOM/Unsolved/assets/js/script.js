// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

//var mainDiv = document.getElementsByClassName("blah");
//var mainDiv = document.getElementsByTagName(h1);

//var webTitle = document.getElementsById("title")

// Change style by accessing style object's properties
mainDiv.children[0].children[1].style.fontSize = "50px";
mainDiv.children[1].style.color = "white";

//webTitle.style.color = "white";

//mainDiv[0].style.fontSize = "50px";
//mainDiv[0].style.color = "white";



/*
* The article title has a font size of 50px.

* The text in the headline "Welcome to World News" is white. 
*/