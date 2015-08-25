$(document).ready(function() {
    // Initialize Fancybox
    $(".fancybox").fancybox({
        padding : 0,
    });
    
    // Initialize SimplyScroll
    (function($) {
        $(function() { //on DOM ready 
                $("#scroller").simplyScroll();
        });
     })(jQuery);
    
    // Bootstrap Carousel Settings
    $('.carousel').carousel({
        interval: 3000
    });
    
    //Initialize Slick
    $('.your-class').slick({
        
    });
    
    //Mobile Nav
    $(function() {                       
        $("#navButton").click(function() {  
            $("#navLinks").toggleClass("navLinksSelected"); 
        });
    });
    
    //Activate Inner Page Tabs
    $('.leftList a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    
    //Inner Page Active Class
    $('.leftList li').click(function(e) {
        $('.leftList li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });
    
    // Menu Handler
    $(function(){
      function stripTrailingSlash(str) {
        if(str.substr(-1) == '/') {
          return str.substr(0, str.length - 1);
        }
        return str;
      }

      var url = window.location.pathname;  
      var activePage = stripTrailingSlash(url);

      $('.navigation li a').each(function(){  
        var currentPage = stripTrailingSlash($(this).attr('href'));

        if (activePage == currentPage) {
          $(this).parent().addClass('active'); 
        } 
      });
    });
});

//Shrinking Nav
$(window).scroll(function() {
    if ($(document).scrollTop() > 45) {
        $('.navbar').addClass('shrink');
    }
    else {
        $('.navbar').removeClass('shrink'); }
});

//Show Bottom Popup
$(window).scroll(function () { 
    if ($(document).scrollTop() > 300 ) {
        $('#popup-id').css('bottom', '0px');
    } else {
        $('#popup-id').css('bottom', '-100px');
    }
});
