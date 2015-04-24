$(document).ready (function(){

	$('[data-toggle="tooltip"]').tooltip();
	
	/*menu sidebar */
  var icone = $('#icone-sidebar'),
	  footer= $('footer'),
	  wrapper = $('#wrapper'),
	  headerBouton = $('header button'),
	  sidebar = $("#sidebar-wrapper");


  // Changer l'icone quand on ouvre et ferme le sidebar
	$('[data-toggle="offcanvas"]').click(function () {
		
        wrapper.toggleClass('toggled');
			if (wrapper.hasClass('toggled')){  //ouvert
				icone.removeClass('octicon-move-right');
				icone.addClass('octicon-x');
				icone.text("");
				if ( $(window).width() > 739) { 
					footer.css("margin-left", "250px");
				}
			}
			else{
				icone.removeClass('octicon-x'); //fermé
				icone.addClass('octicon-move-right');
				icone.text("");
				if ( $(window).width() > 739) { 
					footer.css("margin-left", "0px");
				}
			}
			
	}); 
	
	//Pour faire descendre le bouton quand le menu est ouvert sur un appareil mobile
	headerBouton.click(function(){
		if(headerBouton.hasClass("collapsed")){ //ouvert
			icone.css("top","470px");
			sidebar.css("top","500px");
		}
		else{
			icone.css("top","160px");
			sidebar.css("top","200px");
		}
		
	});
	
	
  
  /* scroll ref : http://demo.yoarts.com/liberty/# */
  
    // Smooth Hash Link Scroll top
  $('.smooth-scroll').click(function() {
    //if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    //}
  });
  
  

});