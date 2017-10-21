$(document).ready(function () {

    $("#submitButton").on("click", function () {

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "14a91e72e87a4731b9561e5232ce8b19",
            'q': "trump"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            
            console.log(result); 
            var results = result.response;

            var Articles = $('<div>');
            var news = $('<p>');
            var textstuff = results.docs[0].web_url;
            news.text(textstuff);

            Articles.append(news);
            console.log(Articles); 

            $("#appendArticles").append(Articles);

            console.log(news); 

        });

        // var stories = $(this).attr("response.docs.");
        // // console.log(result);
        // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + stories + "&api_key=K14a91e72e87a4731b9561e5232ce8b19";

        // // url += '?' + $.param({
        // //     'api-key': "14a91e72e87a4731b9561e5232ce8b19",
        // //     'q': "donald trump"
        // // });

        // $.ajax({
        //     url: url,
        //     method: 'GET',
        // }).done(function (result) {
        //     console.log(result);
        //     // }).fail(function (err) {
        //     //     throw err;
        // });


    });

});