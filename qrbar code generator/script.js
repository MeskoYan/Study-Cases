document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById("input");
    const display = document.getElementById("display");
    const button = document.getElementById("generate_code");
    display.style.position = "absolute";
    display.style.visibility = "hidden";
    input.value = "";

    button.addEventListener("click", () =>{
        let input = document.getElementById("input");
        display.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        display.style.position = "relative";
        display.style.visibility = "visible"
    });
})