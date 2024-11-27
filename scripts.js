
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.querySelector("video");
        video.addEventListener("canplay", () => {
            video.classList.add("loaded");
        });
    });

