let progress = "getElementById"('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYoffset / totalHeight) * 100;
progress.style.height = progressHeight + "%";
}