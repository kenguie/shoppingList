$(document).ready(function() {
    
    //append to the list using enter
    function getGrocery() {
        $("#groceries").keydown(function (enter) {
            if (enter.keyCode==13) {
                console.log("enter is pressed.")
                postGrocery();
            }
        });
    }
    //defined getGrocery, call it!
    getGrocery();
    
    //got the grocery, print it!
    function postGrocery() {
        var grocery = $("#groceries").val();
        var listitem = '<li class="notbought"><img src="../shoppingList/images/check.jpg" alt="checkbox" id="checkbox">' +grocery+ '<input type="button" id="delete" value="Delete"> </li>'
        $(".items").prepend(listitem);
        $("#groceries").val("");
        console.log(grocery);
        console.log(listitem);
    };

});


