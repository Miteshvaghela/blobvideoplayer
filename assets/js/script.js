/***
 * Author : Mitesh vaghela - vaghela_mieshk@yahoo.com
 * Description : Upload a video and convert it to blob format and play it in video using javascript.
 */



let URL = window.location.URL || window.webkitURL;  

const videoUpload = () => {    
    let video = document.getElementById('video');
    let fileItem = document.getElementById('file');
    let files = fileItem.files;
    let file = files[0];
    let url = URL.createObjectURL(file);
    video.src = url;
}


const submitForm = (e) => {
    e.preventDefault();
    let video = document.getElementById('video'); 
    video.play();  
    return false;

}




