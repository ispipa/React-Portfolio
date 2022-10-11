/*$(".nav-item").on("click", function(){
	$(".nav-item.active").removeClass("active");
	$(this).addClass("active");
});

$(".nav-item").on("click", function(){
    if(window.innerWidth <= 991)
    {
        $(".navbar-collapse.collapse.show").removeClass("show");
        $(".nav-header").removeClass("navStrict");
        $(".navbar-toggler").addClass("collapsed");
    }
});
$(".navbar-toggler").on("click", function()
{
    if(window.innerWidth <= 991)
    {
        $(".nav-header").toggleClass("navStrict");
    }
});
$(window).resize(function() 
{
    if(window.innerWidth  <= 991)
    {
            $(".nav-header").removeClass("navStrict");
    }
    else{
        $(".nav-header").addClass("navStrict");
    }
});


$(window).on('scroll', function() 
{
    if(window.innerWidth >= 992)
    {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-header").addClass("navStrict");
        } else {
            $(".nav-header").removeClass("navStrict");
        }
    }
});*/