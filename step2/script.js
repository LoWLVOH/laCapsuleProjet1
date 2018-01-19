for (var i = 0; i < document.getElementsByClassName('row').length; i++) {
  document.getElementsByClassName('fa fa-trash')[i].addEventListener("click",
    function() {
      this.parentNode.remove();
      document.getElementById('row-header').textContent = "Nombre de message : " + document.getElementsByClassName('row').length;
      if (document.getElementsByClassName('row').length == 0) {
        document.getElementById('row-header').textContent = "Vous n'avez pas de message"
      };
    }
  );
}
document.getElementById('row-header').textContent = "Nombre de message : " + document.getElementsByClassName('row').length;
