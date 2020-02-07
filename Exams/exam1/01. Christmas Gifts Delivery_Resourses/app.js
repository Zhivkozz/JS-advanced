function solution() {
  let elBtn = document.getElementsByTagName("button")[0];
  let elGift = document.getElementsByTagName("input")[0];
  let listOfG = document.getElementsByClassName("card")[1].children[1];
  let sentG = document.getElementsByClassName("card")[2].children[1];
  let discardedG = document.getElementsByClassName("card")[3].children[1];
  elBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let gift = elGift.value;
    elGift.value = "";
    let li = createGif(gift, true);
    if (listOfG.childElementCount === 0) {
      listOfG.appendChild(li);
    } else {
      for (let i = 0; i < listOfG.childElementCount; i++) {
        const currentGift = listOfG.getElementsByTagName("li")[i];

        if (li.innerHTML.localeCompare(currentGift.innerHTML) === -1) {
          listOfG.insertBefore(li, currentGift);
          break;
        }
      }
    }
  });

  function createGif(gift, hasBtn) {
    let li = document.createElement("li");
    li.innerHTML = gift;
    li.classList.add("gift");
    if (hasBtn) {
      let discardBtn = document.createElement("button");
      discardBtn.id = "discardButton";
      discardBtn.innerHTML = "Discard";
      discardBtn.addEventListener("click", function(e) {
        e.preventDefault();
        this.parentNode.parentNode.removeChild(this.parentNode);
        let discGift = createGif(gift, false);
        discardedG.appendChild(discGift);
      });
      //
      let sendBtn = document.createElement("button");
      sendBtn.id = "sendButton";
      sendBtn.innerHTML = "Send";
      sendBtn.addEventListener("click", function(e) {
        e.preventDefault();
        this.parentNode.parentNode.removeChild(this.parentNode);
        let SengGift = createGif(gift, false);
        sentG.appendChild(SengGift);
      });
      //
      li.appendChild(sendBtn);
      li.appendChild(discardBtn);
    }

    return li;
  }
}
//100/100
