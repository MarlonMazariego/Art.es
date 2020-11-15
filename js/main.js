 window.fbAsyncInit = function () {
                FB.init({
                    xfbml: true,
                    version: 'v9.0'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
function iniciarMap(){
    var coord = {lat: 13.6739956 ,lng: -89.2788313};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}       
            
            