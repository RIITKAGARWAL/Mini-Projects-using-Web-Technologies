const key = "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";
let myQuery = document.getElementById("input");
const img = document.getElementById("img");
const resetButton = document.getElementById("reset");
const download = document.getElementById("download");
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${key}`
		
			},
			method: "POST",
			body: JSON.stringify({"inputs": myQuery.value}),
		}
	);
	const result = await response.blob();
	return result;
}


myQuery.addEventListener("keydown",(e)=>{
	if (e.key == "Enter"){
		generate();
	}
	
})

async function generate() {
    
img.src = `./Gears.gif`;
query().then((response) => {

    const objectURL = URL.createObjectURL(response);

	// Use image
    img.src= objectURL;
      download.setAttribute("href",objectURL);
});

}

const submit = document.getElementById("sendButton");

submit.addEventListener("click", ()=>{
    generate();
});

resetButton.addEventListener("click",()=>{

    img.src="./svg/image_28dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg";
	download.setAttribute("href","./svg/image_28dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg");


})
download.addEventListener("click",()=>{
  
})


