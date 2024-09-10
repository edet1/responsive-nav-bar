const menu = document.getElementById("menu");
 const toggleButton = document.querySelector(".menu-toggle");
 const menuItems = document.querySelectorAll('#menu a');
 // Function to toggle the menu visibility
 function toggleMenu() {
 menu.classList.toggle("show");
 // Update ARIA attribute and icon
 if (menu.classList.contains("show")) {
 toggleButton.setAttribute("aria-expanded", "true");
 toggleButton.innerHTML = '&times;'; // Replace with "X" icon
 // Focus on the first menu item when the menu is opened
 const firstMenuItem = menu.querySelector('a');
 if (firstMenuItem) firstMenuItem.focus();
 } else {
 toggleButton.setAttribute("aria-expanded", "false");
 toggleButton.innerHTML = '&#9776;'; // Replace with menu icon
 }
 }



document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
        const currentIndex = Array.prototype.indexOf.call(menuItems, activeElement);
        if (event.key === 'ArrowDown') {
        // Move focus to the next menu item
        const nextIndex = (currentIndex + 1) % menuItems.length;
        menuItems[nextIndex].focus();
        event.preventDefault();
        } else if (event.key === 'ArrowUp') {
        // Move focus to the previous menu item
        const prevIndex = (currentIndex-1 + menuItems.length) % menuItems.length;
        menuItems[prevIndex].focus();
        event.preventDefault();
        } else if (event.key === 'Escape') {
        // Close the menu if Escape is pressed
        if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        toggleButton.setAttribute("aria-expanded", "false");
        toggleButton.innerHTML = '&#9776;';
        toggleButton.focus(); // Focus back on the toggle button
        }
        }
        }
        })