// Select the hamburger icon for the mobile menu toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');

// Select the mobile menu (ul element) for toggling the visibility
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

// Select all the menu items (anchor tags) inside the navigation
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

// Select the header section to change its background color when scrolling
const header = document.querySelector('.header.container');

// Toggle the 'active' class on the hamburger icon and mobile menu when clicked
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');  // Toggle hamburger icon animation
	mobile_menu.classList.toggle('active');  // Show or hide mobile menu
});

// Change the background color of the header when the page is scrolled
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;  // Get the vertical scroll position
	if (scroll_position > 250) {  // If scrolled more than 250px
		header.style.backgroundColor = '#29323c';  // Set dark background color
	} else {
		header.style.backgroundColor = 'transparent';  // Set transparent background
	}
});

// Add event listener to each menu item
// When a menu item is clicked, it will close the mobile menu
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');  // Close hamburger icon
		mobile_menu.classList.toggle('active');  // Hide the mobile menu
	});
});
