var products={};
$(function(){
    $.getJSON( "assets/ecomhunt products.json", function( data ) {
        products = data
    });
    alert('loading product link');
    for (let i = 0; i < products.length; i++) {
        var product = products[i];
        var tag = "<li data-link="+products[i].link+">"+products[i].name+"</li>";
        
        $('#nav-mobile').append(tag);
    }
    $('#nav-mobile li').click(function(){
      
        console.log($(this).data("link"));
        $('#eh iframe').attr("src", $(this).data("link"));
    })
    $('#mbtn').click(function(){
        
        //check if actually using a product is selected

            var ecomhunt = $('#eh iframe');
            var nicheforest = $('#nf iframe');
            if(ecomhunt.attr('src').includes("https://ecomhunt.com/products/"))
            {
                    //set nichforest iframe src to https://nicheforest.com/dashboard/products/new
                    nicheforest.attr('src','https://nicheforest.com/dashboard/products/new');
                    // get the active product details
                    // title, description, interest, links
                    //open all external links in separate tabs
                    //window.open('www.google.com', '_blank');
                    //assign the product details to nichforest form
            }
            else{
                alert("You need to select a product from the sidebar first")
            }
        // notify the user to select a ecohmhunt product from the sidebar
        //Window.postMessage()
    })

    
});