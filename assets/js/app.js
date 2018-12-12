
    var queryUrl = "https://api.gyazo.com/api/images?access_token=211603a169f957bac23aeb0e8f1efef90e0ca2568e426bfba70f452f1eb5b895"

    $.ajax({
        method: "GET",
        url: queryUrl

    }).then(function(response) {
        console.log(response);
    });
