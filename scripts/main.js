let dictionary = [];
let addText = document.getElementById("add-text-field");
let addButton = document.getElementById("add-button");
let searchText = document.getElementById("search-text-field");
let searchButton = document.getElementById("search-button");

addButton.onclick = function () {
	document.getElementById("found-message").textContent = "";
	document.getElementById("alert-insert-word-1").textContent = "";
	if (addText.value !== "") {
		dictionary.push(addText.value);
	} else {
		document.getElementById("alert-insert-word-1").textContent = "Insert a word, please!";
	}
	addText.value = "";
}

searchButton.onclick = function () {
	document.getElementById("found-message").textContent = "";
	document.getElementById("alert-insert-word-2").textContent = "";
	if (dictionary.length === 0) {
		if (searchText.value === "") {
			document.getElementById("alert-insert-word-2").textContent = "Insert a word, please!";
		} else {
			document.getElementById("found-message").textContent = "Sorry, we haven't found \"" +
			searchText.value + "\" in our Dictionary! :(";
		}
	}
	if (searchText.value !== "") {
		let i = 0;
		while (i < dictionary.length) {
			if (dictionary[i] === searchText.value) {
				document.getElementById("found-message").textContent = "Congratulations! We have found \"" +
				searchText.value + "\" in our Dictionary! :)";
				break;
			}
			++i;
		}
		if (i === dictionary.length) {
			document.getElementById("found-message").textContent = "Sorry, we haven't found \"" +
			searchText.value + "\" in our Dictionary! :(";
		}
	} else {
		document.getElementById("alert-insert-word-2").textContent = "Insert a word, please!";
	}
	searchText.value = "";
}