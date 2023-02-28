var idmiror = $("#idonserver").text();
var LQviddownlink    = "http://server.sextine.com/files/" + idmiror + "/LQ.mp4"
function injectposternow(){
/** injecting download links **/
$("#LQdwnldlinkid").attr("href", LQviddownlink);
}
injectposternow()
