/** Facebook login and data load code **/

window.fbAsyncInit = function() {
  FB.init({
    appId      : '610629679019028',
    status     : true,
    xfbml      : true
  });

  // the below code is executed immediately after the SDK loads

  /** Login to facebook **/
  FB.login(function(response) { }, {scope: 'user_photos'});

  var fb_access_token = "CAAIrXU0bdBQBADZAVM1jQxGB9oVCk9EAAsaUL5ZA7KJELwICCsNZBsFAoZCJJaHjlqvoLcvT9QZBawcoEaxPppZBbtV8hFrPZBrlHsfSxX8iN9BrWoWfJzyqSHz1kZCAAnkLXGiZBI8XZCjVde4WcaaZCIZCply31qUGrZApU3SevufOMGY1ad8GXZAjeNRWso45spji21n4r6ycoX2wZDZD"

  /** Load all of my profile pictures **/
  FB.api("/me/albums?access_token=" + fb_access_token,
    function (response) {
      for (album in response.data)
      {
        // Find the Profile Picture album
        if (response.data[album].name == "Profile Pictures")
        {
          // Get a list of all photos in that album.
          FB.api(response.data[album].id + "/photos?access_token="+fb_access_token, function(response) {

            for (var i=0; i < response.data.length; i++) {
              src = response.data[i].images[0].source; // the image link
              $(".carousel-indicators").append( $('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>') );
              $(".carousel-inner").append( $('<div class="item"><img src="'+src+'"/></div>') );
            }

          });
        }
      }
      $("#myCarousel").carousel(); // start spinning
  });


/** Load the most recent posts from will hennessy site facebook page **/
FB.api(
  "/willhennessysite/feed?access_token="+fb_access_token,
  function (response) {
    if (response && !response.error) {
      for(var i=0; i<response.data.length; i++) {
        $("#posts").append( $('<tr>'+response.data[i].message+'</tr>') );
        $("#posts").find('tbody')
          .append($('<tr>')
              .append($('<td>')
                  .append($('<h3>')
                    .attr('class', 'status')
                      .text(response.data[i].message)
                  )
              )
          );
      }
    }
  });


};


(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));



