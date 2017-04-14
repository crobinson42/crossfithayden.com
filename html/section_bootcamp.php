
<!-- Begin Coming Soon Section -->
<section id="coming-soon" class="section section-bgimage-yes">
    <div class="section-inner">
        <div class="section-overlay"></div>

        <div class="container section-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center" style="padding-bottom: 20px;">
                        <h3 class="main-title">Spring 2017</h3>

                        <h3 class="sub-title">Spring & Summer Bootcamps</h3>

                        <p class="lead">Bootcamp Classes are designed to give you a total body workout and improve your overall fitness level in the shortest time possible. Expect running and rowing, athletic drills, body weight exercises, plyometrics, kettlebells, sandbags and functional movements.</p>

                        <span class="section-line"></span>
                    </div>
                    <!-- //.section-title -->
                </div>
                <!-- //.col-md-12 -->
            </div>
            <!-- //.row -->

<!--            <div class="row">-->
<!--                <div class="col-md-12">-->
<!--                    <div class="countdown text-center">-->
<!--                        <div class="cd-content" data-year="2017" data-month="5" data-day="1"></div>-->
<!--                    </div>-->
<!--                    <!-- /.countdown -->-->
<!--                </div>-->
<!--                <!-- //.col-md-12 -->-->
<!--            </div>-->

           <section>
               <div class="row">
                   <div class="col-md-12">
                       <div class="section-title text-center">
                           <h4 class="main-title bootcamp-title text-primary">Women’s Bootcamp</h4>

                           <h4 class="sub-title">9:30am Monday, Wednesday, Friday</h4>

                           <p>
                               Camp Dates: <i class="fa fa-calendar"></i> May 1st, <i class="fa fa-calendar"></i> June 1st, <i class="fa fa-calendar"></i> July 1st. <em>each camp runs 4wks (Cost is $95)</em>
                           </p>

                           <p>
                               Mostly Body weight and the use of some training aids like medicine balls.
                               Each class will start with a directed warm-up to get the body moving and heart rate up. Followed by a little skill review and off to the workout!
                               Every warm up and workout will be different so you will learn more than a few key movements.
                               After the workout there will be a cool down consisting of stretches and breath control. The entire class is an hour.
                           </p>

                           <p>
                               <a href="/signup.php?plan=bcwoman">
                                   <button class="btn btn-sm btn-rj">
                                       Sign Up
                                   </button>
                               </a>
                           </p>
                       </div>
                   </div>
                   <!-- //.col-md-12 -->
               </div>

               <div class="row">
                   <div class="col-md-12">
                       <div class="section-title text-center">
                           <h4 class="main-title bootcamp-title text-primary">Coed Bootcamp</h4>

                           <h4 class="sub-title">6:30pm Monday, Wednesday, Friday</h4>

                           <p>
                               Camp Dates: <i class="fa fa-calendar"></i> May 1st, <i class="fa fa-calendar"></i> July 1st. <em>each camp runs 4wks (Cost is $95)</em>
                           </p>

                           <p>
                               Mostly Body weight and the use of some training aids like medicine balls.
                               Each class will start with a directed warm-up to get the body moving and heart rate up. Followed by a little skill review and off to the workout!
                               Every warm up and workout will be different so you will learn more than a few key movements.
                               After the workout there will be a cool down consisting of stretches and breath control. The entire class is an hour.
                           </p>

                           <p>
                               <a href="/signup.php?plan=bccoed">
                                   <button class="btn btn-sm btn-rj">
                                       Sign Up
                                   </button>
                               </a>
                           </p>
                       </div>
                   </div>
                   <!-- //.col-md-12 -->
               </div>

               <div class="row">
                   <div class="col-md-12">
                       <div class="section-title text-center">
                           <h4 class="main-title bootcamp-title text-primary">Kick-Boxing and Martial Arts Bootcamp</h4>

                           <h4 class="sub-title">6:30pm Monday, Wednesday, Friday</h4>

                           <p>
                               Camp Dates: <i class="fa fa-calendar"></i> June 1st. <em>camp runs 4wks (Cost is $125)</em>
                           </p>

                           <p>
                               This class will be a kick-boxing and skills based martial arts program led by black belt instructors. Learn to punch, kick and defend yourself all while getting a workout!
                           </p>

                           <p>
                               <a href="/signup.php?plan=bcmartialarts">
                                   <button class="btn btn-sm btn-rj">
                                       Sign Up
                                   </button>
                               </a>
                           </p>
                       </div>
                   </div>
                   <!-- //.col-md-12 -->
               </div>

               <div class="row">
                   <div class="col-md-12">
                       <div class="section-title text-center">
                           <h4 class="main-title bootcamp-title text-primary">Learn CrossFit Bootcamp</h4>

                           <h4 class="sub-title">6:30pm Monday, Wednesday, Friday</h4>

                           <p>
                               Camp Dates: <i class="fa fa-calendar"></i> April 17 for 2 weeks. <em>camp runs 4wks (Cost is $75)</em>
                           </p>

                           <p>
                               Introductory CrossFit Class, meet your coaches, learn about CrossFit and develop your skills.
                               Each class will start with a directed warm-up to get the body moving and heart rate up. Followed by a little skill review and off to the workout!
                               Every warm up and workout will be different so you will learn more than a few key movements.
                               After the workout there will be a cool down consisting of stretches and breath control. The entire class is an hour.
                           </p>

                           <p>
                               <a href="/signup.php?plan=bclearncf">
                                   <button class="btn btn-sm btn-rj">
                                       Sign Up
                                   </button>
                               </a>
                           </p>
                       </div>
                   </div>
                   <!-- //.col-md-12 -->
               </div>
           </section>
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
