
    
      // Initial array of images
      var images = ["Pikachu", "Donald Trump", "Crying Jordan", "Steve Jobs", "Gritty", "Kevin from The Office"];

      // displayimageInfo function re-renders the HTML to display the appropriate content
      function displayimageInfo() {

        var image = $(this).attr("data-image");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        image + "&api_key=dc6zaTOxFJmzC&limit=5";



        // Creating an AJAX call for the specific image button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var imageImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              imageImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and imageImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(imageImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });

      }

      // Function for displaying image data
      function renderButtons() {

        // Deleting the images prior to adding new images
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of images
        for (var i = 0; i < images.length; i++) {

          // Then dynamicaly generating buttons for each image in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button class='btn btn-primary btn-sm btnSpace'>");
          // Adding a class of image-btn to our button
          a.addClass("image-btn");
          // Adding a data-attribute
          a.attr("data-image", images[i]);
          // Providing the initial button text
          a.text(images[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
          console.log(a)
        }
      }

      // This function handles events where a image button is clicked
      $("#add-image").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var image = $("#image-input").val().trim();
        

        // Adding image from the textbox to our array
        images.push(image);

        // Calling renderButtons which handles the processing of our image array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "image-btn"
      $(document).on("click", ".image-btn", displayimageInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();




// Event listener for all button elements
$(".btnSpace").on("click", function() {
      // In this case, the "this" keyword refers to the button that was clicked
      var image = $(this).attr("data-image");

      // Constructing a URL to search Giphy for the name of the image who said the quote
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        image + "&api_key=dc6zaTOxFJmzC&limit=5";

      // Performing our AJAX GET request
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div for the gif
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var imageImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              imageImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and imageImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(imageImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });
    });

