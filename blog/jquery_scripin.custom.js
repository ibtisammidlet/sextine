var windowwidth = $(window).width(); //* knowing the window size
var htmlscale = windowwidth / 765 ;
var htmlstyle = '<style>html {width: 765px  !important; transform-origin: 0px 0px 0px !important; transform: translate(0px, 0px) scale(' + htmlscale + ');} </style>';

if(windowwidth > 0 && windowwidth <= 765) {$('head').append(htmlstyle);};
