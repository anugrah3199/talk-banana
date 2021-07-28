const text = document.querySelector("textarea");
const translateBtn = document.querySelector("button");
const result = document.querySelector(".result");
const errordiv = document.querySelector(".error")
var url = "https://api.funtranslations.com/translate/minion.json"

function translate() {
    const newurl = url + "?" + "text=" + text.value;
    fetch(newurl).then(response => response.json())
        .then(data => {
            result.innerHTML = data.contents.translated;
            result.style.display = "block";
        })
        .catch(error => {
            errordiv.style.display = "block";
            setTimeout(() => { errordiv.style.display = "none" }, 2000)
        });
}
translateBtn.addEventListener("click", translate);