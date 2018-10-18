$(document).ready(function() {

  $('.block .a:first').show();
  $(".block .q").on('click',function () {

    var answer =  $(this).next();
    
    $('.block .a:visible').not(answer).slideUp(1000);
    answer.slideToggle(1000);

  }); 

  // $(".q").click(function() {
  //   $(".a").slideToggle(1000);
  // });

  // $("a")
  // $("#some-id")
  // $(".someclass")
  // $("header > ul:has(a)")

  // setInterval(function(){ // Function inside works with 1000ms interval
  //   $(".blue-block").fadeIn('3000', function () {
  //   $(this).animate({ top: 100 }, { duration: 1000 });
  //   $(this).delay(1000).fadeOut('3000');
  //   }); // fadeIn.delay.fadeOut
  // }, 1000);

  // $("h2.blue-block2").hide();

  // $("span").css("color", "red");

  //*First,last, even, odd elements*//

  // $('ul#list li:first').css('color', 'red');
  // $('ul#list li:last').css('color', 'red');
  // $('ul#list li:even').css('background-color', 'yellow');
  // $('ul#list li:odd').css('background-color', '#ccc');
  // $('ul#list li:nth-child(3n)').css('list-style', 'none');

  // $(':button').hide(); //hide attr type=""
  // $(':text').hide();

  // $("[href]").css("color", "red"); //change link color
  // $('[href="http://yahoo.com"]').css("color", "green"); //change link with #yahoo.com
  // $('*').hide(); //hide everything

  //BTN click/hover/

  // $('#btn1').click(function(){
  //   alert('Button Clicked!')
  // })

  // $('#btn1').on('click',function(){
  //   alert('Button Clicked!')
  // })

  //   $('#btn1').on('click',function(){
  //     $('.para1').hide();
  //   })
  //   $('#btn2').on('click',function(){
  //     $('.para1').show();
  //   })
  //   $('#btn1').hover(function(){
  //     $('.para1').toggle();
  //   })

  //Inputs*/

  // $('input').focus(function(){ //in focus (click in)
  //   $(this).css('background', 'pink');
  // });

  // $('input').blur(function(){ //in blur (click out)
  //   $(this).css('background', 'white');
  // })

  // $('input').keyup(function(){ //key up letter in input
  //   console.log('keyup');
  // })

  // $('input').keyup(function(e){ //key up letter in input
  //   console.log(e.target.value);
  // })

  // $('select#gender').change(function(e){
  //   alert(e.target.value);
  // })

  // $('#form').submit(function(){
  //   console.log('submitted')
  // })

  // $('p.para5').css('color', 'red');
  // $("p.para6").css({ color: "red", background: "#ccc" });
  // $("#btn5").click(function() {
  //   $("p.para5").toggleClass("myClass");
  // });
  // $('#myDiv').text('Hello World')
  // $("#myDiv").html("<h3>Hello World</h3>");

  // $('ul').append('<li>Append List Item</li>');
  // $('ul').prepend('<li>Prepend List Item</li>');
  // $('ul').before('<h1>Hello worllllld</h1>');
  // $('ul').after('<h1>WorldHelloooo</h1>');

  // $('ul').empty(); //hide element, but it stay in DOM
  // $('ul').detach(); //delete from DOM

  // $('.para5').appendTo('.para6');

  // $('a').attr('target', '_blank'); //add attribute taget (new window for link)
  // alert ($('a').attr('href')); //show in alert #

  // $('a').removeAttr('target'); //remove attr target (link open in current window)
  // $('p').wrap('<h1>') //all p tags wrap in h1 tag

  // $("#newItem").keyup(function(e) {
  //   var code = e.which;
  //   if (code == 13) {
  //     e.preventDefault();
  //     $("ul").append("<li>" + e.target.value + "</li>");
  //   }
  // });

  // var myArr = ['Brad', "kelley", 'Nate', 'Jose'];

  // $.each(myArr, function(i,val){
  //   $('#users').append('<li>'+val+'</li>');
  // })

  // var newArr = $("ul#list li").toArray();

  // $.each(newArr, function(i, val) {
  //   $("#users").append("<li>" + val + "</li>");
  // });

  // $("#result").load("test.html", function(responseTxt, statusTxt, xhr) {
  //   if (statusTxt == "success") {
  //     alert("It went fine");
  //   } else if (statusTxt == "error") {
  //     alert("Error:" + xhr.statusText);
  //   }
  // });
  // $.get("test.html", function(data) {
  //   $("result").html(data);
  // });

  // $.getJSON("user.json", function(data) {
  //   $.each(data, function(i, user) {
  //     $("ul#users").append("<li>" + user.firstName + "</li>");
  //   });
  // });

  // $.ajax({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   dataType: "json"
  // }).done(function(data) {
  //   console.log(data);
  //   $.map(data, function(post, i) {
  //     $("#result").append(
  //       "<h3>" + post.title + "</h3><p>" + post.body + "</p>"
  //     );
  //   });
  // });
  // $('#postForm').submit(function(e){
  //   e.preventDefault();

  //   var title = $('title').val();
  //   var body = $('#body').val();
  //   var url = $(this).attr('action');

  //   $.post(url, {title:title, body:body}).
  //     done(function(data){
  //     console.log('Post saved');
  //     console.log(data);
  //   });
  // });
});
