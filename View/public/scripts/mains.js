function preLoad(){
    $(document).ready(function () {
        $("#bodyPageHome").empty();
        $("#com").empty();
        $("#company").empty();
        $("#price").empty();
    });
}

function ShowHomePage() {
    $(document).ready(function () {
        preLoad();
        $("#bodyPageHome").load("home.html");
        console.log("load home page");

    });
}

function ShowChatPage() {
    $(document).ready(function () {
        preLoad();
        $("#com").load("chat.html");
        console.log("load chat page");

    });
}
 
function ShowSearchPage() {
    $(document).ready(function () {
        preLoad();
        $("#com").load("search.html");  
        console.log("load search page");
    });
}

function ShowCatalogPage() {
    $(document).ready(function () {
        preLoad();
        $("#com").load("catalog.html");
        console.log("load catalog page");
    });
}

function ShowLogInPage() {
    $(document).ready(function () {
        preLoad();
     //   $("#com").load("login.html");   need to build html
        console.log("load Log In page");

    });
}

function ShowSingnupPage() {
    $(document).ready(function () {
        preLoad();
       // $("#com").load("signup.html");   need to build html
        console.log("load Sign up page");

    });
}

function ShowCartPage() {
    $(document).ready(function () {
        preLoad();
        $("#com").load("cart.html");
        console.log("load cart page");

    });
}
// Filter number 1 - by gender, size, category
function ShowCatalog1(val1, val2, val3) {

    $.get("catalogarr", function (data, status) {
        console.log("load page1");
        $("#company").empty();
        $("#price").empty();
        let count = 0;
        console.log("load page2");
        let UserGender = val1
        let UserSize = val2;
        let UserCategory = val3;
        console.log(val1);
        console.log(val2);
        console.log(val3);
        for (let i = 0; i < data.length; i++) {
            if ((UserSize == data[i].size || UserSize == "all") && (UserGender == data[i].gender || UserGender == "all") && (UserCategory == data[i].category || UserCategory == "all")) {
                $("#company").append(`<p id="proname"><b><Company:</b></font> ${data[i].company}</p> <p><b>Price:</b>${data[i].price}$</p>
                        <p><b>Color: </b>${data[i].color}</p>
                        <p><b>Size: </b>${data[i].size}</p>
                        <p><b>Gender: </b>${data[i].gender}</p>
                        <p><b>Category: </b>${data[i].category}</p>`);
                document.getElementById("price").innerHTML += `<p><img id="image_` + i + `" class="pic"/></p><br><br><br>`;
                $("#image" + "_" + i).attr("src", data[i].imageUrl);
                $("#image" + "_" + i).attr("width", "300px");
                $("#image" + "_" + i).attr("height", "195px");
                count++;
            }
        }
        if (count == 0) {
            $("#company").append("Sorry! There are 0 results to your search. Please try again!");
        }

    });

}

