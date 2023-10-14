$(".menu > ul > li").click(function (e) {
  $(this).siblings().removeClass("active")
  $(this).toggleClass("active");
  $(this).find("ul").slideToggle();
  $(this).siblings().find("ul").slideUp();
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});

$('#file-upload').change(function() {
  var i = $(this).prev('label').clone();
  var file = $('#file-upload')[0].files[0].name;
  $(this).prev('label').text(file);
});
  