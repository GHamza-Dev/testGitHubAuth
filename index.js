document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault();
    var username = document.querySelector('input[type=text]').value;
    var password = document.querySelector('input[type=password]').value;
    var b = username + ':' + password;
    var encodedAuth = b.toString('base64');
    console.log(encodedAuth);


    fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            }
        })
        .then(function(response) {
            console.log(response);
        });
})