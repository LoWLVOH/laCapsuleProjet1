document.getElementById("count").textContent = document.getElementsByTagName("p").length;

for(var i=0; i<document.getElementsByTagName("i").length; i++) {
  document.getElementsByTagName("i")[i].addEventListener("click",
    function() {
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    }
  )
}

document.getElementById("btn-add").addEventListener("click",
  function() {

    var divRaw = document.createElement("div");
    divRaw.className = "row";
    document.getElementById("message-list").appendChild(divRaw);

    var img = document.createElement("img");
    img.className = "avatar";
    img.src = "avatar-1.jpg";
    divRaw.appendChild(img);

    var divText = document.createElement("div");
    divRaw.appendChild(divText);

    var h6 = document.createElement("h6");
    h6.textContent = "Noel Paganelli";
    divText.appendChild(h6);

    var p = document.createElement("p");
    p.textContent = document.getElementById("add-message").value;
    divText.appendChild(p);

    var i = document.createElement("i");
    i.className = "fa fa-trash";

    divRaw.appendChild(i);
    document.getElementById("count").textContent = document.getElementsByTagName("p").length;

    document.getElementById("add-message").value = "";
    
    i.addEventListener("click",
      function() {
        this.parentNode.remove();
        document.getElementById("count").textContent = document.getElementsByTagName("p").length;
      }
    )

  }
)
