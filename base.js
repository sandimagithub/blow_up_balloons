document.addEventListener("DOMContentLoaded", function(){

  // all your javascript goes in here.

  var sanity_check = "If you can see this in your console, javascript is working!";
console.log(sanity_check);

/* 
  GOAL: We're going to create a balloon picker together. Each balloon will be added to the page.
*/

//////////////////////////////////////////////////////////////////////
//  1. Create a function which logs: "Your balloon is COLOR" //  
//////////////////////////////////////////////////////////////////////

// CODE HERE //
// function createBalloon() {...}

///////////////////////////////////////////////////////////////////////////
// 2. Modify your function so that it takes an argument called "color" ////
///////////////////////////////////////////////////////////////////////////

// CODE HERE //
// function createBalloon(color) {...}

function createBalloon(color) {
  document.write("<button class='balloon' onClick='blowUpBalloon()'>Balooooon</button>");
}

createBalloon("blue");
createBalloon("Red");

// TEST YOUR SOLUTION (uncomment below) //
// console.log("A.", createBalloon("blue") === "Your balloon is blue")
// console.log("B.", createBalloon("red") === "Your balloon is red")

/////////////////////////////////////////////////////////////////////////
// 3. Modify your function to use document.write("Your fav color...") ///
// 3.1 How would you make this into a button?                         ///
// 3.2 How would you change the color of the button to always be blue?///
// 3.3 How would you change the color of the button to be ANY color?  ///
/////////////////////////////////////////////////////////////////////////

// CODE HERE //
// Test it in your console!
// createBalloon("blue");// --> should see blue text!
// createBalloon("red");// --> should see red text!
// createBalloon("green");// --> should see green text!

////////////////////////////////
// 4. Select your ballooon! ///
////////////////////////////////

// It's possible to both *select* and *change* elements on the page.
// To select an element we use:
// document.querySelector(CSS_SELECTOR); // returns only one element (the first match)!
// document.querySelectorAll(CSS_SELECTOR); // returns every matching element!

// DEMO: let's select elements on buzzfeed.com:
  // h1
  // header
  // section
  // the "News" tab
  // the splash image
  // the "win" badge

//In your console:
//  - How would we select the element you created in problem 3?
//  - How would we change its color to be orange?
//    - Hint: document.querySelector(SOMESELECTOR).style.SOMECSSPROPERTY = SOMEVALUE; 
//  - How would we change its color to be ANY color?


///////////////////////////////////////////////
//  5. Blow up your balloon! blowUpBalloon() //
///////////////////////////////////////////////

// CODE HERE //
// function blowUpBalloon(pixel_amount) {...}

// Test it:
// blowUpBalloon(10);// padding around button should now be 10px;
// blowUpBalloon(100);// padding around button should now be 100px;
// blowUpBalloon(50);// padding around button should now be 20px;


//////////////////////////////////////////////////////////////////////////////////////
//  6. Modify your function: each click should *increase* the balloon size by 10px! //
//////////////////////////////////////////////////////////////////////////////////////

// CODE HERE //


//////////////////////////////////////////////////////////////////////////////////////
//  7. Explode the ballooon! When the size exceeds 50px... Kabooom! //
//////////////////////////////////////////////////////////////////////////////////////

// CODE HERE //


})
