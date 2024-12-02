function Dropdown(event) {

    event.preventDefault();
    /*
    stops the browser from navigating to #.
    */
    
    const dropdown = event.target.closest('.dropdown');
    /*ou ensure that only the dropdown related to the clicked element is toggled,
     not all dropdowns on the page. */
    
    dropdown.classList.toggle('active');
}

/***************************************************************** */
/***************************************************************** */

/** Sidebar funcitons  */

/***************************************************************** */
/***************************************************************** */

// Open the sidebar
function openSidebar() {
    const side = document.getElementById("sidebar");
    side.classList.add("open");  // Add the 'open' class to show the sidebar
}

// Close the sidebar
function closeSidebar() {
    const side = document.getElementById("sidebar");
    side.classList.remove("open");  // Remove the 'open' class to hide the sidebar
}
