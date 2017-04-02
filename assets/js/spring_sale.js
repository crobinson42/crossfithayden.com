$(document).ready(function () {
    var $modal = $('#modal_sale')

    if (Cookies.get('spring_sale') !== 'false') {
        $modal.modal('show')
    }

    $modal.on('hide.bs.modal', function () {
        Cookies.set('spring_sale', 'false', { expires: 10 })
    })

})