(function($) {

  var cache = [];
  var settings = {
        thumbListId : '#thumbs',
        activeWrapperId : '#active-wrapper',
        activeImageId : '#active-image',
        loadingLabel: 'Učitavanje...'
      };
  var $thumbList, $activeWrapper, $loading, activeImageUrl;


  $.fn.enhanceGallery = function(options){

    if( options ){
      $.extend(settings, options);
    }

    $thumbList = $(settings.thumbListId);
    $activeWrapper = $(settings.activeWrapperId);
    $loading = $('<div id="active-image-loading">'+settings.loadingLabel+'</div>');

    activeImageUrl = $thumbList.find('a:first').attr('href')
    preloadImage( activeImageUrl ); // preload 1st image
    $thumbList.find('li:first').addClass('active-thumb');

    $thumbList.find('a').click( function(e){
      $thumbList.children('li').removeClass('active-thumb');
      $(this).parent().addClass('active-thumb');
      activeImageUrl = this.href;
      preloadImage( activeImageUrl );
      e.preventDefault();
    });

    return this;

  };


  function swap(image){
    var scale = $activeWrapper.width() / image.originalWidth,
        wrapperWidth  = $activeWrapper.width(),
        wrapperHeight = (image.originalWidth < wrapperWidth) ? image.originalHeight : ~~(image.originalHeight * scale);

    hideSpinner();

    // empty container, change container's width, append the <img>
    $activeWrapper.empty().height(wrapperHeight).append(image.tag);

    // enable the zoominess
    if( image.originalWidth > wrapperWidth ){
      $(settings.activeImageId).width(wrapperWidth).height(wrapperHeight).hover(
        function(){
          // zoom in
          $(this).removeClass('unzoomed').addClass('zoomed').width(image.originalWidth).height(image.originalHeight);
          $activeWrapper.mousemove( function(e){
            var localX = ~~(((e.pageX - $activeWrapper.offset().left)/wrapperWidth) * 100);
            var localY = ~~(((e.pageY - $activeWrapper.offset().top)/wrapperHeight) * 100);
            var fromLeft = (image.originalWidth - wrapperWidth) * localX/100;
            var fromTop  = (image.originalHeight - wrapperHeight) * localY/100;
            //console.log( fromLeft,' :: ', fromTop);
            $(settings.activeImageId).css('left', -fromLeft+'px').css('top', -fromTop+'px');
          });
        },
        function(){
          // zoom out
          $(this).removeClass('zoomed').addClass('unzoomed').width(wrapperWidth).height(wrapperHeight);
          $activeWrapper.unbind('mousemove');
        }
      );
    }
    else {
      $(settings.activeImageId).addClass('unzoomed');
    }
  }


  function preloadImage(url){
    var image = getCachedImage(url);
    if( !image ){
      var cacheImage = document.createElement('img');
      cacheImage.id = 'active-image';
      cacheImage.onload = function(){
        imageLoaded(cacheImage, url);
      };
      cacheImage.src = url;
      showSpinner();
    } else {
      swap(image);
    }
  }


  function imageLoaded(img, url){
    var image = {
      tag: img,
      url: url,
      originalWidth: img.width,
      originalHeight: img.height
    };
    cache.push(image);
    swap(image);
  }


  function showSpinner(){
    $activeWrapper.append($loading);
    var fromLeft = $activeWrapper.width()/2 - $loading.width()/2;
    var fromTop = $activeWrapper.height()/2 - $loading.height()/2;
    $loading.css('top', fromTop+'px').css('left', fromLeft +'px');
  }

  function hideSpinner(){
    $loading.remove();
  }


  function getCachedImage(url){
    for(var i=0; i < cache.length; i++ ){
      if( cache[i].url === url ){
        return cache[i];
      }
    }
    return false;
  }

  // on resize refresh the active image size
  $(window).resize(function() {
    preloadImage(activeImageUrl);
  })


})(jQuery);