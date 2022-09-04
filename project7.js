// const button = document.querySelector(".btn")
// const sidebar = document.querySelector(".sidebar")
// button.addEventListener("click", function(){
// 	if(sidebar.classList.contains("is-hidden")){
// 		sidebar.classList.remove("is-hidden")
// 	}else{
// 		sidebar.classList.add("is-hidden")
// 	}
// })

// code improve and refactor

const button = document.querySelector(".btn")
const sidebar = document.querySelector(".sidebar")
button.addEventListener("click", function(){
	sidebar.classList.toggle("is-hidden")
})
