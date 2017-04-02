$(document).ready(function () {
    var $modal = $('#modal_sale')

    setTimeout(function () {
        if (Cookies.get('spring_sale') !== 'false') {
            $modal.modal('show')
        }
    }, 18000)

    $modal.on('hide.bs.modal', function () {
        Cookies.set('spring_sale', 'false', { expires: 10 })
    })

})