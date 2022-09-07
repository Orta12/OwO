const main_editero = document.getElementById("main_editer");
const run = document.getElementById("run");
const previwe = document.getElementById("previwe");
const save = document.getElementById("download");
const li = document.getElementById("list");
const theam = document.getElementById("theam");

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
        main_editero.innerText = localStorage.data;
    });

    change = () => {
        main_editero.style.background="#282C35";
        main_editero.style.color="#719ea0";
        document.getElementById("bt-1").style.color="#3B8EBD";
        document.getElementById("bt-2").style.color="#3B8EBD";
        document.getElementById("theam").style.color="green";
        document.getElementById("theam1").style.color="green";
        document.getElementById("link").style.color="rgb(95 158 160)";
        document.getElementById("home-").src="images/home-.png";
        document.getElementById("run").src="images/Run-.png";
        document.getElementById("download").src="images/save-.png";
    }
    change1 = () => {
        main_editero.style.background ="rgb(248 248 255)";
        main_editero.style.color="gray";
        document.getElementById("bt-1").style.color="rgb(114, 114, 114)";
        document.getElementById("bt-2").style.color="rgb(114, 114, 114)";
        document.getElementById("theam").style.color="rgb(114, 114, 114)";
        document.getElementById("theam1").style.color="rgb(114, 114, 114)";
        document.getElementById("link").style.color="rgb(114, 114, 114)";
        document.getElementById("home-").src="images/home.png";
        document.getElementById("run").src="images/Run.png";
        document.getElementById("download").src="images/save.png";
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




