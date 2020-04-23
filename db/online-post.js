// var db = new restdb("5e9f69b5436377171a0c26f8");
// var query = {}; // all
// var hint = {"$max": 10}; // first 10 only
//
// var obj = new db.wishes({"email": "jay@j.com", "name": "foo", "message": "bar", "active": false});
//
// obj.save(function(err, res){
//   if (!err){
//     console.log(err)
//   }
//   console.log(res)
// });


function shareWish() {


    let responseSuccess
    let responseError

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            let response = xhttp.responseText;


            response = JSON.parse(response)

            responseSuccess =
            `<p id="wish-success-message">hahaaa, thanks for your lovely wishes, <b>${response.name}<b>!!!<p>`

            document.getElementById("wishes-form").innerHTML = responseSuccess;
        }

        if (this.readyState == 4 && this.status != 201) {
            responseError =
            `<p id="wish-error-message">hmm, something went wrong!!!<p>`

            document.getElementById("wishes-form").innerHTML = responseError;
        }
        console.log(xhttp.responseText)
        console.log(this.status)
        console.log(this.readyState)
    };

    let data = {
      "name": document.getElementById('form-name').value,
      "message": document.getElementById('form-message').value,
      "email": "",
      "active": false
    }

    xhttp.open("POST", `https://birthday-b8b2.restdb.io/rest/wishes`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.setRequestHeader('x-apikey', '68ec24a2c2494f609ca38d4eb58fcf8eaf26a')
    xhttp.setRequestHeader('Origin', 'https://jayagopal-narayan.github.io')
    xhttp.send(JSON.stringify(data));
}
