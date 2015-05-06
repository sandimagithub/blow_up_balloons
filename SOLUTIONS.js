// function createBalloon(color) {
//   var output = "Your balloon is " + color;
//   console.log(output);
//   return output;
// }

// createBalloon("blue")
// createBalloon("Red")

function createBalloon(color) {
  document.write("<button class='balloon' onClick='blowUpBalloon()'>Balooooon</button>");
}

createBalloon("blue")
createBalloon("Red")

// function blowUpBalloon(pixel_amount) {
//   // increase balloon size *to* a given pixel_amount
//   document.querySelector('.balloon').style['padding'] = pixel_amount + "px";
// }

// blowUpBalloon(10);
// blowUpBalloon(100);
// blowUpBalloon(50);

function blowUpBalloon(pixel_amount) {
  // increase balloon sie *by* a specific pixel amount
  var new_padding, current_padding;
  pixel_amount = pixel_amount || 10; // default to ten
  current_padding = document.querySelector('.balloon').style['padding']
  current_padding = parseInt(current_padding) || 0; // default to zero
  new_padding = current_padding + pixel_amount;
  document.querySelector('.balloon').style['padding'] = new_padding + "px";
}

function blowUpBalloon(pixel_amount){
  var new_padding, current_padding;
  pixel_amount= pixel_amount || 0;
  current_padding = document.querySelector('.button').style.padding
  current_padding = parseInt(current_padding) 

}

// blowUpBalloon(10);
// blowUpBalloon(100);
// blowUpBalloon(50);


function blowUpBalloon(pixel_amount) {
  // Increase size until it reaches a (random) max size and explodes
  var new_padding, current_padding,
      pixel_amount = pixel_amount || 10, // default to ten
      target_button = document.querySelector('.balloon');
  current_padding = target_button.style['padding']
  current_padding = parseInt(current_padding) || 0;
  if (current_padding >= 25 + Math.random()*25) {
    target_button.innerText = "BOOM!"
    target_button.style['font-size'] = "2em";
    target_button.style['background-color'] = "white";
    target_button.style['color'] = "black";
    target_button.style['border-style'] = "dashed";
    return false;
  }
  new_padding = current_padding + pixel_amount;
  target_button.style['padding'] = new_padding + "px";
}

// blowUpBalloon(10)
// blowUpBalloon()
// blowUpBalloon()





////////////////////////////////////////////////////////// 
// ADVANCED SOLUTION (for multiple balloons)            //
// Note that there is a waaai BETTER way of doing this! //
//////////////////////////////////////////////////////////

// function createBalloon(color) {
//   // use the color as a class name so we can identify it later on
//   // pass the color/class-name to the onClick function as well
//   // the quotes are SUPER STUPID TRICKY here!!!
//   var q = '"'; // an individual, double quote mark
//   document.write( "<button class='balloon " +
//                     color +
//                   "' onClick='blowUpBalloon(10," +
//                     q + color + q +
//                   ")' style='border-radius:50%;color:white;background:" +
//                       color +
//                   ";'>Balooooon</button>"
//                 );
// }

// function blowUpBalloon(pixel_amount, color) {
//   // The color gets passed into the function now
//   var new_padding, current_padding,
//       // And we use the color/class-name in our selector as well
//       target_button = document.querySelector(".balloon." + color);
//   current_padding = target_button.style['padding']
//   current_padding = parseInt(current_padding) || 0;
//   if ( current_padding >= 25 + Math.random()*25 ) {
//     target_button.innerText = "BOOM!";
//     target_button.style['font-size'] = "2em";
//     target_button.style['background-color'] = "white";
//     target_button.style['color'] = "black";
//     target_button.style['border-style'] = "dashed";
//     return false;
//   }
//   new_padding = current_padding + pixel_amount;
//   target_button.style['padding'] = new_padding + "px";
// }

// createBalloon("blue")
// createBalloon("red")
// createBalloon("green")
// createBalloon("yellow")