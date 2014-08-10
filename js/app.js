$(document).ready(function() {
    
    function getGrocery() {
        
        //append to list using the + button
        $("#addbutton").click(function(enter) {
           console.log("+ was pressed.");
           postGrocery();
        });
        
        //append to the list using enter
        $("#groceries").keydown(function(enter) {
            if (enter.keyCode==13) {
                console.log("enter is pressed.");
                postGrocery();
        }
        });
    };
    
    //defined getGrocery, call it!
    getGrocery();
    
    //got the grocery, print it!
    function postGrocery() {
        var grocery = $("#groceries").val();
        var listitem = '<li class="notbought"><img src="../shoppingList/images/check.jpg" alt="checkbox" id="checkbox">' +grocery+ '<input type="button" id="delete" value="Delete"> </li>'
        $(".items").append(listitem);
        $("#groceries").val("");
        console.log(grocery);
        console.log(listitem);
    };

});


