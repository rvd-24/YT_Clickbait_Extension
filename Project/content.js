console.log("Content.JS is running")
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
}

async function geturls() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    var a=document.getElementsByTagName("a")
    console.log(a)
    for(var i=0;i<a.length;i++){
        console.log(a[i].getAttribute("href"))
    }
    var video_links=a.href
}

setInterval((geturls),5000) 

