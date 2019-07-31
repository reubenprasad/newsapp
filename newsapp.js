$(document).ready(function(){
    $('h3').hide();
    $("#sel").hide();
    var stickyNavTop = $('.nav').offset().top;
    var stickyNav = function(){
     var scrollTop = $(window).scrollTop();     
     if (scrollTop > stickyNavTop) { 
         $('.nav').addClass('sticky');
     } else {
         $('.nav').removeClass('sticky'); 
     }
 };

 stickyNav();
 $(window).scroll(function() {
     stickyNav();
 });

 $("#t1").click(function(){
    $('h3').show();
 $.ajax({
        
    type:"GET",
    url:"https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=b10e2e754b6c4f658f64feeb789d2c3b",
   success:function(data){
       
    $('h3').hide();
    var test = data['articles'];
     var output = "";
     for(var i in data['articles'])
    {   var title = data['articles'][i].title;
        var content = data['articles'][i].content;
        var image = data['articles'][i].urlToImage;
        var time =data['articles'][i].publishedAt;
        output+="<div class='card'><div class='card-body' style='background-color:#DCDCDC'><h5 class='card-title' style='text-align:center; font-weight:bold'>"+ title +"</h5>";
        output+="<img src='"+ image +"' style='display:block; margin-left:auto;margin-right:auto;width:50%'><br>";
        output+="<h6 class='card-subtitle mb-2' style='font-size:20px;' align='justify'>"+ content +"</h6>";
        output+="<br><p style='font-size:15px'>"+ time +"</p>";        
        output+="</div></div><br>";
    }
      
    $('.result').html(output);
   } 
  

});
});

$("#category").click(function(){
    $('h3').show();
    $("#sel").hide();
   if($("#category").val() == "Business")
   var n_url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b10e2e754b6c4f658f64feeb789d2c3b";
   else if($("#category").val() == "Sports")
   var n_url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b10e2e754b6c4f658f64feeb789d2c3b";
   else if($("#category").val() == "Entertainment")
   var n_url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b10e2e754b6c4f658f64feeb789d2c3b";
   else if($("#category").val() == "Technology")
   var n_url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b10e2e754b6c4f658f64feeb789d2c3b";
   else
   {
    $("#sel").show();
    $('h3').hide();
   }
 $.ajax({

    type:"GET",
    url: n_url,
   success:function(data){
       
    $('h3').hide();
    var test = data['articles'];
     var output = "";
     for(var i in data['articles'])
    {   var title = data['articles'][i].title;
        var content = data['articles'][i].content;
        var image = data['articles'][i].urlToImage;
        var time =data['articles'][i].publishedAt;
        output+="<div class='card'><div class='card-body' style='background-color:#DCDCDC'><h5 class='card-title' style='text-align:center; font-weight:bold'>"+ title +"</h5>";
        output+="<img src='"+ image +"' style='display:block; margin-left:auto;margin-right:auto;width:50%'><br>";
        output+="<h6 class='card-subtitle mb-2' style='font-size:20px;' align='justify'>"+ content +"</h6>";
        output+="<br><p style='font-size:15px; text-align:center;'>"+ time +"</p>";        
        output+="</div></div><br>";
    }
      
    $('.result').html(output);
   } 
  

});
});


});