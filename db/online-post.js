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

  let data = {
    "name": document.getElementById('form-name').value,
    "message": document.getElementById('form-message').value,
    "email": "",
    "active": false
  }

  var db = new restdb("5e9f69b5436377171a0c26f8");

  var obj = new db.wishes(data);

  obj.save(function(err, res){
    if (err) {
        responseError =
        `<p id="wish-error-message">hmm, something went wrong!!!<p>`

        document.getElementById("wishes-form").innerHTML = responseError;
    }
    if (res) {

      responseSuccess =
      `<p id="wish-success-message">hahaaa, thanks for your lovely wishes, <b>${res.name}<b>!!!<p>`

      document.getElementById("wishes-form").innerHTML = responseSuccess
    }
  });
}

function shareWishLegacy() {

    let responseSuccess
    let responseError

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;


            response = JSON.parse(response)

            responseSuccess =
            `<p id="wish-success-message">hahaaa, thanks for your lovely wishes, <b>${response.name}<b>!!!<p>`

            document.getElementById("wishes-form").innerHTML = responseSuccess;
        }

        if (this.readyState == 4 && this.status != 200) {
            responseError =
            `<p id="wish-error-message">hmm, something went wrong!!!<p>`

            document.getElementById("wishes-form").innerHTML = responseError;
        }
    };

    let data = {
      "name": document.getElementById('form-name').value,
      "message": document.getElementById('form-message').value,
      "email": "",
      "active": false
    }

    xhttp.open("POST", `https://birthday-b8b2.restdb.io/rest/wishes`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.setRequestHeader('x-apikey', '5e9f69b5436377171a0c26f8')
    xhttp.setRequestHeader('Origin', 'https://jayagopal-narayan.github.io/')
    xhttp.setRequestHeader('Access-Control-Allow-Origin', 'Special-Request-Header')
    xhttp.send(JSON.stringify(data));
}
