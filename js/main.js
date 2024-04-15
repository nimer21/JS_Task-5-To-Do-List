// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    //console.log('list'+ev.target.nodeName);
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("LI");
  var inputValue = document.querySelector(".myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.querySelector(".myUL").appendChild(li);
  }
  document.querySelector(".myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
function validate() {
  if (document.querySelector(".boxx").checked) {
    alert("checked");
    someCheckbox.addEventListener("change", (e) => {
      if (e.target.checked === true) {
        console.log("Checkbox is checked - boolean value: ", e.target.checked);
        someCheckbox.classList.add("ul li.checked");
      }
      if (e.target.checked === false) {
        console.log(
          "Checkbox is not checked - boolean value: ",
          e.target.checked
        );
      }
    });
  } else {
    alert("You didn't check it! Let me check it for you.");
  }
}
