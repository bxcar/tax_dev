//animate categories and archives block in sidebar
$(document).ready(function () {
    $('a#link-display-cat').click(function (e) {
        $(this).toggleClass('active');
        if ($('#cat-hidden-block').css('display') == 'none') {

            $('#cat-hidden-block').animate({height: 'show'}, 500);

            $('#transform-right-arrow').animate({borderSpacing: 90}, {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 'linear');
        }
        else {
            $('#cat-hidden-block').animate({height: 'hide'}, 500);

            $('#transform-right-arrow').animate({borderSpacing: 0}, {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 'linear');
        }
        e.stopPropagation();
    });


    $('a#link-display-arch').click(function (e) {
        $(this).toggleClass('active');
        if ($('#arch-hidden-block').css('display') == 'none') {

            $('#arch-hidden-block').animate({height: 'show'}, 500);

            $('#transform-right-arrow-arch').animate({borderSpacing: 90}, {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 'linear');



            
            //  click by month
            $('div#archive-by-month').click(function (e) {
                if ($('#archive-by-month-block-hidden').css('display') == 'none') {
                    $(this).toggleClass('active');
                    $('#archive-by-month-block-hidden').animate({height: 'show'}, 500);

                    $('#transform-right-arrow-arch-by-month').animate({borderSpacing: 90}, {
                        step: function (now, fx) {
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                        },
                        duration: 'slow'
                    }, 'linear');

                }

                else
                {
                    $('#archive-by-month-block-hidden').animate({height: 'hide'}, 500);

                    $('#transform-right-arrow-arch-by-month').animate({borderSpacing: 0}, {
                        step: function (now, fx) {
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                        },
                        duration: 'slow'
                    }, 'linear');
                }
            });

            //  /click by month



        }
        else {
            $('#arch-hidden-block').animate({height: 'hide'}, 500);

            $('#transform-right-arrow-arch').animate({borderSpacing: 0}, {
                step: function (now, fx) {
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
            }, 'linear');
        }
        e.stopPropagation();
    });
});