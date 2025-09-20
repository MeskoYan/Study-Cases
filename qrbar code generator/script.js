document.addEventListener('DOMContentLoaded', () =>{
    const text = document.getElementById('user_text');
    console.log(text);
    let qrcode = new QRcode(document.getElementById("qrcode"),{
        text: "https://www.youtube.com/",
        width: 128,
        height: 128
    });
})