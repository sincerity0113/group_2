/* eslint-disable no-undef */


$(document).ready(function(){

  var userId;

  function getUsers() {
    $.get("/api/users/", function(data) {
      // console.log(data[0].id)
      // console.log(data[0].umoji[0].user_emojis.user_id)

      // console.log(data[0].umoji.length)

      // for(var i = 0; i <= (data[0].umoji).length; i++){
      //   if(data[0].id == data[0].umoji[0].user_emojis.user_id){
      //     console.log(data[0].umoji[i].polarity)
      //   }
      // }

      // console.log(data[0].umoji[0].polarity)
      // console.log(data[0].umoji[1].polarity)
      // console.log(data[0].umoji[2].polarity)
      // console.log(data);
    });
  }

  getUsers();


  // $.get("/api/user_data").then(function(data) {
  //     userId = data.id
  // });


  // front window will appear first
  $('.front-window').show();

  //three containers for the button are hidden by default
  $('#happy-emoji-container').hide();
  $('#neutral-emoji-container').hide();
  $('#sad-emoji-container').hide();

  //happy button function
  $('#happy-btn').click(function() {
    $('#happy-emoji-container').show();
    $('#neutral-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //neutral button container
  $('#neutral-btn').click(function() {
    $('#neutral-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //sad button container
  $('#sad-btn').click(function() {
    $('#sad-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#neutral-emoji-container').hide();
  });

  // back button
  $('.x-button').click(() => {
      $('.front-window').show();
      $('#happy-emoji-container').hide();
      $('#neutral-emoji-container').hide();
      $('#sad-emoji-container').hide();
  });

  //hides the modal by default
  $('.modal').hide();
  //if the user clicks on the emoji, a modal will appear with its info
  $(".emoji-info").click((e) => {

    $.get("/api/user_data").then(function(data) {
         userId = data.id
    });


    // var id = $(".emoji-info").attr("data-id");
    var id = $(e.target).attr("data-id");
    var name = $(e.target).attr("data-name");
    var emoji = $(e.target).text();
    var polarity = $(e.target).attr("data-polarity");
    console.log("polarity: ",polarity)
    console.log(e);
    var emojiInfo = {
        userId : userId,
        id: id,
        name: name,
        emoji: emoji,
        polarity: polarity

  // front window will appear first
  $('.front-window').show();

  //three containers for the button are hidden by default
  $('#happy-emoji-container').hide();
  $('#neutral-emoji-container').hide();
  $('#sad-emoji-container').hide();

  //happy button function
  $('#happy-btn').click(function() {
    $('#happy-emoji-container').show();
    $('#neutral-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //neutral button container
  $('#neutral-btn').click(function() {
    $('#neutral-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //sad button container
  $('#sad-btn').click(function() {
    $('#sad-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#neutral-emoji-container').hide();
  });

  // back button
  $('.x-button').click(() => {
      $('.front-window').show();
      $('#happy-emoji-container').hide();
      $('#neutral-emoji-container').hide();
      $('#sad-emoji-container').hide();
  }); 
  
  //hides the modal by default
  $('.modal').hide();
  //setting a global variable
  var id, name, emoji, emojiInfo, polarity;
  //if the user clicks on the emoji, a modal will appear with its info   
  $(".emoji-info").click((e) => {
    // var id = $(".emoji-info").attr("data-id");
     id = $(e.target).attr("data-id");
     name = $(e.target).attr("data-name");
     emoji = $(e.target).text();
     emojiInfo = {
        id: id,
        name: name,
        emoji: emoji

    }
    $.ajax({
        type: "GET",
        data: emojiInfo
    })
    .then(function(){

         console.log(userId, name, emoji, id, polarity)
        $('.modal').show();
        $('p').text(emoji);

        $.post("/api/useremojis",
        {
          user_id: userId,
          emoji_id: id,
          user_comment: "Hi how are you?"
        },
      function(data,status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
  });

    });
    //close button for the modal
    $('#close-btn').click(function(){
      $('.modal').hide();
    })
  })

        // console.log(name, emoji, id)

       // to fade in (show) the modal in 1 sec
        $('.modal').fadeIn(1000);
        $('p').text(emoji);
        $('#confirm-btn').text('Confirm');
    });

  });

  //close button for the modal
  $('#close-btn').click(() => {
    // to fade out (hide) the modal in 0.6 sec
  $('.modal').fadeOut(600);
  });

  
  $('#textarea').hide();
  $('#confirm-btn').click(() => {
    $('#close-btn').hide();
    $('.modal-title').text("You just clicked " + emoji);
    $("#confirm-btn").attr("id", "submit-btn");
    
    $('#textarea').show();

    $("#emoji-icon").hide();
    $("#submit-btn").click((e)=>{
        var userId;

        $.get("/api/user_data").then((data) => {
            userId = data.id;
        });

         polarity = $(e.target).attr("data-polarity");
        console.log(id)

         emojiInfo = {
            userId : userId,
                id : id,
            name : name,
            emoji : emoji,
        polarity : polarity
        }
        $.ajax({
            type: "GET",
            data: emojiInfo
        }).then(() => {
                // console.log(data)
                console.log(userId, name, emoji, id, polarity);
                $('.modal').show();
                $('p').text(emoji);
                console.log(id);
                var userEmoji = {
                    user_id  : userId,
                    emoji_id : id,
                    user_comment: $("#comment").val()
                }
                $.ajax({
                    type: "POST",
                    url: "/api/useremojis",
                    data: userEmoji
                }).then(
                    function(){
                        location.reload();
                    }
                  );
            
            }
        );
    });

  });

    
});

