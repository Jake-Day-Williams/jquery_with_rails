$(document).ready(function() {

  function addUserToList() {
    var userName = $('#user_name');
    var userNameVal = userName.val().trim();
    if(userNameVal == '') {
      alert("User name cannot be blank!");
    } else {
    $('#users_list').append('<li>' + userNameVal + '</li>');
    }
    userName.val(null);
  };
    
  
  $('#jquery_button').click(function() {
    var box = $('#slideToggle');
    if(box.is(':hidden')) {
      box.show();
      $(this).text('Hide Box');
    } else {
      box.hide();
      $(this).text('Show Box');
    }
  });

  
  $('#slideToggle').mouseenter(function() {
    $(this).text('mouse entered');
    $(this).addClass('white-text');
  });
  
  
  $('#slideToggle').mouseout(function() {
    $(this).text('mouse left');
    $(this).removeClass('white-text');
  });

  
  $('h1').click(function(){
    $(this).toggleClass('blue-text');
  });
  
  
  $('#add_user_button').click(function() {
    addUserToList();
  });
  
  $('#user_name').keyup(function(e) {
    var limit = 10;
    if($(this).val().length > limit) {
      alert('You have reached the character limit');
      $(this).val($(this).val().slice(0,10));
    }
    if(e.keyCode == 13) {
      addUserToList();
    }
  });
  
  
  $('#clear_user_button').click(function() {
    var usersList = $('#users_list');
    if(usersList.children().length) {
      usersList.empty();
    } else {
      alert("Nothing to clear!");
    }

  });
  
  
  
  
  
  
  
  
});


















//  $('h1') element selector
//  $('#box') id selector  
//  $('.some_class') class selector
 
  
  // $('#slideToggle').click(function() {
  //   alert('box clicked');
  // });
  
  
  //   $('#jquery_button').click(function() {
  //     $('#slideToggle').slideToggle();
  // });



 
  // $('jquery_button').dblclick(function() {
  //   alert('button dbl clicked');
  // }
  

  // $('#slideToggle').text('some text');  //setter
  
  // $('#slideToggle').html('<h5>some text</h5>');  //setter
  