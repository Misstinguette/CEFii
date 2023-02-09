$(document).ready(function(){

  //FONCTION SLIDESHOW
  $("#slider").slippry();

  //FONCTION SCROLL AUTOMATIQUE
   // Fonction pour ajouter des délais
  async function waitForTime(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
    // Au scroll, afficher bouton "back to top"
  $(window).on('load scroll', async function () {
      var scrolled = $(this).scrollTop(),
          $top = $('.back-to-top');    
      // Si on n'est pas en haut de la page
      if(scrolled > 0){
        // Si la flèche n'est pas déjà visible
        if(!$top.hasClass('show')){
          // Dans ce cas, on l'affiche en fondu
          $top.removeClass('m-d-none')
              .addClass('anim-show');

          await waitForTime(400);
          $top.addClass('show')
              .removeClass('anim-show');
        }
      // Si on est en haut de la page
        }else{
          // On cache la flèche
          $top.addClass('anim-hide')
              .removeClass('show');
          await waitForTime(400);
          $top.addClass('m-d-none')
              .removeClass('anim-hide');
      }
  });
});

