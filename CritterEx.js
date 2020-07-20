function decHealth(display, healthBar) {
     //console.log('entered decTimer');
      if (healthBar.value > 66.67){
          var duration = 218.18;
      }else if (healthBar.value > 33.33 && healthBar.value < 66.67){
          var duration = 1090.91;
      }else{
          var duration = 2618.18;
      }
      var timer = duration;
      setInterval(function () { 
         // console.log('interval!');      
          if (--timer < 0) {
              --healthBar.value;
              timer = duration;
          }
      // Store
      localStorage.setItem("myHealth", healthBar.value);
      }, 1000);
  }
function decEnergy(display, energyBar) {
     //console.log('entered decTimer');
      if (energyBar.value > 66.67){
          var duration = 218.18;
      }else if (energyBar.value > 33.33 && energyBar.value < 66.67){
          var duration = 1090.91;
      }else{
          var duration = 2618.18;
      }
      var timer = duration;
      setInterval(function () { 
         // console.log('interval!');      
          if (--timer < 0) {
              --energyBar.value;
              timer = duration;
          }
      // Store
      localStorage.setItem("myEnergy", energyBar.value);
      }, 1000);
  }

function decHappiness(display, happinessBar) {
     //console.log('entered decTimer');
      if (happinessBar.value > 66.67){
          var duration = 218.18;
      }else if (happinessBar.value > 33.33 && happinessBar.value < 66.67){
          var duration = 1090.91;
      }else{
          var duration = 2618.18;
      }
      var timer = duration;
      setInterval(function () { 
         // console.log('interval!');      
          if (--timer < 0) {
              --happinessBar.value;
              timer = duration;
          }
      // Store
      localStorage.setItem("myHappiness", happinessBar.value);
      }, 1000);
  }


function feed(healthBar, happinessBar){
                if (healthBar.value == 100){
			happinessBar.value -= 15;
		}else{
                    healthBar.value += 10
		}
        var img = document.createElement('eating');
        img.src = "sleep.gif";
        document.body.appendChild(img);
        localStorage.setItem("myHealth", healthBar.value);
        localStorage.setItem("myHappiness", happinessBar.value);

	}
function play(happinessBar, energyBar, healthBar){
	happinessBar.value += 10;
	energyBar.value -= 5;
        healthBar.value -= 5
        localStorage.setItem("myEnergy", energyBar.value);
        localStorage.setItem("myHealth", healthBar.value);
        localStorage.setItem("myHappiness", happinessBar.value);        

}
function sleep(energyBar, healthBar){
	energyBar.value += 100;
	healthBar.value -= healthBar.value/2;
        localStorage.setItem("myEnergy", energyBar.value);
        localStorage.setItem("myHealth", healthBar.value);
}
  window.onload = function () {
      display = document.querySelector('#time');
      var healthBar = document.getElementById("stomach");
      var energyBar = document.getElementById("energy");
      var happinessBar = document.getElementById("happiness"); 
      healthBar.value = localStorage.getItem("myHealth");
      energyBar.value = localStorage.getItem("myEnergy");
      happinessBar.value = localStorage.getItem("myHappiness");
      if (happinessBar.value == 0 && energyBar.value == 0 && healthBar.value == 0){
            healthBar.value = 100;
            energyBar.value = 100;
            happinessBar.value = 100;
      }
      var feedButton = $('.feed');
      var playButton = $('.play');
      var sleepButton = $('.sleep');

      feedButton.on('click', function(event) {
        feed(healthBar, happinessBar);
     });
      playButton.on('click', function(event) {
        play(happinessBar, energyBar, healthBar);
     });
      sleepButton.on('click', function(event) {
        sleep(energyBar, healthBar);
     });
      decHealth(display, healthBar);
      decEnergy(display, energyBar);
      decHappiness(display, happinessBar);
      if (typeof(Storage) !== "undefined") {

      }
  }