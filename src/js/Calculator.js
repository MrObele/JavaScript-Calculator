$(document).ready(function(){
  var values = [];//store all values entered bythe user on the input field
  var displayData; // holds the total result from each mathemeaticalexpression on the input field

  $("#displayValue").val("0");// used to set aninitialvalueof 0 on the screen.

  //add value inputed values on the screen to the values array  and display all on the screen.
  function userInputs($value){
   $("#displayValue").removeClass("text-center");//ensure that for each new input on the screen it always starts fromthe right not center
   $("#displayValue").css("color","black");// and color should be black, this is because for every error, the color will be red
 // using the array push method, add every value entered by the user into the values array.
    values.push($("#"+$value).val());
    //using the join method, convert the the values array intoa string and display them on the screen,
  $("#displayValue").val(values.join(''));
  }
  //taking individual key values on click
  $("#seven").click(function(){
      userInputs("seven");
  });
  $("#eight").click(function(){
      userInputs("eight");
  });
   $("#nine").click(function(){
      userInputs("nine");
  });
   $("#sub").click(function(){
      userInputs("sub");
  });
   $("#four").click(function(){
      userInputs("four");
  });
  $("#five").click(function(){
      userInputs("five");
  });
  $("#six").click(function(){
      userInputs("six");
  });
  $("#plus").click(function(){
      userInputs("plus");
  });
  $("#one").click(function(){
      userInputs("one");
  });
  $("#two").click(function(){
      userInputs("two");
  });
  $("#three").click(function(){
      userInputs("three");
  });
  $("#zero").click(function(){
      userInputs("zero");
  });
  $("#dot").click(function(){
      userInputs("dot");
  });
  $("#division").click(function(){
      userInputs("division");
  });
  $("#mult").click(function(){
      userInputs("mult");
  });
   $("#leftBracket").click(function(){
      userInputs("leftBracket");
  }); $("#rightBracket").click(function(){
      userInputs("rightBracket");
  });

  //function to delete one value
  function deleteValue(){
    values.pop();
   for(var i=values.length;i>=0;i--){
  $("#displayValue").val(values.join(''));
   }
  }

  $("#delete").click(function(){
    deleteValue();
  });
  //erase everything
  function eraseAll(){
      values=[""];
     for($i=0;$i<values.length;$i++){
  $("#displayValue").val(values.join(''));
    }
  }
  $("#clear").click(function(){
    eraseAll();
  });

  //get the final answer and display on the textbox
  function showData(){
      //use eval to evaluate the string into a mathematical expression
    try{
      displayData =  eval($("#displayValue").val());
   $("#displayValue").val(displayData);
    //re-initialize the values array to the answer
    values = [displayData];
    }
    catch(e){
        $("#displayValue").css("color","red");
        $("#displayValue").addClass("text-center");
         $("#displayValue").val("Error");//custom error
        //  $("#displayValue").val(e);this will give theactual javascript error
    }
  }
  //display the result when equals button is clicked.
  $("#result").click(function(){
    showData();
    values = [displayData];// used to ensure that after placing thefinal answer we can still perform mathematical operations with this answer and any other input.

  });
});
