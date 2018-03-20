function getDomainName(url){
    var hasilUrl = []
    var hasilAkhir = ''

    for(var i = 0; i < url.length; i+=2){
        hasilUrl.push(url[i] + url[i+1])
    }

    for(var j = 0; j < hasilUrl.length-2; j++){
        hasilAkhir += hasilUrl[j]
    }

    return hasilAkhir
}
console.log(getDomainName('www.google.com')); //google
console.log(getDomainName('facebook.com')); //facebook
console.log(getDomainName('twitter.com')); //twitter
console.log(getDomainName('www.hacktiv8.com')); //hacktiv8


/*

www. gooogle .com



*/