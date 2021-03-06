var OPEN_IMAGE = 'open-image';

$('.fancy-button').click(function(e) {
    e.preventDefault();
    var type = $(this).data('type');
    
    // for team images
        var target = $(this).data('target');
        $('#black-overlay').fadeIn();
        $('#' + target + '-img').fadeIn();
        console.log(target);
        sessionStorage.setItem(OPEN_IMAGE, target);
})

$('.dev-image').click(function(e) {
    e.preventDefault();
    var type = $(this).data('type');
    
    // for team images
        var target = $(this).data('target');
        $('#black-overlay').fadeIn();
        $('#' + target + '-img').fadeIn();
        console.log(target);
        sessionStorage.setItem(OPEN_IMAGE, target);
})

$('.event-poster').click(function(e){
    var target = $(this).data('target');
    window.open('event/' + target);
})

$('#black-overlay').click(function(e) {
    e.preventDefault();
    var target = sessionStorage.getItem(OPEN_IMAGE);
    $('#black-overlay').fadeOut();
    $('#' + target + '-img').fadeOut();
    sessionStorage.removeItem(OPEN_IMAGE);
})