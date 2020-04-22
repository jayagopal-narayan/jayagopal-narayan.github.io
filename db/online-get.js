// var db = new restdb("5e9f69b5436377171a0c26f8");
//
// // var obj = new db.wishes({"email": "jay@j.com", "name": "test", "message": "message", "active": false});
//
// // db.product.find(query, hint, function(err, productlist){
// //   console.log(productlist)
// //   console.log(err)
// //   console.log('check')
// //   // productlist is an array of product objects ...
// // });
//
// var query = {}; // get all records
// var hints = {"$max": 100, "$orderby": {"_id": -1}}; // top ten, sort by creation id in descending order
// db.wishes.find(query, hints, function(err, res){
// // db.wishes.getById('5ea01d1fe332cd26000d0468', function (err, res){
//   if (err){
//     console.log(err)
//   }
//   if (res){
//     getMessages(res);
//     console.log(res)
//   }
// });
//
// function getMessages(messages) {
//   let htmlBody = '';
//   for (let i in messages) {
//     // console.log(messages[i].email)
//
//     let active = ''
//     if ( i == 0 ) {
//       active = 'active'
//     }
//
//     htmlBody = htmlBody + `
//         <div class="carousel-item wishes-parent-default ${active}">
//           <p class="wishes-content-default">${messages[i].message}</p>
//           <h3 class="wishes-name-default">${messages[i].name}<h3>
//         </div>
//     `
//   }
//
//
//   let htmlBegin = `
//   <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//     <div class="carousel-inner wishes-inner-default">
//   `
//   let htmlEnd = `
//     </div>
//   </div>
//   `
//
//   let html = htmlBegin + htmlBody + htmlEnd
//
//   console.log(html)
//
//   document.getElementById("add-wishes").innerHTML = html
// }
// $(document).ready(function(){
function loadData() {

  let responseSuccess
  let responseError

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let response = xhttp.responseText;

          console.log(response)

          getMessages(response)

          // response = JSON.parse(response)
          //
          // if(response.status) {
          //     responseSuccess =
          //     `<h5>Thanks for Sign Up with GiftyKids.</h5>
          //     <br>
          //     <hr>
          //     <br>
          //     <br>`
          //     // <h5>Thanks for Sign Up with GiftyKids. Please check your email to activate within 24 hours.</h5>
          //
          //     document.getElementById("registration-success").innerHTML = responseSuccess
          // }
      }

      // if (this.readyState == 4 && this.status != 200) {
      //     responseError =
      //     `<p id="register-error-message">*Sorry, please try again!!!<p>`
      //
      //     document.getElementById("registration-failure").innerHTML = responseError;
      // }
  };

  xhttp.open("GET", `https://birthday-b8b2.restdb.io/rest/wishes`, true);
  xhttp.setRequestHeader('x-apikey', '68ec24a2c2494f609ca38d4eb58fcf8eaf26a')
  // let formData = new FormData(document.getElementById('registration-form'));
  xhttp.send();



  // var db = new restdb("5e9f69b5436377171a0c26f8");
  //
  // var query = {}; // get all records
  // var hints = {"$max": 100, "$orderby": {"_id": -1}}; // top ten, sort by creation id in descending order
  // db.wishes.find(query, hints, function(err, res){
  // // db.wishes.getById('5ea01d1fe332cd26000d0468', function (err, res){
  //   if (err){
  //     console.log(err)
  //   }
  //   if (res){
  //     getMessages(res);
  //     console.log(res)
  //   }
  // });
  //
  function getMessages(messages) {
    let htmlBody = '';
    for (let i in messages) {
      // console.log(messages[i].email)

      let active = ''
      if ( i == 0 ) {
        active = 'active'
      }

      htmlBody = htmlBody + `
          <div class="carousel-item wishes-parent-default ${active}">
            <p class="wishes-content-default">${messages[i].message}</p>
            <h3 class="wishes-name-default">${messages[i].name}<h3>
          </div>
      `
    }


    let htmlBegin = `
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner wishes-inner-default">
    `
    let htmlEnd = `
      </div>
    </div>
    `

    let html = htmlBegin + htmlBody + htmlEnd

    console.log(html)

    // document.getElementById("add-wishes").innerHTML = html
  }
}
  // console.log(messages)
  // document.getElementById('add-wishes').innerHTML = messages;
// });
