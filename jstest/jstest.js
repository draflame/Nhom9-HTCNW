function showAlert() {
    alert("Hello, this is an alert!");
    // var result = confirm("Do you want to proceed?");
    // var userInput = prompt("Please enter your name:", "John Doe");
    // console.log("This is a log message.");
    


}
function showConsole(){
    console.log("Hello, this is a console!");
}
function showConfirm(){
    var result = confirm("Do you want to proceed?");
    if (result == true) {
        alert("You pressed OK!");
    } else {
        alert("You pressed Cancel!");
    }
}