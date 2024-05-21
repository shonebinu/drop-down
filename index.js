const dropDowns = document.querySelectorAll(".dropdown");

for (const d of dropDowns) {
	const button = d.querySelector("button");
	const ul = d.querySelector("ul");

	button.addEventListener("click", () => {
		ul.classList.toggle("visible");
	});
}
