$(document).ready(function(){
  $(".bar").click(function(){
    $(this).find(".answer").slideToggle();
  });

  $(".bar").click(function(){
    $(this).find("i").toggleClass("fa-plus fa-minus");
  });
});

// hambuger menu click function
$(document).ready(function() {
    const $hamburgerMenu = $('#hamburgerMenu');
    const $navbarLinks = $('#navbarLinks');

    // Toggle the 'active' class on click
    $hamburgerMenu.on('click', function() {
        $navbarLinks.toggleClass('active');
    });

    // and only on small screens
    $navbarLinks.find('a').on('click', function() {
        if ($(window).width() <= 768) { // Check viewport width using jQuery
            $navbarLinks.removeClass('active');
        }
    });
});

// hamburger Animation 
$(document).ready(function() {
  $("#hamburgerMenu").click(function(){
    $("#navbarLinks").slideToggle(300);
  })
});



// Ensure dropdown is toggling correctly on click
$(document).ready(function(){
    $(".dropdown-toggle").click(function(e){
        var $el = $(this).next(".dropdown-menu");
        var isVisible = $el.is(":visible");
        
        // Close all other dropdowns
        $(".dropdown-menu").slideUp("400");
        
        // Toggle current dropdown
        if (!isVisible) {
            $el.stop(true, true).slideDown("400");
        }
    });

    // Close the dropdown when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $(".dropdown-menu").slideUp("400");
        }
    });
});
