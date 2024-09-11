function sendMail(){
    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    emailjs.send('service_ys5uoqw','template_n78vo78',parms).then(alert('Email Sent!!'))
}