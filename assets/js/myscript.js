/* DEFINING THE TEAS AND TEA BUTTONS */

let mango = document.getElementById("mango");
let oolong = document.getElementById("oolong");
let matcha = document.getElementById("matcha");
let strawberry = document.getElementById("strawberry");

let mangob = document.getElementById("mangob");
let oolongb = document.getElementById("oolongb");
let matchab = document.getElementById("matchab");
let strawberryb = document.getElementById("strawberryb");

/* CLICK TEA BUTTON SET TEA DISPLAY TO BLOCK*/

mangob.onclick = function() {
	mango.style.display = "block";
	oolong.style.display = "none";
	matcha.style.display = "none";
	strawberry.style.display = "none";

	mangob.style.opacity = "70%";
	oolongb.style.opacity = "100%";
	matchab.style.opacity = "100%";
	strawberryb.style.opacity = "100%";

};

oolongb.onclick = function() {
	oolong.style.display = "block";
	mango.style.display = "none";
	matcha.style.display = "none";
	strawberry.style.display = "none";

	mangob.style.opacity = "100%";
	oolongb.style.opacity = "70%";
	matchab.style.opacity = "100%";
	strawberryb.style.opacity = "100%";
};

matchab.onclick = function() {
	matcha.style.display = "block";
	oolong.style.display = "none";
	mango.style.display = "none";
	strawberry.style.display = "none";

	mangob.style.opacity = "100%";
	oolongb.style.opacity = "100%";
	matchab.style.opacity = "70%";
	strawberryb.style.opacity = "100%";
};

strawberryb.onclick = function() {
	strawberry.style.display = "block";
	matcha.style.display = "none";
	oolong.style.display = "none";
	mango.style.display = "none";
	
	mangob.style.opacity = "100%";
	oolongb.style.opacity = "100%";
	matchab.style.opacity = "100%";
	strawberryb.style.opacity = "70%";
};

/* DEFINING SWEETNESS BUTTONS*/

let zero = document.getElementById("zero");
let twentyfive = document.getElementById("twentyfive");
let seventyfive = document.getElementById("seventyfive");
let hundred = document.getElementById("hundred");

/* CLICK SWEETNESS BUTTON AND SELECT*/
zero.onclick = function() {
	zero.style.opacity = "70%";
	twentyfive.style.opacity = "100%";
	seventyfive.style.opacity = "100%";
	hundred.style.opacity = "100%";
};

twentyfive.onclick = function() {
	zero.style.opacity = "100%";
	twentyfive.style.opacity = "70%";
	seventyfive.style.opacity = "100%";
	hundred.style.opacity = "100%";
};

seventyfive.onclick = function() {
	zero.style.opacity = "100%";
	twentyfive.style.opacity = "100%";
	seventyfive.style.opacity = "70%";
	hundred.style.opacity = "100%";
};

hundred.onclick = function() {
	zero.style.opacity = "100%";
	twentyfive.style.opacity = "100%";
	seventyfive.style.opacity = "100%";
	hundred.style.opacity = "70%";
};

/* DEFINING TOPPINGS AND TOPPING BUTTONS */
let boba = document.getElementById("boba");
let coconut = document.getElementById("coconut");
let aloe = document.getElementById("aloe");
let cheesefoam = document.getElementById("cheesefoam");

let bobab = document.getElementById("bobab");
let coconutb = document.getElementById("coconutb");
let aloeb = document.getElementById("aloeb");
let cheesefoamb = document.getElementById("cheesefoamb");

/* CLICK TOPPINGS AND SELECT */
bobab.onclick = function() {
	boba.style.display ="block";
	bobab.style.opacity = "70%";
};

coconutb.onclick = function() {
	coconut.style.display ="block";
	coconutb.style.opacity = "70%";
};

aloeb.onclick = function() {
	aloe.style.display ="block";
	aloeb.style.opacity = "70%";
};

cheesefoamb.onclick = function() {
	cheesefoam.style.display ="block";
	cheesefoamb.style.opacity = "70%";
};

/* CLEAR BUTTON TO SET EVERYTHING DISPLAY TO NONE AGAIN */


let clearb = document.getElementById("clearb");

clearb.onclick = function() {
	mango.style.display= "none";
	matcha.style.display= "none";
	strawberry.style.display= "none";
	oolong.style.display= "none";
	boba.style.display= "none";
	coconut.style.display= "none";
	cheesefoam.style.display= "none";
	aloe.style.display= "none";

	mangob.style.opacity= "100%";
	matchab.style.opacity= "100%";
	strawberryb.style.opacity= "100";
	oolongb.style.opacity= "100";
	bobab.style.opacity= "100";
	coconutb.style.opacity= "100";
	cheesefoamb.style.opacity= "100";
	aloeb.style.opacity= "100%";
};
