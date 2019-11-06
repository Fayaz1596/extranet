function redimensionner(e)
{
    if("matchMedia" in window)
    {
        if(window.matchMedia('(max-width: 1199.98px)').matches)
        {
            /* Camembert */

            var colors = ['#ce4360','#61258d'];

            var donutOptions = 
            {
                cutoutPercentage: 86,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips: {
                    yAlign: 'top',
                    bodyFontSize: 11,
                    bodyFontFamily: 'Roboto'
                }
            };

            var chDonutData = 
            {
                labels: [' Contrats signés ', ' Contrats en instance '],
                datasets: 
                [
                    {
                        backgroundColor: colors.slice(0,3),
                        borderWidth: 0,
                        data: [100, 240]
                    }
                ]
            };

            var chDonut = document.getElementById("chDonut");
            if(chDonut) 
            {
                new Chart(chDonut, 
                {
                    type: 'pie',
                    data: chDonutData,
                    options: donutOptions
                });
            }



            /* Graphique */

            var ctx = document.getElementById('myChart1').getContext('2d');

            var chart = new Chart(ctx, 
            {
                type: 'line',

                data: {
                    labels: ['', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                    datasets: [
                    {
                        label: "Sur la borne",
                        fill: 'false',
                        lineTension: 0,
                        backgroundColor: '#ce4360',
                        borderColor: '#ce4360',
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#ce4360',
                        pointBorderWidth: 2,
                        pointRadius: [0, 5, 5, 5, 5, 5, 5],
                        data: [105, 100, 150, 45, 55, 120, 140]
                    },
                    {
                        label: "SpeedTarif.fr",
                        fill: 'false',
                        lineTension: 0,
                        backgroundColor: '#61258d',
                        borderColor: '#61258d',
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#61258d',
                        pointBorderWidth: 2,
                        pointRadius: [0, 5, 5, 5, 5, 5, 5],
                        data: [0, 45, 40, 65, 95, 85, 105]
                    }]
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 250,
                                maxTicksLimit: 6,
                                fontFamily: 'AvenirDemiBold',
                                fontSize: 12
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                color: 'white'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Semaine 25',
                                fontSize: 12,
                                fontFamily: 'AvenirDemiBold',
                                padding: {
                                    top: 15
                                }
                            },
                            ticks: {
                                fontFamily: 'AvenirDemiBold',
                                fontSize: 12
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    maintainAspectRatio: false
                }
            });
        }
        
        else
        {
            /* Camembert */

            var colors = ['#ce4360','#61258d'];

            var donutOptions = 
            {
                cutoutPercentage: 88,
                legend:{
                    display: false
                }
            };

            var chDonutData = 
            {
                labels: [' Contrats signés ', ' Contrats en instance '],
                datasets: 
                [
                    {
                        backgroundColor: colors.slice(0,3),
                        borderWidth: 0,
                        data: [100, 240]
                    }
                ]
            };

            var chDonut = document.getElementById("chDonut");
            if (chDonut) 
            {
                new Chart(chDonut, 
                {
                    type: 'pie',
                    data: chDonutData,
                    options: donutOptions
                });
            }



            /* Graphique */

            var ctx = document.getElementById('myChart').getContext('2d');

            var chart = new Chart(ctx, 
            {
                type: 'line',

                data: {
                    labels: ['', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                    datasets: [
                    {
                        label: "Sur la borne",
                        fill: 'false',
                        lineTension: 0,
                        backgroundColor: '#ce4360',
                        borderColor: '#ce4360',
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#ce4360',
                        pointBorderWidth: 2,
                        pointRadius: [0, 5, 5, 5, 5, 5, 5],
                        data: [0, 40, 60, 55, 60, 55, 80]
                    },
                    {
                        label: "SpeedTarif.fr",
                        fill: 'false',
                        lineTension: 0,
                        backgroundColor: '#61258d',
                        borderColor: '#61258d',
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#61258d',
                        pointBorderWidth: 2,
                        pointRadius: [0, 5, 5, 5, 5, 5, 5],
                        data: [0, 50, 45, 65, 100, 90, 110]
                    }]
                },

                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 200,
                                maxTicksLimit: 5,
                                fontFamily: 'AvenirDemiBold'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Consumption',
                                fontSize: 14,
                                fontFamily: 'AvenirDemiBold',
                                padding: {
                                    bottom: 25
                                }
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                color: 'white'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Semaine 25',
                                fontSize: 14,
                                fontFamily: 'AvenirDemiBold',
                                padding: {
                                    top: 20
                                }
                            },
                            ticks: {
                                fontFamily: 'AvenirDemiBold'
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    maintainAspectRatio: false
                }
            });
        }
    }
}

function redimensionner1(e)
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
window.addEventListener('resize', redimensionner1, false);

redimensionner();
redimensionner1();
