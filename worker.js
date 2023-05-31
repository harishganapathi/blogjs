
console.log("external js called", event);
addEventListener('fetch', event => {
    var url = new URL(event.request.url);

    if (url.pathname.startsWith('/blog') || url.pathname.startsWith('/_elderjs')) {
        handleBlog(event, url);
    } else {
        event.respondWith(fetch(event.request));
    }
})

async function handleBlog(event, url) {
    console.log("event", url);
    // var originUrl = url.toString().replace(
    //     "https://wizmakers.com/_elderjs",
    //     'https://dailywriter.superblog.cloud/_elderjs');

    // originUrl =
    //     originUrl.toString().replace(
    //         "https://wizmakers.com/blog",
    //         "https://dailywriter.superblog.cloud");

    event.respondWith(fetch(originUrl));
}