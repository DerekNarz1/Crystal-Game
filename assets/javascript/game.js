$( document ).ready(function(){

  var Random = Math.floor(Math.random()*101+19)
  
  $('.numberToMatch').text(Random);
  
  var gem1= Math.floor(Math.random()*11+1)

  var gem2= Math.floor(Math.random()*11+1)

  var gem3= Math.floor(Math.random()*11+1)

  var gem4= Math.floor(Math.random()*11+1)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberWins').text(wins);

$('#numberLosses').text(losses);

  function winner(){

  alert("You won!");
    wins++; 

    $('#numberWins').text(wins);
    reset();
  }

  function loser(){

  alert ("You lose!");
    losses++;

    $('#numberLosses').text(losses);
    reset();
  }

  $('#one').on ('click', function(){
    userTotal = userTotal + gem1;

    console.log("New userTotal= " + userTotal);

    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          winner();
        }

        else if ( userTotal > Random){
          loser();
        }    
  })

  $('#two').on ('click', function(){

    userTotal = userTotal + gem2;

    console.log("New userTotal= " + userTotal);

    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })

  $('#three').on ('click', function(){

    userTotal = userTotal + gem3;

    console.log("New userTotal= " + userTotal);

    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          winner();
        }

        else if ( userTotal > Random){
          loser();
        } 
  })  

  $('#four').on ('click', function(){

    userTotal = userTotal + gem4;

    console.log("New userTotal= " + userTotal);
    
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 