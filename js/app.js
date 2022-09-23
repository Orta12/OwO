const main_editero = document.getElementById("main_editer");
const run = document.getElementById("run");
const previwe = document.getElementById("previwe");
const save = document.getElementById("save");
const theam = document.getElementById("theam");
const theam1 = document.getElementById("theam1");
const suggest = document.getElementById("suggest");

var li0 = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var li6 = document.createElement("li");

li0.classList.add = ("lis");
li1.classList.add = ("lis");
li2.classList.add = ("lis");
li3.classList.add = ("lis");
li4.classList.add = ("lis");
li5.classList.add = ("lis");
li6.classList.add = ("lis");

function editero_heart() {

	run.addEventListener("click", function () {
		var html = main_editero.textContent;
		previwe.src = "data:text/html;charset=utf-8," + encodeURI(html);
	});

	main_editero.addEventListener("keyup", function () {
		var html = main_editero.textContent;
		previwe.src = "data:text/html;charset=utf-8," + encodeURI(html);
	});

	main_editero.addEventListener("paste", function (e) {
		e.preventDefault();
		var text = e.clipboardData.getData("text/plain");
		document.execCommand("insertText", false, text);
	});

	save.addEventListener("click", function () {
		alert("saving data.....")
		var i = main_editero.innerText;
		localStorage.setItem("data", i);
		localStorage.getItem("data");
		var j = main_editero.innerText = localStorage.data;


	});

	document.addEventListener('keydown', (event) => {
		var key = event.key;
		var keycode = event.code;

		if (key == null) {
			suggest.textContent = "code snippet";
		} else if (key == "a") {

			li0.textContent = "<a> </a>";
			li1.textContent = "<abbr> </abbr>"
			li2.textContent = "<address> </address>"
			li3.textContent = "<article> </article>"
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);

		} else if (key == "b") {

			li0.textContent = "<button> </button>"
			li1.textContent = "<base>";
			li2.textContent = "<bdi> </bdi>";
			li3.textContent = "<body> </body>";
			li4.textContent = "<br>";
			li5.textContent = "<blockquote > </blockquote >";
			li6.textContent = "<b> </b>";

			suggest.appendChild(li4);
			suggest.appendChild(li1);
			suggest.appendChild(li6);
			suggest.appendChild(li2);
			suggest.appendChild(li3);
			suggest.appendChild(li0);
			suggest.appendChild(li5);

		} else if (key == "d") {


			li0.textContent = "<data> </data>";
			li1.textContent = "<datalist> </datalist>"
			li2.textContent = "<del> </del>"
			li3.textContent = "<div> </div>"
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li3);
			suggest.appendChild(li2);
			suggest.appendChild(li0);
			suggest.appendChild(li1);

		} else if (key == "e") {

			li0.textContent = "<embed>";
			li1.textContent = "<em> </em>";
			li2.textContent = "";
			li3.textContent = "";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li0);
			suggest.appendChild(li1);

		} else if (key == "f") {

			li0.textContent = "<form> </form>"
			li1.textContent = "<fieldset> </fieldset>";
			li2.textContent = "<footer> </footer>";
			li3.textContent = "<figcaption> </figcaption>";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);

		} else if (key == "h") {

			li0.textContent = "<h1> </h1>"
			li1.textContent = "<h2> </h2>";
			li2.textContent = "<h3> </h3>";
			li3.textContent = "<h4> </h4>";
			li4.textContent = "<h5> </h5>";
			li5.textContent = "<h6> </h6>";
			li6.textContent = "<header> </header>";

			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);
			suggest.appendChild(li4);
			suggest.appendChild(li5);
			suggest.appendChild(li6);

		} else if (key == "i") {

			li0.textContent = "<input>"
			li1.textContent = "<img>";
			li2.textContent = "<i> </i>";
			li3.textContent = "<iframe> </iframe>";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""
			suggest.appendChild(li1);
			suggest.appendChild(li0);
			suggest.appendChild(li2);
			suggest.appendChild(li3);

		} else if (key == "k") {

			li0.textContent = "<kbd> </kbd>";
			suggest.appendChild(li0);

		} else if (key == "l") {

			li0.textContent = "<label> </label>"
			li2.textContent = "<li> </li>";
			li3.textContent = "<link> </link>";
			li4.textContent = "<legend> </legend>";
			li5.textContent = ""
			li6.textContent = ""
			li1.textContent = ""

			suggest.appendChild(li2);
			suggest.appendChild(li3);
			suggest.appendChild(li0);
			suggest.appendChild(li4);

		} else if (key == "m") {

			li0.textContent = "<main> </main>"
			li1.textContent = "<map> </map>";
			li2.textContent = "<meta>";
			li3.textContent = "<mark> </mark>";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li2);
			suggest.appendChild(li1);
			suggest.appendChild(li0);
			suggest.appendChild(li3);

		} else if (key == "n") {

			li0.textContent = "<nav> </nav>"
			li1.textContent = "<noscript> </noscript>";
			li2.textContent = "";
			li3.textContent = "";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""

			suggest.appendChild(li0);
			suggest.appendChild(li1);

		} else if (key == "o") {

			li0.textContent = "<object> </object>"
			li1.textContent = "<ol> </ol>";
			li2.textContent = "<option> </option>";
			li3.textContent = "<output> </output>";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""
			suggest.appendChild(li1);
			suggest.appendChild(li0);
			suggest.appendChild(li2);
			suggest.appendChild(li3);

		} else if (key == "p") {

			li0.textContent = "<p> </p>"
			li1.textContent = "<pre> </pre>";
			li2.textContent = "<progress> </progress>";
			li3.textContent = "<picture> </picture>";
			li4.textContent = ""
			li5.textContent = ""
			li6.textContent = ""
			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);

		} else if (key == "s") {

			li0.textContent = "<samp> </samp>"
			li1.textContent = "<script> </script>";
			li2.textContent = "<section> </section>";
			li3.textContent = "<span> </sapn>";
			li4.textContent = "<source> </source>";
			li5.textContent = "<style> </style>";
			li6.textContent = "<svg> </svg>";

			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);
			suggest.appendChild(li4);
			suggest.appendChild(li5);
			suggest.appendChild(li6);

		} else if (key == "t") {

			li0.textContent = "<table> </table>"
			li1.textContent = "<tr> </tr>";
			li2.textContent = "<th> </th>";
			li3.textContent = "<td> </td>";
			li4.textContent = "<template> </template>";
			li5.textContent = "<textarea> </textarea>";
			li6.textContent = "<title> </title>";

			suggest.appendChild(li0);
			suggest.appendChild(li1);
			suggest.appendChild(li2);
			suggest.appendChild(li3);
			suggest.appendChild(li4);
			suggest.appendChild(li5);
			suggest.appendChild(li6);

		}
	});





	change = () => {
		main_editero.style.background = "#282C35";
		main_editero.style.color = "#719ea0";
		document.getElementById("bt-1").style.color = "#3B8EBD";
		document.getElementById("bt-2").style.color = "#3B8EBD";
		document.getElementById("theam").style.color = "green";
		document.getElementById("theam1").style.color = "green";
		document.getElementById("link").style.color = "rgb(95 158 160)";
		document.getElementById("home-").src = "images/home-.png";
		document.getElementById("run").src = "images/Run-.png";
		document.getElementById("download").src = "images/save-.png";
	}

	change1 = () => {
		main_editero.style.background = "rgb(248 248 255)";
		main_editero.style.color = "gray";
		document.getElementById("bt-1").style.color = "rgb(114, 114, 114)";
		document.getElementById("bt-2").style.color = "rgb(114, 114, 114)";
		document.getElementById("theam").style.color = "rgb(114, 114, 114)";
		document.getElementById("theam1").style.color = "rgb(114, 114, 114)";
		document.getElementById("link").style.color = "rgb(114, 114, 114)";
		document.getElementById("home-").src = "images/home.png";
		document.getElementById("run").src = "images/Run.png";
		document.getElementById("download").src = "images/save.png";
	}



}
editero_heart();

function div1() {
	document.getElementById("previwe").style.display = "block";
	document.getElementById("main_editer").style.display = "none"
}

function div2() {
	document.getElementById("main_editer").style.display = "block";
	document.getElementById("previwe").style.display = "none";
}
