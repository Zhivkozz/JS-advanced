function createArticle() {
	let article = document.createElement("article")
	let h3 = document.createElement("h3");
	let p = document.createElement("p");
	let imput = document.getElementById("createTitle");
	let textarea = document.getElementById("createContent");
	let articles =   document.getElementById("articles");
	h3.innerHTML = imput.value
	p.innerHTML = textarea.value
	articles.appendChild(article)
	article.appendChild(h3);
	article.appendChild(p);
	document.getElementById("createTitle").value = '';
	document.getElementById("createContent").value = '';
	
	
}
document.addEventListener("DOMContentLoaded", x => {
document.getElementById("createArticleBtn").addEventListener("click", createArticle)
});