/***
 * 
 * var URL = window.URL || window.webkitURL;
var video = document.getElementsByTagName('video')[0];
function onChange() {
    var fileItem = document.getElementById('fileItem');
    var files = fileItem.files;
    var file = files[0];
    var url = URL.createObjectURL(file);
    console.log(file);
    console.log(url);
    video.src = url;
    video.load();
    video.onloadeddata = function() {
        video.play();
    }
}

 */