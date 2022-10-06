
const read = document.querySelector(".read")
const notifpanel = document.querySelector(".notificationnum")
const unreadnotif = document.querySelectorAll(".newnotif")

read.addEventListener("click",function(){
    notifpanel.textContent = "0";
    unreadnotif.forEach(unread => {
        unread.style.display = "none"    
    });
    
})


