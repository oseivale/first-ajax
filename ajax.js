document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var requestToRoot = document.querySelector('.btn-1');
  var requestToPingPong = document.querySelector('.btn-2')
  var requestToCount = document.querySelector('.btn-3');
  var requestToTime = document.querySelector('.btn-4')

  var requestToCar = document.querySelector('.btn-5')

  requestToRoot.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/' ,
      method: 'GET' ,
      data: {} ,
      // data --> info being send to the server by the request
      dataType: 'text'
      //data type --> data type of the reponse
    }).done(function(responseData){
      console.log(responseData)
    });

  })

  requestToPingPong.addEventListener('click', function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping' ,
      method: 'GET' ,
      data: {} ,
      // data --> info being send to the server by the request
      dataType: 'text'
      //data type --> data type of the reponse
    }).done(function(responseData){
       console.log(responseData)
       document.querySelector('section').append(responseData)
    }).fail(function(responseData){
        document.querySelector('section').append("I'm sorry, Dave. I'm afraid I can't do that.")
    }).always(function(responseData){
      console.log("Hey the request finished!")
    })


  })

  requestToCount.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count' ,
      method: 'GET' ,
      data: {} ,
      // data --> info being send to the server by the request
      dataType: 'text'
      //data type --> data type of the reponse
    }).done(function(responseData){
      console.log(responseData)
    });

  })

  requestToTime.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time' ,
      method: 'GET' ,
      data: {timezone: 'America/Mexico_City'} ,
      // data --> info being send to the server by the request
      dataType: 'text'
      //data type --> data type of the reponse
    }).done(function(responseData){
      document.querySelector('section').append(responseData)
    });




  })

  requestToCar.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car' ,
      method: 'GET' ,
      data: {} ,
      // data --> info being send to the server by the request
      dataType: 'html'
      //data type --> data type of the reponse
    }).done(function(responseData){
      document.querySelector('section');

    });

  })



});
