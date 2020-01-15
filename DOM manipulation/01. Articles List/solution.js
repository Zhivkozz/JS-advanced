function createArticle() {
	let article = document.createElement("article")
	let h3 = document.createElement("h3");
	let p = document.createElement("p");
	let imput = document.getElementById("createTitle");
	let textarea = document.getElementById("createContent");
	let articles =   document.getElementById("articles");

	h3.innerHTML = imput.value
	p.innerHTML = textarea.value
	article.appendChild(h3);
	article.appendChild(p);
	
    articles.appendChild(article)


}