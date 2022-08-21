const main_editero = document.getElementById("main_editer");
const run = document.getElementById("run");
const previwe = document.getElementById("previwe");


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

}
editero_heart();

function div1(){
    document.getElementById("previwe").style.display = "block";
    document.getElementById("main_editer").style.display = "none"
}

function div2(){
    document.getElementById("main_editer").style.display = "block";
    document.getElementById("previwe").style.display = "none";
}

