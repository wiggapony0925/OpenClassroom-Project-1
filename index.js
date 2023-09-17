function emailSend() {
        var userName = document.getElementById('name').value;
        var phone  = document.getElementById('phone').value;
        var email = document.getElementById('email').value;

        var messageBody = "Name" + userName +
        "<br /> Phone " + phone +
        "<br /> Email " + email


     Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if (message=="OK") {
            swal("good job!", "your Email was Send to", "success")
        }
        else {
            swal("Error", "email couldnt send", "error")
        }
      }
    );
};