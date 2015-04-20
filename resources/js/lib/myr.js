$(function () {
    $("ul.paging").quickPager({pageSize:"8"});
    $(".simplePagerNav").addClass("pagination");
    $(".simplePageNav1").addClass("active");

    $(".simplePagerNav  a").click(function(){
        $(".simplePagerNav li").removeClass("active");
        $(this).parent().addClass("active");

    });

    $('#energia').hover(function () {
        $('.energia').removeClass('m-t');
        $('.construccion').addClass('m-t')
        $('.mineria').addClass('m-t')
        $('.petroleria').addClass('m-t')

        $('.mine').removeClass('bg-primary')
        $('.petr').removeClass('bg-myr')
        $('.cons').removeClass('bg-warning')
        $('.ener').removeClass('bg-white');
        $('.mine').addClass('bg-white')
        $('.petr').addClass('bg-white')
        $('.cons').addClass('bg-white')

        $('.ener').addClass('bg-dark');
    });

    $('#mineria').hover(function () {
        $('.energia').addClass('m-t');
        $('.construccion').addClass('m-t')
        $('.mineria').removeClass('m-t')
        $('.petroleria').addClass('m-t')

        $('.ener').removeClass('bg-dark')
        $('.petr').removeClass('bg-myr')
        $('.cons').removeClass('bg-warning')
        $('.mine').removeClass('bg-white');
        $('.ener').addClass('bg-white')
        $('.petr').addClass('bg-white')
        $('.cons').addClass('bg-white')

        $('.mine').addClass('bg-primary')
    })

    $('#petroleria').hover(function () {
        $('.energia').addClass('m-t');
        $('.construccion').addClass('m-t')
        $('.mineria').addClass('m-t')
        $('.petroleria').removeClass('m-t')

        $('.ener').removeClass('bg-dark')
        $('.mine').removeClass('bg-primary')
        $('.cons').removeClass('bg-warning')
        $('.petr').removeClass('bg-white');
        $('.ener').addClass('bg-white')
        $('.mine').addClass('bg-white')
        $('.cons').addClass('bg-white')

        $('.petr').addClass('bg-myr')
    })

    $('#construccion').hover(function () {
        $('.energia').addClass('m-t');
        $('.construccion').removeClass('m-t')
        $('.mineria').addClass('m-t')
        $('.petroleria').addClass('m-t')

        $('.ener').removeClass('bg-dark')
        $('.mine').removeClass('bg-primary')
        $('.petr').removeClass('bg-myr')
        $('.cons').removeClass('bg-white');
        $('.ener').addClass('bg-white')
        $('.mine').addClass('bg-white')
        $('.petr').addClass('bg-white')

        $('.cons').addClass('bg-warning')
    });

//    para ver el detallado de cada producto
    $('.detalle').click(function(ev){
        var clickedElement = $(ev.currentTarget);
        var titulo=clickedElement.parent().parent().children(':nth-child(1)').children(':nth-child(2)').text();
        var marca=clickedElement.parent().parent().children(':nth-child(1)').children(':nth-child(3)').text();
        var imagen=clickedElement.parent().parent().children(':nth-child(1)').children(':nth-child(1)').children(':nth-child(1)').html();
        var titulo1=clickedElement.parent().parent().parent().parent().children(':nth-child(2)').children(':nth-child(3)').text();
        
        var detalle2=clickedElement.attr('data-caract');
        var detalle3=clickedElement.attr('data-otros');

        $('#detallado').html(imagen);
        $('#detalle_titulo').html(titulo);
        $('#detalle_marca').text(marca);
        $('#cab_det_modelo').text(titulo1);
        $('#detalle_caracteristica').text(detalle2);
        $('#detalle_otros').text(detalle3);


        //alert(data)
    });
})