$(document).ready(function () {
    $('#collapseContent').on('shown.bs.collapse', function () {
        $('#collapseIcon').text('-');
    });

    $('#collapseContent').on('hidden.bs.collapse', function () {
        $('#collapseIcon').text('+');
    });

    $('#collapseContent0').on('shown.bs.collapse', function () {
        $('#collapseIcon0').text('-');
    });

    $('#collapseContent0').on('hidden.bs.collapse', function () {
        $('#collapseIcon0').text('+');
    });

    $('#collapseContent1').on('shown.bs.collapse', function () {
        $('#collapseIcon1').text('-');
    });

    $('#collapseContent1').on('hidden.bs.collapse', function () {
        $('#collapseIcon1').text('+');
    });

    $('#collapseContent2').on('shown.bs.collapse', function () {
        $('#collapseIcon2').text('-');
    });

    $('#collapseContent2').on('hidden.bs.collapse', function () {
        $('#collapseIcon2').text('+');
    });
    
});





