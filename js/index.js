console.log("This is my script");
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "gjjhhhkh",
    "email": "gjjhhhkh@jhjkkjh.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "jhjkkjh.com",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
};

submitBtn.addEventListener("click",async(e)=>{
    e.preventDefault()
console.log("clicked!")

let key="ema_live_nYzLPNIyDnVGl26jsD3egQzCGBfCuDcCUL6nngCg"
let email=document.getElementById("username").value

let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res = await fetch(url)
let result = await res.json()


let str = "";
for (let key of Object.keys(result)) {
    if(result[key] !=="" && result[key]!==" "){
    str += `<div>${key}: ${result[key]}</div>`;
}
}

console.log(str);

// Assuming you have an HTML element with the id "resultCont" in your HTML file.
let resultCont = document.getElementById("resultCont");
resultCont.innerHTML = str;})





