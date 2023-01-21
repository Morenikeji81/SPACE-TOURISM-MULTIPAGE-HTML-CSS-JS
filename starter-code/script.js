'use strict';


function toggleClock() {
    // get the clock
    var myClockHome =document.getElementById('home');
    var myClock = document.getElementById('destination');
    // var myClockCrew = document.getElementById('crew') ;


    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;


    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButton');
    // var clockButtonCrew = document.getElementById('clockButtonCrew');


    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = '#home';
      
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
    //   myClockHome.style.display = 'none';
      // change button text
      clockButton.innerHTML = '#home';

    }
  }

  function togglecClock() {
    // get the clock
    var myClockHome =document.getElementById('home');
    var myClock = document.getElementById('crew');
    // var myClockCrew = document.getElementById('crew') ;


    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;
    

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButtonCrew');
    // var clockButtonCrew = document.getElementById('clockButtonCrew');


    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = '#home';
     
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
    //   myClockHome.style.display = 'none';
      
      // change button text
      clockButton.innerHTML = '#home';
    

    }
  }

  function toggletClock() {
    // get the clock
    var myClockHome =document.getElementById('home');
    var myClock = document.getElementById('technology');
    // var myClockCrew = document.getElementById('crew') ;


    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;
    

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButtonTechnology');
    // var clockButtonCrew = document.getElementById('clockButtonCrew');


    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = '#technology';
      
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
      myClockHome.style.display = 'none';
      
      // change button text
      clockButton.innerHTML = '#technology';
      

    }
  }











/*
const btnMoonHide = document.querySelector('.Moon');
const mars = document.querySelector('.Mars');
const btnDestinationHidden = document.querySelector('.Destination');
const btnMoonCom =document.querySelector('.combination-moon');



// const moonCom = 

for (let i = 0; i < btnDestinationHidden.length; i++)
btnDestinationHidden[i].addEventListener('click', function () {
    Mars.classList.remove('hidden');
} );




// Mars-hidden.classList.add('hidden');
*/

