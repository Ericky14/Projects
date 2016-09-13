$(document).ready(function() {
    var defaultPos = parseInt($('.NavItem').css("top"));
    var newPos = defaultPos + 6;

   $('.NavItem').hover(function() {
       $(this).stop(true);
       var dist = parseInt($(this).css("top")) - newPos;
       $(this).animate({top: "-=" + dist + "px"}, 300);
   }, function() {
       $(this).stop(true);
       var dist = parseInt($(this).css("top")) - defaultPos;
       $(this).animate({top: "-=" + dist + "px"}, 300);
   });
});