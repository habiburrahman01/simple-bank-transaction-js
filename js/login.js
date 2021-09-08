document.getElementById('login-btn').addEventListener(
    'click',function(){
        const emailField=document.getElementById('user-email');
        //getting user email
        const userEmail=emailField.value;
        const passwordField=document.getElementById('user-password')
        //getting user passwoer
        const userPassword=passwordField.value;
        if(userEmail=="admin@gmail.com" && userPassword == "1"){
            window.location.href="/banking.html"
        }
       

    });


  