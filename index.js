function muestra_oculta(id){
    if (document.getElementById){ //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'block') ? 'none' : 'block'; //damos un atributo display:none que oculta el div
    }
    }
    window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    muestra_oculta('.contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    }

    function redireccionarPagina() {
        window.open("https://ixhua.mx/#howworks")
      }

      function goToInf(){
        window.scrollTo(0, 0)
      }
    
      function goToDocs(){
        var elmnt = document.getElementById("docs");
        elmnt.scrollIntoView();
      }
    
      function goToSol(){
        var elmnt = document.getElementById("sol");
        elmnt.scrollIntoView();
      }

      function goToPay(){
        var elmnt = document.getElementById("pay");
        elmnt.scrollIntoView();
      }

      function goToRej(){
        var elmnt = document.getElementById("rej");
        elmnt.scrollIntoView();
      }

      function goToWrong(){
        var elmnt = document.getElementById("wrong");
        elmnt.scrollIntoView();
      }

      function goToMary(){
        var elmnt = document.getElementById("mary");
        elmnt.scrollIntoView();
      }


