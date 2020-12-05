var timenow = moment().format("dddd, MMMM Do YYYY, h a");


//adding current time to page
$("#currentDay").html(timenow);


//getting  hour date month year from current time  
var currenthour = moment().format("HH");


var currentday = moment().format("D");


var currentmonth =moment().format("M");


var currentyear = moment().format("YYYY");


var daystart = moment().startOf('date');

var hourofdaystart =moment(daystart).format("HH")

var timenowhour =moment().format("HH")


//declaring to start of day from currenttime  




//time blocks 

function coloreval(){

   console.log("fire!")

      //9AM
      var nineblock = moment(daystart).add(9,'hours');
      nineblock = moment(nineblock).format("HH");


      //color logic
      if(timenow > nineblock){
         document.getElementById("9").classList.remove("present")
         document.getElementById("9").classList.remove("future")
         document.getElementById("9").classList.add("past")
         
      }

      if(timenow == nineblock){
         document.getElementById("9").classList.remove("future")
         document.getElementById("9").classList.add("present")
         
      }

      if(timenow < nineblock){
         document.getElementById("9").classList.remove("present")
         document.getElementById("9").classList.remove("past")
         document.getElementById("9").classList.add("future")
         
      }

         //10AM
         var tenblock = moment(daystart).add(10,'hours');
         tenblock = moment(tenblock).format("dddd, MMMM Do YYYY, h a");

         //color logic
         if(timenow > tenblock){
         document.getElementById("10").classList.remove("future")
         document.getElementById("10").classList.remove("present")
         document.getElementById("10").classList.add("past")
         
         }

         if(timenow == tenblock){
         document.getElementById("10").classList.remove("future")
         document.getElementById("10").classList.add("present")
         } 

      if(timenow < tenblock){
         document.getElementById("10").classList.remove("present")
         document.getElementById("10").classList.remove("past")
         document.getElementById("10").classList.add("future")
         
      }

      //11AM
      var elevenblock = moment(daystart).add(11,'hours');
      elevenblock =moment(elevenblock).format("dddd, MMMM Do YYYY, h a");

      //color logic
      if(timenow > elevenblock){
         document.getElementById("11").classList.remove("future")
         document.getElementById("11").classList.remove("present")
         document.getElementById("11").classList.add("past")
      }

      if(timenow == elevenblock){
         document.getElementById("11").classList.remove("future")
         document.getElementById("11").classList.add("present")
      }

      if(timenow < elevenblock){
         document.getElementById("11").classList.remove("present")
         document.getElementById("11").classList.remove("past")
         document.getElementById("11").classList.add("future")
      }

      //12PM
      var noonblock = moment(daystart).add(12,'hours');
      noonblock =moment(noonblock).format("dddd, MMMM Do YYYY, h a");

      //color logic
         if(timenow > noonblock){
         document.getElementById("12").classList.remove("future")
         document.getElementById("12").classList.remove("present")
         document.getElementById("12").classList.add("past")
         }

         if(timenow == noonblock){
         document.getElementById("12").classList.remove("future")
         document.getElementById("12").classList.add("present")
      }

         if(timenow < noonblock){
         document.getElementById("12").classList.remove("present")
         document.getElementById("12").classList.remove("past")
         document.getElementById("12").classList.add("future")
         }

      //1pm
      var oneblock = moment(daystart).add(13,'hours');
      oneblock =moment(oneblock).format("dddd, MMMM Do YYYY, h a");

      //color logic
         if(timenow > oneblock){
         document.getElementById("1").classList.remove("future")
         document.getElementById("1").classList.remove("present")
         document.getElementById("1").classList.add("past")
         }

         if(timenow == oneblock){
         document.getElementById("1").classList.remove("future")
         document.getElementById("1").classList.add("present")
      }

         if(timenow < oneblock){
         document.getElementById("1").classList.remove("present")
         document.getElementById("1").classList.remove("past")
         document.getElementById("1").classList.add("future")
         }

         //2pm
         var twoblock = moment(daystart).add(14,'hours');
         twoblock =moment(twoblock).format("dddd, MMMM Do YYYY, h a");

         //color logic
         if(timenow > twoblock){
         document.getElementById("2").classList.remove("future")
         document.getElementById("2").classList.remove("present")
         document.getElementById("2").classList.add("past")
         }

         if(timenow == twoblock){
         document.getElementById("2").classList.remove("future")
         document.getElementById("2").classList.add("present")
         }

         if(timenow < twoblock){
            document.getElementById("2").classList.remove("present")
            document.getElementById("2").classList.remove("past")
            document.getElementById("2").classList.add("future")
         }

         //3PM
         var threeblock = moment(daystart).add(15,'hours');
         threeblock =moment(threeblock).format("dddd, MMMM Do YYYY, h a");

            //color logic
            if(timenow > threeblock){
            document.getElementById("3").classList.remove("future")
            document.getElementById("2").classList.remove("present")
            document.getElementById("3").classList.add("past")
            }
         
            if(timenow == threeblock){
            document.getElementById("3").classList.remove("future")
            document.getElementById("3").classList.add("present")
            }
         
            if(timenow < threeblock){
                  document.getElementById("3").classList.remove("present")
                  document.getElementById("3").classList.remove("past")
                  document.getElementById("3").classList.add("future")
                  
            }

         //4PM
         var fourblock = moment(daystart).add(16,'hours');
         fourblock =moment(fourblock).format("dddd, MMMM Do YYYY, h a");

            //color logic
            if(timenow > fourblock){
            document.getElementById("4").classList.remove("future")
            document.getElementById("4").classList.remove("present")
            document.getElementById("4").classList.add("past")
            
            }
         
            if(timenow == fourblock){
            document.getElementById("4").classList.remove("future")
            document.getElementById("4").classList.add("present")
            
            }
         
            if(timenow < fourblock){
                  document.getElementById("4").classList.remove("present")
                  document.getElementById("4").classList.remove("past")
                  document.getElementById("4").classList.add("future")
                  
            }


      //5PM

      var fiveblock =moment(daystart).add(17, 'hours')
      fiveblock = moment(fiveblock).format("dddd, MMMM Do YYYY, h a");
         

         //color logic
      if(timenow > fiveblock){
         document.getElementById("5").classList.remove("past")
         document.getElementById("5").classList.remove("future")
         document.getElementById("5").classList.add("future")
      }
      
      if(timenow == fiveblock){
         document.getElementById("5").classList.remove("future")
         document.getElementById("5").classList.add("present")
      }

      if(timenow < fiveblock){
         document.getElementById("5").classList.remove("present")
         document.getElementById("5").classList.remove("past")
         document.getElementById("5").classList.add("future")
      }

      //6PM
      var sixblock =moment(daystart).add(18, 'hours')
      sixblock = moment(sixblock).format("dddd, MMMM Do YYYY, h a");

      //color logic
      if(timenow > sixblock){
         document.getElementById("6").classList.remove("past")
         document.getElementById("6").classList.add("future")
      }

      if(timenow == sixblock){
         document.getElementById("6").classList.remove("future")
         document.getElementById("6").classList.add("present")
      }

      if(timenow < sixblock){
         document.getElementById("6").classList.remove("present")
         document.getElementById("6").classList.remove("past")
         document.getElementById("6").classList.add("future")
      }
     
      

   }
//end of function




//EVENT LISTENERS FOR HOURS ON SHEETS

//9AM Listener
 $("#9").on("click","p",function(){
    var text = $(this).text().trim();

    var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

   $(this).replaceWith(textInput);
   textInput.trigger("focus");


   $("#9").on("blur", "textarea", function(){

     
      var gettext =$("textarea").val();
      text =gettext

   
   //sets up paragraph
    var taskP = $("<p>").text(text);
    $(this).replaceWith(taskP);
   });

   $("#9am").on("click", function(){
      window.localStorage.setItem("9am",text)

   })



});


//10AM Listener
$("#10").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#10").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#10am").on("click", function(){
      window.localStorage.setItem("10am",text)

   })


  });

});

//11AM Listener
$("#11").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#11").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#11am").on("click", function(){
      window.localStorage.setItem("11am",text)

   })

  });

});


//12PM Listener
$("#12").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#12").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#12pm").on("click", function(){
      window.localStorage.setItem("12pm",text)

   })

  });

});


//1PM Listener
$("#1").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#1").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#1pm").on("click", function(){
      window.localStorage.setItem("1pm",text)

   })

  });

});


//2PM Listener
$("#2").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#2").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#2pm").on("click", function(){
      window.localStorage.setItem("2pm",text)

   })

  });

});


//3PM Listener
$("#3").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#3").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#3pm").on("click", function(){
      window.localStorage.setItem("3pm",text)

   })

  });

});


//4PM Listener
$("#4").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#4").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#4pm").on("click", function(){
      window.localStorage.setItem("4pm",text)

   })

  });

});


//5PM Listener
$("#5").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#5").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#5pm").on("click", function(){
      window.localStorage.setItem("5pm",text)

   })

  });

});


//6PM Listener
$("#6").on("click","p",function(){
   var text = $(this).text().trim();

   var textInput = $("<textarea>").val(text);      /*.addClass("form-control")  removed after ":<textarea>"*/

  $(this).replaceWith(textInput);
  textInput.trigger("focus");


  $("#6").on("blur", "textarea", function(){

     //gets text, and rewrites it to text
     var gettext =$("textarea").val();
     text =gettext

  
  //sets up paragraph
   var taskP = $("<p>").text(text);
   $(this).replaceWith(taskP);

   $("#6pm").on("click", function(){
      window.localStorage.setItem("6pm",text)

   })

  });

});



function loadTasks(){

   //get 9am
    var old9am =window.localStorage.getItem("9am");
   
   document.getElementById("nineam").innerHTML = old9am

   //get 10am
   var old10am =window.localStorage.getItem("10am");
   
   document.getElementById("tenam").innerText = old10am

   //get 11am
   var old11am =window.localStorage.getItem("11am");
   
   document.getElementById("elevenam").innerText = old11am

   //get 12am

   var old12pm =window.localStorage.getItem("12pm");
   
   document.getElementById("noon").innerText = old12pm
   
   //get 1pm

   var old1pm =window.localStorage.getItem("1pm");
   
   document.getElementById("onepm").innerText = old1pm 

   //get 2pm
   var old2pm =window.localStorage.getItem("2pm");
   
   document.getElementById("twopm").innerText = old2pm

   //get 3pm
   var old3pm =window.localStorage.getItem("3pm");
   
   document.getElementById("threepm").innerText = old3pm

   //get 4pm
   var old4pm =window.localStorage.getItem("4pm");
   
   document.getElementById("fourpm").innerText = old4pm

   //get 5pm 
   var old5pm =window.localStorage.getItem("5pm");
   
   document.getElementById("fivepm").innerText = old5pm

   //get 6pm 
   var old6pm =window.localStorage.getItem("6pm");
   
   document.getElementById("sixpm").innerText = old6pm

}

//end of load function


coloreval()


setInterval(function(){
coloreval()
}, 3000)


loadTasks()