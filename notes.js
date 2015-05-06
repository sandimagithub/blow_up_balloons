var h1Element = document.createElement("h1");
h1Element.textContent = "whater content";
document.body.appendChild(h1Element);
h1Element.style.color = "red";
h1Element.addEventListener("click", function(event) {
  console.log("here is yo ", event);
  alert("click");
})

var button = document.querySelector("button");
console.log(button.style.padding);

var currentPadding = parseInt(button.style.padding) || 0 || "hello world";


if (curentPadding === "") {
  currentPadding = 0;
}

Today was about: 

Event Listeners:
- DOM Content Loaded 
- clicks
- submit
- scroll
- keypress
- doubleclick 
- mouseenter
- mouseexit
- resize

Callbacks:

code that gets run later

GET vs SET