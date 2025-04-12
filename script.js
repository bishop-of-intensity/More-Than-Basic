$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);

    if (params.get('iq') === 'true') {
        // Reveal or expand a specific section
        $('.main-content-container.main-section-collapsed.display-none-url').addClass('display-flex-url');
    }
    if (params.get('career') === 'true') {
        // Reveal or expand a specific section
        $('.parent.category-A.display-none-url_2').addClass('display-block-url');
    }
    if (params.get('family') === 'true') {
        // Reveal or expand a specific section
        $('.parent.category-NAV.display-none-url_3').addClass('display-block-url');
    }
});

// SECTION-EXPANDER
$('.parent .expander-p-container').click(function() {
    if(!$(this).parent().hasClass('main-section-expanded-p')) {
        $(this).parent().addClass('main-section-expanded-p');
    } else {
        $(this).parent().removeClass('main-section-expanded-p');
        $(this).parent().children('.main-content-container').removeClass('main-section-expanded');
        $(this).parent().children('.main-content-container')
        .children('.main-content-container').removeClass('main-section-expanded');

    }
});

$('.expander').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
        $(this).parent().parent().children('.main-content-container').removeClass('main-section-expanded');
        $(this).parent().parent().children('.main-content-container').children('.main-content-container').removeClass('main-section-expanded');
    }
});

$('.expander-lvl-2').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
        $(this).parent().parent().children('.main-content-container').removeClass('main-section-expanded');
    }
});

$('.expander-lvl-3').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
    }
});

$('.close-all').click(function() {
    $(this).parent().children().removeClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
});

$('.expand-all').click(function() {
    $(this).parent().children().addClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').children('.main-content-container')
    .children('.main-content-container').addClass('main-section-expanded');
});

$('.expand-medium').click(function() {
    $(this).parent().children().addClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
});
