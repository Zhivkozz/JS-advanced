function solve() {
  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let count = 0;
  let i = 0
  let curentSection = document.querySelectorAll("section")
  Array.from(document.querySelectorAll(".answer-text")).map(element => element.addEventListener("click", function (e) {
    if (correctAnswers.includes(e.target.innerHTML)) { count++ }

    curentSection[i].style.display = "none"
    if (curentSection[i + 1] !== undefined) {
      curentSection[i + 1].style.display = "block"
      i++
    }
    else {
      document.getElementById("results").style.display = "block"
      if (count === 3) {
        document.getElementsByClassName("results-inner")[0].children[0].innerHTML = "You are recognized as top JavaScript fan!"
      } else {
        document.getElementsByClassName("results-inner")[0].children[0].innerHTML = `You have ${count} right answers`
      }
    }
  }))
}
//100/100