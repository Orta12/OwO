var data = document.getElementById("item").value;
var box = document.getElementById("box");
var liclass = document.querySelector(".data");

add = () => {
	var data = document.getElementById("item").value;
	var box = document.getElementById("box");

	if (data == "") {
		alert("input somthing");
	} else {
		var li = document.createElement("li");
		li.textContent = data;
		box.appendChild(li);
	}

	li.classList.add("data");
	document.getElementById("item").value = "";
};

remove = () => {
	var remove = document.querySelector(".data");
	remove.remove();
};

latest = () => {
	var sure = true;
	var box = document.getElementById("box");
	var list = document.querySelector(".data");
	var pos = box.firstElementChild;

	if (sure == true) {
		box.appendChild(list);
	} else {
		box.insertBefore(list, pos);
	}
};
