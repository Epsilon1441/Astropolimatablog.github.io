function toggleBackground() {
    const menu = document.getElementById('navbarNavDropdown');
    const isCollapsed = menu.classList.contains('show');

    if (isCollapsed) {
      menu.style.backgroundColor = ""; // Elimina el color cuando se cierra
    } else {
      menu.style.backgroundColor = "lightgray"; // Agrega color cuando se despliega
    }
  }