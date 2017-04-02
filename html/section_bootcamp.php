
<!-- Begin Coming Soon Section -->
<section id="coming-soon" class="section section-bgimage-yes">
    <div class="section-inner">
        <div class="section-overlay"></div>

        <div class="container section-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center">
                        <h3 class="main-title">Spring 2017</h3>

                        <h3 class="sub-title">We hold Bootcamp in the Spring & Summer months- Check back in early 2017 for dates</h3>

                        <span class="section-line"></span>
                    </div>
                    <!-- //.section-title -->
                </div>
                <!-- //.col-md-12 -->
            </div>
            <!-- //.row -->

            <div class="row">
                <div class="col-md-12">
                    <div class="countdown text-center">
                        <div class="cd-content" data-year="2017" data-month="5" data-day="1"></div>
                    </div>
                    <!-- /.countdown -->
                </div>
                <!-- //.col-md-12 -->
            </div>
            <!-- //.row -->

          

            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="countdown-text text-center">
                        <p class="lead">Bootcamp Classes are designed to give you a total body workout and improve your overall fitness level in the shortest time possible. Expect running and rowing, athletic drills, body weight exercises, plyometrics, kettlebells, sandbags and functional movements.</p>
                    </div>
                    <!-- //.countdown-text -->
                </div>
                <!-- //.col-md-8 col-md-offset-2 -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.section-content -->
    </div>
    <!-- //.section-inner -->
</section>
<!-- //End Coming Soon Section -->


<script type="text/javascript">
(function() {
  // animation jquery
  // @NOTE comment out because it causes issues
  // $('#coming-soon').find('.countdown-form').addClass('animated fadeInUp delayp3').css('opacity', 1);
  // $('#coming-soon').find('.countdown-text').addClass('animated fadeInUp delayp5').css('opacity', 1);

  // countdown
  var element = $('.countdown > .cd-content'),
      year = $(element).data('year'),
      month = $(element).data('month'),
      day = $(element).data('day'),
      newDate = new Date(year, month - 1, day);

  $(element).countdown({
      until: newDate,
      layout: '<div class="col-xs-6 col-sm-3 col-md-2 col-md-offset-2 not-right-column top-column"><div class="cd-element cd-days"><div class="cd-value">{dnn}</div><div class="cd-label">{dl}</div></div></div>' +
      '<div class="col-xs-6 col-sm-3 col-md-2 not-right-column top-column"><div class="cd-element cd-hours"><div class="cd-value">{hnn}</div><div class="cd-label">{hl}</div></div></div>' +
      '<div class="col-xs-6 col-sm-3 col-md-2 not-right-column"><div class="cd-element cd-minutes"><div class="cd-value">{mnn}</div><div class="cd-label">{ml}</div></div></div>' +
      '<div class="col-xs-6 col-sm-3 col-md-2"><div class="cd-element cd-seconds"><div class="cd-value">{snn}</div><div class="cd-label">{sl}</div></div></div>'
  });

})()
</script>
