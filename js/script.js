document.getElementById("notifyBtn").addEventListener("click", () => {
    const message = document.getElementById("messageInput").value.trim();

    if (!message) {
        alert("Enter A Message Before Clicking The Button");
        return;
    }
    if (!("Notification" in window)) {
        alert("This broswer does not support desktop notifications");
        return;
    }

    //Ask
    if(Notification.permission === "granted") {
        showNotification(message);   
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted"){
                showNotification(message);
            }
        });
    }
});

function showNotification(message) {
    new Notification("Assignment Alert", {
            body:"Don't Forget to submit the assignment!",
            icon: "./images/bell.png" 
    });
}