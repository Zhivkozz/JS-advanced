function solve() {
   const sendBtn = document.getElementById("send");
   const messageContainer = document.getElementById("chat_input");
   sendBtn.addEventListener("click", sendMessage);
   function sendMessage () {
      let message = messageContainer.value;
       console.log(messageContainer);
       let newMessage = document.createElement("div");
       newMessage.classList.add("message", "my-message");
       newMessage.textContent  = message;
       document.getElementById("chat_messages").appendChild(newMessage)
messageContainer.value = ""; 
   }
   
}
//100/100

