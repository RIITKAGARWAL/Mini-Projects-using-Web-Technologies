const textArea = document.querySelector(".message-input");
let promptu = undefined;
const sendButton = document.getElementById("send");
const collapseButton = document.getElementById("collapse-button");
const userMessage = document.querySelector(".user-message .message-text");
const mic = document.getElementById("mic");
const micImage = document.getElementById("mic-img");
const chatBody = document.querySelector(".chat-body");
const chatFooter = document.querySelector(".chat-footer");
let imageURL = undefined;
let isCollapsed = false;
let isEmoji = true;

sendButton.addEventListener("click", () => {    // clicking send button will do the query
    promptu = textArea.value;
    user.message = promptu;
    textArea.value = "";
    userMessageCreation();  //function call
    setTimeout(() => {
        botMessageCreation();
    }, 900);

})

textArea.addEventListener("keydown", (event) => {  //hitting enter key will do the query
    if (event.key == "Enter") {
        event.preventDefault();
        promptu = textArea.value;
        user.message = promptu;

        textArea.value = "";
        userMessageCreation();  //user function call
        setTimeout(() => {
            botMessageCreation();   //bot function call
        }, 900);


    }
})

//----target: chat-body ; creation : user-message
function userMessageCreation() {
    let userMessageHTML = `<div class="message user-message">
<div class="message-text">${promptu}</div>
</div>`;
    document.querySelector(".chat-body").insertAdjacentHTML("beforeend", userMessageHTML);
    document.querySelector(".chat-body").scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    // speak(`${promptu}`);


}
//----target: chat-body ; creation : bot-message
function botMessageCreation() {
    botMessage = "Here is your answer";

    let botMessageHTML = ` ${user.file?.data
        ? `<div class="image-container" style="position:relative; left: 60%;margin-top:5px;display:inline-block"><img src="${imageURL}" width="100px" style="margin:1px;"></div>` : ""}
    <div class="message bot-message">
<img src="./svg/chatbot.svg" alt="chatbot-logo">

<div class="message-text">
    ${botMessage}
    


    <img class="speaker" src="./svg/campaign_28dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg" 
    title="speaker on" alt="">
</div>
</div>`;

    document.querySelector(".chat-body").insertAdjacentHTML("beforeend", botMessageHTML);
    generateResponse();

    // speak(`${botMessage}`);

}

const api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyANG8TycK76aeNPNHUZhCitemVC2BEdKPY";

let user = {
    message: null,
    file: {
        mime_type: null,
        data: null
    }
}
async function generateResponse() {
    let requestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({


            "contents": [{
                "parts": [{ "text": user.message }, (user.file.data ? [{ "inline_data": user.file }] : [])]



            }]
        }

        )
    }
    try {
        let response = await fetch(api_url, requestOption);
        let data = await response.json();
        // console.log(data.candidates[0].content.parts[0].text);
        //     let a = document.querySelectorAll(".bot-message");
        // a[a.length-1];


        document.querySelectorAll(".bot-message").forEach(
            item => {
                let messageText = item.querySelector(".message-text");
                if (messageText.innerText == "Here is your answer") {
                    messageText.innerHTML += '<br/>' + `${data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1")}`;
                    // speak(`${data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1")}`);
                    speakerToggle();
                }
            }
        )


    }
    catch (error) {
        console.log(error);
    }
    finally {
        document.querySelector(".chat-body").scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
        user.file.data = null;
        user.file.mime_type = null;

    }

}



let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
let listen = new speechRecognition;
listen.onresult = (event) => {
    console.log(event);
    textArea.value = event.results[0][0].transcript;

}
listen.onend = () => {
    micImage.src = "./svg/mic_28dp_WHITE_FILL0_wght400_GRAD0_opsz24.svg";
    mic.style.backgroundColor = "#5350c4";


    console.log("recording Stopped.");
}
mic.addEventListener("click", () => {
    listen.start();
    micImage.src = "./svg/mic3.gif";
    micImage.style.height = "24px";
    mic.style.backgroundColor = "black";
    console.log("Recording...");
});

//---------------------------speech Utterance-------------------------
function speak(data) {
    let text_Speak = new SpeechSynthesisUtterance(data);
    text_Speak.volume = 0.5;
    text_Speak.pitch = 0.1;
    text_Speak.rate = 0.75;

    window.speechSynthesis.speak(text_Speak);

}

speak("Hi There...How can I help You");


/////////////////////////////////////////////////////////////////////////////////
function speakerToggle() {
    document.querySelectorAll(".speaker").forEach(item => {
        if (!item.hasListener) {
            item.addEventListener("click", () => {
                item.classList.toggle("invisible");
                speak(item.parentNode.innerText);
                if (item.classList.length == 1) {
                    window.speechSynthesis.cancel();
                }
            })
            item.hasListener = true;
        }
    })
}

//---------------------------wallpaper-------------------------
const wallpaperButton = document.querySelector("#wallpaper").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            chatBody.style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
})
//---------------------------end of wallpaper-------------------------

//------------------------image input-------------------------------------

document.querySelector(".image-button").addEventListener("click", () => {
    document.querySelector("#image-input").click(); //clicking button will click input:file too
})

document.querySelector("#image-input").addEventListener("change", () => {

    const file = document.querySelector("#image-input").files[0];
    if (!file) { return; }
    let reader = new FileReader();
    reader.onload = (e) => {
        console.log(e);
        imageURL = e.target.result;
        let base64Str = e.target.result.split(",")[1];
        user.file = {
            mime_type: file.type,
            data: base64Str
        }
    }
    reader.readAsDataURL(file);
})
//------------------------end of image input-------------------------------------
//------------------------begin of collapse-------------------------------------
collapseButton.addEventListener("click", () => {
    if (isCollapsed) {
        chatBody.style.display = "block";
        chatFooter.style.display = "block";
        document.querySelector("#wallpaper-parent").style.display = "inline";
        document.querySelector(".header-info").style.display = "flex";
        document.querySelector(".chatbot-popup").style.width = "420px";
        isCollapsed = false;
    }
    else {
        chatBody.style.display = "none";
        chatFooter.style.display = "none";
        document.querySelector("#wallpaper-parent").style.display = "none";
        document.querySelector(".header-info").style.display = "none";
        document.querySelector(".chatbot-popup").style.width = "60px";
        isCollapsed = true;
    }
})
//------------------------end of collapse-------------------------------------
//------------------------begin of emoji-------------------------------------

const picker = document.querySelector("emoji-picker");
const display = document.querySelector(".emoji-display");

picker.addEventListener("emoji-click", event => {
    textArea.value += event.detail.unicode;
});


// button event of emoji
document.querySelector("#emoji-button").addEventListener("click", () => {
if(isEmoji){
document.querySelector("#emoji-div").style.display="block";
isEmoji = false;
}
else{
    document.querySelector("#emoji-div").style.display="none";
    isEmoji = true;
}
});

//------------------end of emoji
