$(document).ready(function(e) {

    function DeleteFunction(x){
        console.log(x);
    }
    $.get("/api/user_data", function(user){
        user.umoji.forEach(emo => {

            console.log(emo)
            console.log(emo.id);
            var emoName = `${emo.name}`;

            // capitalize every letter of the emoji's name
            function EmojiName(str) {
                emoName = str.toLowerCase().split(' ');
                for (var x in emoName) {
                    emoName[x] = emoName[x].charAt(0).toUpperCase() + emoName[x].substring(1);
                }
                // Directly return the joined string
                return emoName.join(' ');
             }

            //  var emoId =  "";
             var emoId= $('tr').attr("data-id")

            $(".report").prepend(
                `<tr data-id='${emo.id}'>
                    <td>${EmojiName(emoName.replace(/_/g, " "))}</td>
                    <td>${emo.emoji}</td>
                    <td>${emo.user_emojis.user_comment}</td>

                </tr>`
            );//end for report's append


        });//end of $.get

        // var id;
     //function to delete the row
     $(".del-btn").click( (e) => {
        e.preventDefault();
        if( e.target.parentNode.dataset.id ){
            var id = $(this).data('id');
            console.log( `- delete clicked id (${id})`,e.target.parentNode.dataset.id );

        } else {
            console.log( `- delete clicked id (not on icon) (${id})`,e.target.dataset.id );
        }
         // id = $(".report tr").attr("data-id");
        // console.log("button click")
        // console.log("")
    });





    });



    // $(".delete-cat").on("click", function(event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/cats/" + id, {
    //       type: "DELETE"
    //     }).then(
    //       function() {
    //         console.log("deleted cat", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });

});