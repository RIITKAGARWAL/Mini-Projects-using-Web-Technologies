const button = document.getElementById("button");
const msgBody = document.getElementById("target");

const pickColor =  async ()=>{
    const eyeDropper = new EyeDropper();

    const { sRGBHex } = await eyeDropper.open();
    document.querySelector(".color").style.backgroundColor = sRGBHex;
    msgBody.innerText = `Color: ${sRGBHex}`;
    console.log(sRGBHex);
}
button.addEventListener("click", pickColor);



//-----------------file upload-------------------
document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('image-preview');
            img.src = e.target.result;
           document.getElementById("demo-image").style.visibility="hidden";
        }
        reader.readAsDataURL(file);
    }
});

