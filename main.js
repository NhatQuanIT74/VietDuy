
const messages = [
    "iu Ngân nhiều ... ❤️"
]

function genNotification(){

    var audio = document.createElement('div');
    audio.innerHTML = `
        <audio src="tran-bo-nho.mp3" type="audio/mp3" controls autoplay="autoplay" loop="loop" hidden></audio>
    `;
    document.body.appendChild(audio);

    const notificationCount = 100;

    for(let i = 0; i< notificationCount; i++){
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'notification';

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            notification.innerHTML = `
                <div class="notification-header">
                    <button class="minimize-btn" onclick="minimizeNotification(this)"></button>
                    <span>Tràn ngập bộ nhớ Ngân ❤️</span>
                </div>
                <p>${randomMessage}</p>
            `;

            const x = Math.random() * (window.innerWidth - 240);
            const y = Math.random() * (window.innerHeight - 160);
            notification.style.left =  `${x}px`;
            notification.style.top =  `${y}px`;
            document.body.appendChild(notification);
        }, i * 200 )
        
    }
}

function minimizeNotification(button){
    const notification = button.closest('.notification');
    notification.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function(){
    var encodedText = 'Design by Nhật Quân';
    var footer = document.createElement("a");
    footer.innerHTML = encodedText;
    document.body.appendChild(footer)
});