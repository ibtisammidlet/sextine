<!--########### scripts run when  document ready ########### -->
<script type='text/javascript'>
// <![CDATA[
document.addEventListener("DOMContentLoaded", function(event) { 
/** jQuery Sticky Footer **/
  var bodyhigh = $("body").height();
  var windowhigh = $(window).height();
  if(bodyhigh < windowhigh) {
      $(".footer-credits").css("bottom","0px");
	  $(".footer-credits").css("position","fixed");
  }; 
/** set video ifram height from it's width **/
var iframewidth = $(".post-body iframe[src$='.html']").width();
var iframehigh = iframewidth/1.686234817813765
$(".post-body iframe[src$='.html']").css('height',iframehigh)

});
// ]]>
</script>