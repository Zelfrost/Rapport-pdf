$(document).ready(function() {
    var nbPages = $('.page:not(#first-page)').size();

    var pageId = 0;
    $('.page:not(#first-page)').each(function() {
        pageId ++;
        $(this).append('<div class="numerotation"><span class="curr"></span><div class="sep"></div><span class="total"></span></div>');
        $(this).find('.numerotation .curr').append(pageId);
        $(this).find('.numerotation .total').append(nbPages);
    })

    var glossaireId = 0;
    $('a.exposant').each(function() {
        glossaireId ++;
        $(this).html(glossaireId);
    });

    var glossaireId = 0;
    $('.glossaire li').each(function() {
        glossaireId ++;
        $(this).prepend("<span class='id'>" + glossaireId + ".</span>");
    });

    $('h4').each(function() {
        $('span', this).css('margin-left', ( ($(this).width() - $('span', this).outerWidth()) ) - 10);
    });
});