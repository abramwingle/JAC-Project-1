var gifDiv;
var personImage;
var results;
var queryUrl = "https://api.gyazo.com/api/images?access_token=211603a169f957bac23aeb0e8f1efef90e0ca2568e426bfba70f452f1eb5b895"
var i;
$.ajax({
    method: "GET",
    url: queryUrl

}).then(function (response) {
    console.log(response);
    results = response.data;


    function createDiv() {
        pictureDiv = $("<div>");

        personImage = $("<img class='newColumn'>");
        personImage.attr("src", response[i].url);

        pictureDiv.append(personImage);

       $("#pictureDisplay").prepend(pictureDiv);
    }


    for (i = 0; i < 9; i++) {

        createDiv();


};

}
)