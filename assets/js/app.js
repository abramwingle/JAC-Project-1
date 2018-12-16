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

        personImage = $("<img class='newColumn rounded'><br>");
        personImage.attr("src", response[i].url);

        pictureDiv.append(personImage);

        $("#pictureDisplay").prepend(pictureDiv);
    }


    for (i = 0; i < 9; i++) {

        createDiv();


    };
    // for (var j = 0; j < response.length; j++) {
        var perIMG = $("<img class='imgurs' style='width:300px; height:300px;' alt='Portfolio'><br>");
        perIMG.attr("src", response[0].url);
        $("#index-img").html(perIMG);

        var perIMG2 = $("<img class='imgurs' style='width:300px; height:300px;' alt='Portfolio'><br>");
        perIMG2.attr("src", response[1].url);
        $("#index-img-2").html(perIMG2);

        var perIMG3 = $("<img class='imgurs' style='width:300px; height:300px;' alt='Portfolio'><br>");
        perIMG3.attr("src", response[2].url);
        $("#index-img-3").html(perIMG3);
    // };
}
)