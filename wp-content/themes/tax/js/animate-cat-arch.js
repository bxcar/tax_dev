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


            /*function dump(obj) {
                var out = '';
                for (var i in obj) {
                    out += i + ": " + obj[i] + "\n";
                }

                alert(out);

                // or, if you wanted to avoid alerts...

                var pre = document.createElement('pre');
                pre.innerHTML = out;
                document.body.appendChild(pre)
            }

            // alert($('#arch-hidden-block li:first-child a').html());
            var str = $('#arch-hidden-block li:first-child a').html();

            $('#arch-hidden-block li:first-child a').html(str.substring(str.length-4, str.length));*/
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