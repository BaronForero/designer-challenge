function showPopUpandEmail() {
    //  email input value
    let emailInput = document.querySelector('.email');
    let email = emailInput.value;

    // new window with the thank you message
    let newWindow = window.open();
    newWindow.document.write('<h2>Thank you for subscribing!</h2>');
    newWindow.document.write('<p>We will keep you posted with updates, tips, and recommendations at ' + email + '</p>');
}