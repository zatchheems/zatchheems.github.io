$(document).ready(function(){
  document.getElementById("to-do").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let newElem = document.createElement("li");
      newElem.textContent = this.value;
      document.getElementById("to-do-list").appendChild(newElem);
      this.value = "";
    }
  });
});