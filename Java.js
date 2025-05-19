const botao = document.getElementById("vol");
  
    window.onscroll = function() {
      if (window.scrollY > 100) {
        botao.style.display = "block";
      } else {
        botao.style.display = "none";
      }
    };
  
    botao.onclick = function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
 