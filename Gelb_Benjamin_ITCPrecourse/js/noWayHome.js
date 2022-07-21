let navchilds = document.getElementsByClassName('nav-item')

      for(let i = 0; i < navchilds.length; i++) {
          if(navchilds[i].title===document.title) {
              navchilds[i].style.backgroundColor = "darkgreen"
              navchilds[i].style.color = "white"
          }
        }