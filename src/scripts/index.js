// Any code you will write for your website (in the future!) should go here<script>
      var nav = document.querySelector("nav");

      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
          nav.classList.replace("bg-transparent", "bg-dark");
        } else {
          nav.classList.add("bg-transparent");
        }
      });

     
      //* FAVICONS  *//
      src="https://kit.fontawesome.com/9f49c39477.js"
      crossorigin="anonymous";