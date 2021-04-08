"set strict"

var c = $("#count");
    console.log(c);

// const btn = document.getElementById("btnInc");
// btn.onclick = () => {
//     var c = $("#count");
//     c.value = ("4");
//     console.log(x.innerHTML);
//     fetch("/").then((response) => {
//         const j = response.json();
//         console.log(j);
//     });
// }

$("#btnInc").click(function () {
    $("#count").load("/inc");
});