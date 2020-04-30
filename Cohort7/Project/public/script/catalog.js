/* global variables */
var items = [];
var serverURL = "http://localhost:8080/api/";
var userName = "Marlo";

// var items = [
//     {
//         // first item
//         code:'1tvs',
//         title:'TV',
//         price:1000,
//         description:"This is the long description of the item",
//         category:'Electronics',
//         image:'img/tv.jpg'
//     },
//     {
//         //second item
//         code: '1ph10',
//         title: 'Phone',
//         price: 10000,
//         description: "This is the long description of the item",
//         category: 'Mobile devices',
//         image: 'img/iphone.jpg'
//     },
//     {
//         //third item
//         code: '2spk',
//         title: 'Speakers',
//         price: 100,
//         description: "This is the long description of the item",
//         category: 'Sound',
//         image: 'img/sound.jpg'
//     },
//     {
//         //fourth item
//         code: '1cpd',
//         title: 'Computer',
//         price: 500,
//         description: "This is the long description of the item",
//         category: 'Compute',
//         image: 'img/pc.jpg'
//     }

// ];

/*functions*/

function fetchCatalog() {
    //get the items from the server
    $.ajax({
        url: serverURL + "items/" + userName,
        type: "GET",
        success: function (res) {
            console.log("Server responded OK", res);
            for (var j = 0; j < res.length; j++) {

                //solve display my items
                if (res[j].user == "Marlo" && res[j].tittle != "") {
                    items.push(res[j]);
                }

            }
            displayCatalog();
        },
        error: function (Details) {
            console.log("Error", Details);
        }
    });



}

function displayCatalog() {
    for (var i = 0; i < items.length; i++) {
        displayItems(items[i]);
    }


}

function displayItems(product) {

    // travel the array
    //for(var i = 0; i<items.length; i++){
    // get the element from the array
    //Create the string
    var layout =
        `<div class="item" id="${product.code}">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">${product.title}</h4>
                </div>
                <div class="card-body">
                <img class="image" src="${product.image}">
                <h1 class="card-title pricing-card-title">$${product.price}</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>${product.description}</li>
                        <hr>
                        <li>${product.category}</li>
                    </ul>
                <button type="button" class="mb-2 btn btn-lg btn-block btn-outline-primary">Buy</button>
                </div>
            </div>
        </div>`;

    // display the element in the DOM (HTML)
    $("#catalog").append(layout);
    //}

}

function init() {
    console.log('Catalog page');
    fetchCatalog();
    $("#search-btn").click(Search);
    $("#search-txt").keypress(function (e) {
        if (e.keyCode == 13) {
            Search();
        }
    });
}

displayCatalog();

function Search() {
    // $('#search-btn').on('click', function(){
    /* body search function */
    var searchString = $('#search-txt').val();
    /* travel the array */
    for (var i = 0; i < items.length; i++) {
        /* conditional */
        if (items[i].title.toUpperCase().includes(searchString.toUpperCase()) || items[i].code.toUpperCase().includes(searchString.toUpperCase()) || items[i].description.toUpperCase().includes(searchString.toUpperCase())) {
            /* execute the change */
            $('#' + items[i].code).show();
        } else {
            $('#' + items[i].code).hide();
        }

        if (searchString == "") {
            $('#' + items[i].code).show();
        }
    }

};

/* initialization */
window.onload = init