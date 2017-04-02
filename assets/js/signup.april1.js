$(function() {
    /*---------------------------------------*/
    /*  PAGE LOADER
    /*---------------------------------------*/
    $(window).load(function(){
      var urlPlan = $.getQuery('plan')

      if (urlPlan) {
        selectPlan(urlPlan)
        setPlanText(urlPlan)
        $('.signup-form-container').show()
      }

      // listen for plan changes
      $('div.plan-footer > a').click(function(e) {
        e.preventDefault();
        selectPlan( $(this).attr('href').replace('#', '') )
      })
    });
});

function setPlanText (plan) {
  var planText = ''
  var $selectPlanContainer = $('.selected-plan-container')

  switch (plan) {
    case "spring":
      planText = '3 Months 25% off'
      break
    case "personaltraining":
      planText = '1-on-1 Training'
      break
    case "crossfit":
      planText = 'CrossFit'
      break
    case "cfcouple":
      planText = 'CrossFit 4 Two'
      break
    case "cf4kids":
      planText = 'Kids CrossFit'
      break
    case "bcwoman":
      planText = 'Bootcamp Woman'
      break
    case "bccoed":
      planText = 'Bootcamp Coed'
      break
    case "bcmartialarts":
      planText = 'Bootcamp Martial Arts'
      break
    case "bclearncf":
      planText = 'Bootcamp Learn CF'
      break
  }

  $selectPlanContainer.removeClass('animated flipInY delayp1')

  setTimeout(function() {
    // change header selected plan
    $('.selected-plan').text(planText)
    $selectPlanContainer.addClass('animated flipInY delayp1')
  },100)

  return planText
}

function selectPlan(plan) {

  // show the form
  $('.signup-form-container').show()
  // scroll to form
  $('html, body').animate({
        scrollTop: $('a[name="signup-form"]').offset().top - 450
    }, 700);

  var planText = setPlanText(plan)

  // set the hidden input value
  $('input[name="plan"]').val(planText)

  $.notify('Selected Plan: ' + planText, { className: 'success', position: 'bottom right' })

  // hide all other plans
  $('.pricing-column').each(function (i, el) {
    var classes = el.getAttribute('class')
    if (classes.search(plan) === -1) {
      $(el).addClass('subdued').removeClass('animated flipInX delayp1')
      $(el).find('div.plan-footer').find('a').text('Change To This Plan')
    } else {
      $(el).find('div.plan-footer').find('a').text('Selected Plan')
      $(el).removeClass('subdued').addClass('animated flipInX delayp1')
    }

    // scroll to next section
  })
}
