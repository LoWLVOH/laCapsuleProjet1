//compteur de message
document.getElementById("count").textContent = document.getElementsByTagName("p").length;

//event poubelle + suppression message
for (var i = 0; i < document.getElementsByTagName("i").length; i++) {
  document.getElementsByTagName("i")[i].addEventListener("click",
    function() {
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
      if (document.getElementsByTagName('p').length == 0) {
        document.getElementById('count').textContent = "Vous n'avez pas de message"
      };
    }
  )
};
//event add
document.getElementById("add").addEventListener("click",
  function() {
    //new case dans la liste
    var newDiv = document.createElement("div");
    newDiv.className = "row";
    document.getElementById("messageList").appendChild(newDiv);
    //new avatar dans la case
    var myAvatar = document.createElement("img");
    myAvatar.className = "avatar";
    myAvatar.src = "avatar-3.jpg";
    newDiv.appendChild(myAvatar);
    //new textcase dans la case
    var textDiv = document.createElement("div");
    textDiv.className = "text";
    newDiv.appendChild(textDiv);
    //new nom dans la textcase
    var myName = document.createElement("h6");
    myName.textContent = "Thomas Choquet";
    textDiv.appendChild(myName);
    //recup du texte tapé + texte dans la textcase
    var myMessage = document.createElement("p");
    myMessage.textContent = document.getElementById("newMessage").value;
    textDiv.appendChild(myMessage);
    //new poubelle dans la case
    var trash = document.createElement("i");
    trash.className = "fa fa-trash";
    newDiv.appendChild(trash);
    //compteur pour ajout de message
    document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    //efface le texte tapé apres envoi
    document.getElementById("newMessage").value = "";
    //event poubelle ajoutée + suppression
    trash.addEventListener("click",
      function() {
        this.parentNode.remove();
        document.getElementById("count").textContent = document.getElementsByTagName("p").length;
      });
  });
