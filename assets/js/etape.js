$(document).ready(function()
{
    $(".group-bouton button.btn").click(function()
    {
        $(".group-bouton").find(".active").removeClass("active");
        $(this).addClass("active");
    });
    $(".bg-bouton button.btn").click(function()
    {
        $(".bg-bouton").find(".active").removeClass("active");
        $(this).addClass("active");
    });
    $(".booking_corporelle1 .ajout").click(function()
    {
        $(".booking_corporelle1 .option_plus, .booking_corporelle1 .sous_separateur").slideDown("slow");  
        $(".booking_corporelle1 .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });   
    $(".booking_corporelle2 .ajout").click(function()
    {
        $(".booking_corporelle2 .option_plus, .booking_corporelle2 .sous_separateur").slideDown("slow");  
        $(".booking_corporelle2 .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });   
    $(".booking_juridique .ajout").click(function()
    {
        $(".booking_juridique .option_plus, .booking_juridique .sous_separateur").slideDown("slow");  
        $(".booking_juridique .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_assistance .ajout").click(function()
    {
        $(".booking_assistance .option_plus, .booking_assistance .sous_separateur").slideDown("slow");  
        $(".booking_assistance .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_vehicule .ajout").click(function()
    {
        $(".booking_vehicule .option_plus, .booking_vehicule .sous_separateur").slideDown("slow");  
        $(".booking_vehicule .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_valeur .ajout").click(function()
    {
        $(".booking_valeur .option_plus, .booking_valeur .sous_separateur").slideDown("slow");  
        $(".booking_valeur .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_moto .ajout").click(function()
    {
        $(".booking_moto .produit_plus, .booking_moto .sous_separateur").slideDown("slow");  
        $(".booking_moto .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_habitation .ajout").click(function()
    {
        $(".booking_habitation .produit_plus, .booking_habitation .sous_separateur").slideDown("slow"); 
        $(".booking_habitation .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });            
    $(".booking_sante .ajout").click(function()
    {
        $(".booking_sante .produit_plus, .booking_sante .sous_separateur").slideDown("slow"); 
        $(".booking_sante .suppression").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_corporelle1 .suppression").click(function()
    {
        $(".booking_corporelle1 .option_plus, .booking_corporelle1 .sous_separateur").slideUp("slow"); 
        $(".booking_corporelle1 .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_corporelle2 .suppression").click(function()
    {
        $(".booking_corporelle2 .option_plus, .booking_corporelle2 .sous_separateur").slideUp("slow"); 
        $(".booking_corporelle2 .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_juridique .suppression").click(function()
    {
        $(".booking_juridique .option_plus, .booking_juridique .sous_separateur").slideUp("slow"); 
        $(".booking_juridique .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_assistance .suppression").click(function()
    {
        $(".booking_assistance .option_plus, .booking_assistance .sous_separateur").slideUp("slow"); 
        $(".booking_assistance .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_vehicule .suppression").click(function()
    {
        $(".booking_vehicule .option_plus, .booking_vehicule .sous_separateur").slideUp("slow"); 
        $(".booking_vehicule .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_valeur .suppression").click(function()
    {
        $(".booking_valeur .option_plus, .booking_valeur .sous_separateur").slideUp("slow"); 
        $(".booking_valeur .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_moto .suppression").click(function()
    {
        $(".booking_moto .produit_plus, .booking_moto .sous_separateur").slideUp("slow"); 
        $(".booking_moto .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_habitation .suppression").click(function()
    {
        $(".booking_habitation .produit_plus, .booking_habitation .sous_separateur").slideUp("slow"); 
        $(".booking_habitation .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    $(".booking_sante .suppression").click(function()
    { 
        $(".booking_sante .produit_plus, .booking_sante .sous_separateur").slideUp("slow"); 
        $(".booking_sante .ajout").css({'display' : 'inline'}); 
        $(this).css({'display' : 'none'}); 
    });
    
    $("#pays").selectpicker();
    
    $("#mois").click(function()
    {
        $("#nombre p").replaceWith("<p>25,<span>99</span>€<span>*</span></p>");
    });
    $("#an").click(function()
    {
        $("#nombre p").replaceWith("<p>311,<span>88</span>€<span>*</span></p>");
    });
    $("#tiers").click(function()
    {
        $("#nombre p").replaceWith("<p>25,<span>99</span>€<span>*</span></p>");
    });
    $("#maxi").click(function()
    {
        $("#nombre p").replaceWith("<p>31,<span>79</span>€<span>*</span></p>");
    });
    $("#risques").click(function()
    {
        $("#nombre p").replaceWith("<p>37,<span>59</span>€<span>*</span></p>");
    });
});

function verifier()
{
    let rempli = true;
    $('input#champ, select#case, select#pays').each(function()
    {
        if($(this).val() == '')
        {
            rempli = false;
            return false;
        }
    });
    $('button#signature').prop('disabled', !rempli);
    $(".signer").click(function()
    {
        $(".separateur, .client, .resiliation").slideDown("slow");
    })
}
$(document).ready(function()
{
    $('input#champ').keyup(verifier).focusout(verifier);
    $('select#case, select#pays').change(verifier).focusout(verifier);
});

function cliquer()
{
    if($('#mois').hasClass('active') && $('#tiers').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>25,<span>99</span>€<span>*</span></p>");
        $("#total_tarif p").replaceWith("<p class='mb-1'>25,<span>99</span>€<span>*</span></p>");
        $("#nombre p").replaceWith("<p>25,<span>99</span>€<span>*</span></p>");
        $("#total_nombre p").replaceWith("<p>25,<span>99</span>€<span>*</span></p>");
    }
    if($('#mois').hasClass('active') && $('#maxi').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>31,<span>79</span>€<span>*</span></p>");
        $("#total_tarif p").replaceWith("<p class='mb-1'>31,<span>79</span>€<span>*</span></p>");
        $("#nombre p").replaceWith("<p>31,<span>79</span>€<span>*</span></p>");
        $("#total_nombre p").replaceWith("<p>31,<span>79</span>€<span>*</span></p>");
    }
    if($('#mois').hasClass('active') && $('#risques').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>37,<span>59</span>€<span>*</span></p>");
        $("#total_tarif p").replaceWith("<p class='mb-1'>37,<span>59</span>€<span>*</span></p>");
        $("#nombre p").replaceWith("<p>37,<span>59</span>€<span>*</span></p>");
        $("#total_nombre p").replaceWith("<p>37,<span>59</span>€<span>*</span></p>");
    }
    if($('#an').hasClass('active') && $('#tiers').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>311,<span>88</span>€<span>*</span></p>");  
        $("#total_tarif p").replaceWith("<p class='mb-1'>311,<span>88</span>€<span>*</span></p>"); 
        $("#nombre p").replaceWith("<p>311,<span>88</span>€<span>*</span></p>"); 
        $("#total_nombre p").replaceWith("<p>311,<span>88</span>€<span>*</span></p>"); 
    }
    if($('#an').hasClass('active') && $('#maxi').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>322,<span>38</span>€<span>*</span></p>"); 
        $("#total_tarif p").replaceWith("<p class='mb-1'>322,<span>38</span>€<span>*</span></p>"); 
        $("#nombre p").replaceWith("<p>322,<span>38</span>€<span>*</span></p>"); 
        $("#total_nombre p").replaceWith("<p>322,<span>38</span>€<span>*</span></p>"); 
    }
    if($('#an').hasClass('active') && $('#risques').hasClass('active'))
    {
        $("#total p").replaceWith("<p class='mb-1'>330,<span>63</span>€<span>*</span></p>");
        $("#total_tarif p").replaceWith("<p class='mb-1'>330,<span>63</span>€<span>*</span></p>");
        $("#nombre p").replaceWith("<p>330,<span>63</span>€<span>*</span></p>");
        $("#total_nombre p").replaceWith("<p>330,<span>63</span>€<span>*</span></p>");
    }
}
$(document).ready(function()
{
    $("#mois, #an, #tiers, #maxi, #risques, .ajout, .suppression").click(cliquer);
});
