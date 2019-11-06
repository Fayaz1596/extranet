function redimensionner(e)
{
    if("matchMedia" in window)
    {
        if(window.matchMedia('(min-width: 767.99px) and (max-width: 1199.98px)').matches)
        {
            $(document).ready(function()
            {
                $("#tablette .bouton").click(function()
                {
                    $(".be-left-sidebar#tablette").animate({width: "220px"}, 200);
                    $("#tablette .sidebar-elements li span").css("display", "inline");
                    $("#tablette .image2_bouton").removeClass("pr-lg-0 pr-md-0");
                    $("#tablette .image").removeClass("pr-lg-0 mr-lg-0 pr-md-0 mr-md-0").addClass("pr-lg-2 pr-md-2");
                    $(".be-left-sidebar#tablette .sidebar-elements > li > a, .be-left-sidebar#tablette .sidebar-elements > li ul li > a").css("padding", "0 20px");
                    $(".be-left-sidebar#tablette .sidebar-elements li.parent > a, .be-left-sidebar#tablette .sidebar-elements li.parent.open > a").removeClass("hidden");
                    $("#tablette .accueil").css("border-bottom", "1px solid #eeeeee");
                    $("#tablette .deconnecter").css("border-top", "1px solid #eeeeee");
                    $(".be-content").css("opacity", "0.2");
                });
                
                $("#tablette .sidebar-elements > li.parent a").click(function()
                {
                    if($("#tablette .sidebar-elements > li.parent").hasClass("open"))
                    {
                        $("#tablette .sidebar-elements > li.parent").css("border-bottom", "none");
                    }
                    else
                    {
                        $("#tablette .sidebar-elements > li.parent").css("border-bottom", "1px solid #e6e6e6");
                    }    
                });

                $('.be-content, .be-top-header').on('click', function(e)
                {
                    if(!$(e.target).is('#tablette .bouton, #tablette .sidebar-elements > li.parent, .be-left-sidebar#tablette'))
                    {
                        $(".be-left-sidebar#tablette").animate({width: "85px"}, 200);
                        $("#tablette .sidebar-elements li span").css("display", "none");
                        $("#tablette .image2_bouton").addClass("pr-lg-0 pr-md-0");
                        $("#tablette .image").removeClass("pr-lg-2 pr-md-2").addClass("pr-lg-0 mr-lg-0 pr-md-0 mr-md-0");
                        $(".be-left-sidebar#tablette .sidebar-elements > li > a, .be-left-sidebar#tablette .sidebar-elements > li ul li > a").css("padding", "0 15px");
                        $(".be-left-sidebar#tablette .sidebar-elements li.parent > a, .be-left-sidebar#tablette .sidebar-elements li.parent.open > a").addClass("hidden");
                        $("#tablette .accueil").css("border-bottom", "none");
                        $("#tablette .deconnecter").css("border-top", "none");
                        $(".be-content").css("opacity", "1");
                    }
                });
            });
        }
    }
}

window.addEventListener('resize', redimensionner, false);

redimensionner();