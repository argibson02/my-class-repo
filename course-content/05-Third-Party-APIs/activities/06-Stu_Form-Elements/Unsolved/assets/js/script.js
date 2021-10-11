var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var input = $('#shopping-input');

//var shoppingListLi = $('<li>')
//$('#shoppingInput')

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function formInput(event) {
    event.preventDefault();

    var shoppingItem = $("#shopping-input").val();

    if (!shoppingItem) {
        console.log("no item subimteed")
        return;
    }


    shoppingFormEl.append ('<li>' + shoppingItem + '</li>')


    //shoppingListEl.append(shoppingListLi);
    //shoppingListLi.val($('#shoppingInput').val());
    $('input[type="text"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', formInput);
