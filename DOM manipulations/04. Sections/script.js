function create(words) {
  // You will receive an array of strings.
  //  For each string, create a div with a paragraph
  //  with the string in it.
  //   Each paragraph is initially hidden
  //   (display:none). Add a click event listener to each div
  //    that displays the hidden paragraph.
  //    Finally, you should append all divs to the element
  //     with an id "content".
  const content = document.getElementById("content");
  console.log();
  for (let el of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = el;
    p.style.display = "none";
     div.appendChild (p)
content.appendChild(div)
    div.addEventListener("click", function (e) {
      e.preventDefault(); 
   p.style.display = "block"
   })
  }
}
//100/100