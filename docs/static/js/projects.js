var onslide = 1;
show_slide();

function pause_videos() {
    var video_tags = document.getElementsByTagName("video");
    for (let v of video_tags) {
        v.pause();
    }
}

function show_slide() {
    let slides = document.getElementsByClassName("slide");
    if (!slides) return;
    if (slides.length == 1) {
        $(".btn").attr("disabled", "disabled");
    } else {
        $(".btn").removeAttr("disabled");
    }
    if (onslide > slides.length) {onslide = 1}
    if (onslide < 1) {onslide = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[onslide-1].style.display = "block";
}

$(".previous").click(function() {
    if (this.getAttribute("disabled")) return;
    onslide -= 1;
    show_slide();
    pause_videos();
});

$(".next").click(function() {
    if (this.getAttribute("disabled")) return;
    onslide += 1;
    show_slide();
    pause_videos();
});