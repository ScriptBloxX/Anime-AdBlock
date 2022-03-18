var animeSite = ['www.anime-master','www.anime-sugoi','anime-fast.online','neko-miku','anime-fast','animekimi','anime-kimuchi','anime-titan','anime-168','animeyoko','anime-master'];

function removeADS(){
    var getAd = document.querySelectorAll('a');
    // remove iframe ads
    var iframe = document.querySelectorAll('iframe');
    iframe.forEach(iframeClass => {
        var removeIframe = true
        animeSite.forEach(site => {
            if (iframeClass.src.includes(site)) {
                removeIframe = false;
            }
        })
        if (removeIframe === true) {
            iframeClass.remove();
        }
    })

    // remove video ads
    var video = document.querySelectorAll('video');
    video.forEach(videoClass => {
        if (!videoClass.src.includes('blob:')) {
            videoClass.remove();
        }
    })

    // remove banner ads
    getAd.forEach(ad => {
        var removeYes = true
        animeSite.forEach(site => {
            if (ad.href.includes(site)) {
                removeYes = false;
            }
        })
        if (removeYes === true) {
            ad.remove();
        }
    })
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        removeADS();
    }
};

removeADS();
