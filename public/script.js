$(document).ready(function() {
  // var userName = ""
  $("button").click(function (res) {
    var username = $("#Username").val()
    var pasword = $("#pasword").val()
    var login = username+ ", " +pasword
    var answer = ""
    console.log(login)
    $.ajax({
      method: "post",
      url: "/",
      data:{ "userName": login }
    })

    if(answer = "yes"){
     console.log("Success!");
     return res.redirect('/page2');
    }
    else
    {
        alert("Error!");
    }
      // $.ajax({
      //   method: "get",
      //   url: "/",
      //   data:{ "answer": answer }
      // })
    // console.log(answer)
    // $("#q").text("User Response:");
    // $("#p").text(l);
    })
//     var answer = $.get( "answer.html", function() {
//   alert( "success" );
//   window.open(answer.html)
// })
//   .done(function() {
//     alert( "second success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "finished" );
//   });
  // })
})