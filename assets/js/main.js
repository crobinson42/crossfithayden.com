$(function() {



    /*---------------------------------------*/
    /*  PAGE LOADER
    /*---------------------------------------*/
    $(window).load(function(){
        $('#page-loader').fadeOut();

        // get url params via $.getQuery('{param}')
        // Parse URL Queries Method
        (function($){
            $.getQuery = function( query ) {
                query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                var expr = "[\\?&]"+query+"=([^&#]*)";
                var regex = new RegExp( expr );
                var results = regex.exec( window.location.href );
                if( results !== null ) {
                    return results[1];
                    return decodeURIComponent(results[1].replace(/\+/g, " "));
                } else {
                    return false;
                }
            };
        })(jQuery);
    });


    /*---------------------------------------*/
    /*  JQUERY FOR PAGE SCROLLING FEATURE
    /*  requires jQuery Easing plugin
    /*---------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('body').attr('data-offset');

            if($('.navbar.navbar-fixed-top').hasClass('side-menu') && $(window).width() >= 992){
                $('body').data('offset', 1);
                offset = $('body').data('offset');
            }

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');

            $('.navbar-rj-collapse').collapse('hide');
        });
    };


    /*---------------------------------------*/
    /*  STICKY NAVBAR
    /*---------------------------------------*/
    $('.navbar.navbar-fixed-top').sticky({topSpacing: 0});

    var stickySideMenu = function(){
        var navbar = $('.navbar.navbar-fixed-top.side-menu');

        if ($(window).width() >= 992) {
            navbar.unstick();
        }
        else
        {
            navbar.unstick();
            navbar.sticky({topSpacing: 0});
        }
    };

    pageScroll();
    stickySideMenu();

    $(window).smartresize(function(){
        pageScroll();
        stickySideMenu();
    });

    $('.navbar-trigger-open').click(function(e){
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });

    $('.navbar-trigger-close').click(function(e){
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });


    /*---------------------------------------*/
    /*  VIDEO BACKGROUND
    /*---------------------------------------*/
    $(window).load(function(){
      // window.pageSpeed set in header section of index.html
      if (!pageSpeed) { return }
      if (pageSpeed.loadTime > 4000) {
        $('#intro')
          .css({
            'background-image': 'url(http://dev.crossfithayden:8888/assets/img/video-poster_low_res.jpg)'
          })
      } else {
        $('#intro').vide({
            mp4: 'assets/video/cfh_entry',
            webm: 'assets/video/cfh_entry',
            ogv: 'assets/video/cfh_entry',
            poster: 'assets/img/video-poster'
        });
      }
    });


    /*---------------------------------------*/
    /*  OWL CAROUSEL
    /*---------------------------------------*/
    $('#carousel-who-we-are').owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });


    /*---------------------------------------*/
    /*  CONTACT FORM REQUEST
    /*---------------------------------------*/
    $('.validate').validate();

    $(document).on('submit', '#contact-us-form', function(e){
        e.preventDefault();

        $('.form-respond').html("<div class='content-message'><i class='fa fa-refresh fa-spin fa-4x'></i> <h2>Loading..</h2></div>");

        $.ajax({
            url: $('#contact-us-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data){
                if (data == true){
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-rocket fa-4x'></i> <h2>Email Sent Successfully</h2> <p>Your message has been submitted.</p></div>");
                } else {
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle fa-4x'></i> <h2>Error sending</h2> <p>Try again later.</p></div>");
                }

                setTimeout(function(){
                    $('.form-respond').html("");
                },3000);
            },
            error: function(xhr, err){
                $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle fa-4x'></i> <h2>Error sending</h2> <p>Try again later.</p></div>");

                setTimeout(function(){
                    $('.form-respond').html("");
                },3000);
            }
        });
    });

    /*---------------------------------------*/
    /*  SIGNUP FORM REQUEST
    /*---------------------------------------*/
    $('.validate').validate();

    $(document).on('submit', '#signup-form', function(e){
        e.preventDefault();

        var showForm = function () { $('form[name="signup-form"]').show() }
        var hideForm = function () { $('form[name="signup-form"]').hide() }

        $('.form-respond').html("<div class='content-message'><i class='fa fa-refresh fa-spin fa-4x'></i> <h2>Loading..</h2></div>");
        hideForm()

        $.ajax({
            url: $('#signup-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data){
                if (data == true){
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-rocket fa-4x'></i> <h2>Awesome! We'll Contact You Shortly</h2> <p>Your signup has been submitted.</p></div>");
                } else {
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle fa-4x'></i> <h2>Error signing up</h2> <p>Try again later.</p></div>");
                    showForm()
                    setTimeout(function(){
                      $('.form-respond').html("");
                    },3000);
                }

            },
            error: function(xhr, err){
                $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle fa-4x'></i> <h2>Error sending</h2> <p>Try again later.</p></div>");

                setTimeout(function(){
                    $('.form-respond').html("");
                },3000);
            }
        });
    });

    /*---------------------------------------*/
    /*  Animated Full Screen Modal
    /*---------------------------------------*/
    $(window).load(function(){

        var $modalBody = $('.modal-content')
        var positionBeforeModal = 0

        $('.fullscreen-modal').click(function () {
          positionBeforeModal = window.scrollY
          // load content to modal
          var contentUrl = $(this).attr('data-modal-content-src')
          $modalBody.html('<div class="modal-loading center"><h3 class="">Watch the box while we load...</h3><img src="assets/img/box.gif" alt="Loading"></div>' +
            '<iframe src="'+contentUrl+'"></iframe>'
          );
          $.ajax({
              url: contentUrl,
              success: function(data){
                $modalBody.html(data)
              },
              error: function(xhr, err){
                $modalBody.html('<div class="panel panel-warning">Sorry - there was some techinical issues. We\'ll put our IT nerd guy in a head-lock and get it worked out ASAP. Check back later!<div>')
              }
          });
        })

        // initialize fullscreen modal links
        $(".fullscreen-modal").animatedModal({
          color: '#222222',
          animatedIn: 'bounceInDown',
          beforeOpen: function () {
          },
          beforeClose: function () {
            $('body, html').css({'overflow':'visible'});
            $("html, body").animate({ scrollTop: positionBeforeModal }, 500);
          },
          afterClose: function () {
            $modalBody.empty()
          }
        });
        // $(".fullscreen-modal").click(function (e) {
        //   e.preventDefault();
        //
        //   // alert('clicked... need to load ajax content')
        // });



    });
});