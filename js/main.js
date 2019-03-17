App = {};

(function () {

    'use strict';

    var Home = {

        init: function () {
        	this.bindEvents();
            this.scrollReveal();
            this.ratting();
            this.navigation();
        },

        bindEvents: function () {
        	$('.year').text(new Date().getFullYear());
		    // $('.main-menu li a').on('click', function() {
		    //     $('.main-menu li.active').removeClass('active');
		    //     $(this).closest('li').addClass('active');
		    // });
		    $('.mobile-menu-trigger').on('click', function() {
		        $('.mobile-menu-holder').slideToggle(200);
		    });
        },

        scrollReveal: function () {
            window.sr = ScrollReveal();
            sr.reveal('.sreveal', { duration: 300, reset: true, delay: 100 });
            if (sr.isSupported()) {
                document.documentElement.classList.add('sr');
            }
        },

        ratting: function () {
            switch(window.location.protocol) {
                case 'http:':
                case 'https:':
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
                break;
                case 'file:':
                    //showDialog();
                break;
                default:
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
            }
        },

        navigation: function () {
            jQuery('.main-menu').onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
                begin: function() {
                    //I get fired when the animation is starting
                },
                end: function() {
                    //I get fired when the animation is ending
                },
                scrollChange: function($currentListItem) {
                    //I get fired when you enter a section and I pass the list item of the section
                }
            });
        }
    }

    App.Home = Home;
})();

jQuery(document).ready(function () {
    App.Home.init();
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});

var app = angular.module('company', ['ngSanitize']);

app.constant("verion", "3.8");
app.constant("layouts", "132");
app.run(function ($rootScope, verion, layouts) {
  $rootScope.verion = verion;
  $rootScope.layouts = layouts;
});

app.controller('demosController', function(){
    this.demo = demolist;
});

app.controller('industriesController', function(){
    this.industry = industrylist;
});

app.controller('customsController', function(){
    this.industry = customlist;
});

app.controller('soonsController', function(){
    this.soon = soonlist;
});

var demolist = [
    {
        image: 'images/screens/40432.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> 404 Error Page',
        url: '../VR Polar Scene/404.html',
    },
    {
        image: 'images/screens/soon32.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> Coming Soon',
        url: '../VR Polar Scene/comingsoon.html',
    },
    {
        image: 'images/screens/sale32.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> Domain For Sale',
        url: '../VR Polar Scene/domainforsale.html',
    },

    {
        image: 'images/screens/40431.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> 404 Error Page',
        url: '../VR Woods Scene/404.html',
    },
    {
        image: 'images/screens/soon31.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> Coming Soon',
        url: '../VR Woods Scene/comingsoon.html',
    },
    {
        image: 'images/screens/sale31.jpg',
        header: '<span class="popular">VR</span> <span>NEW</span> Domain For Sale',
        url: '../VR Woods Scene/domainforsale.html',
    },

    {
        image: 'images/screens/40430.jpg',
        header: '404 Error Page',
        url: '../Confetti/404/index.html',
    },
    {
        image: 'images/screens/soon30.jpg',
        header: 'Coming Soon',
        url: '../Confetti/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale30.jpg',
        header: 'Domain For Sale',
        url: '../Confetti/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40429.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Triangles/404/index.html',
    },
    {
        image: 'images/screens/soon29.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Triangles/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale29.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Triangles/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40428.jpg',
        header: '404 Error Page',
        url: '../Starfield/404/index.html',
    },
    {
        image: 'images/screens/soon28.jpg',
        header: 'Coming Soon',
        url: '../Starfield/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale28.jpg',
        header: 'Domain For Sale',
        url: '../Starfield/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40427.jpg',
        header: '404 Error Page',
        url: '../Furniture Store/404/index.html',
    },
    {
        image: 'images/screens/soon27.jpg',
        header: 'Coming Soon',
        url: '../Furniture Store/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale27.jpg',
        header: 'Domain For Sale',
        url: '../Furniture Store/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40425.jpg',
        header: '404 Error Page',
        url: '../Duck Hunt/404/index.html',
    },
    {
        image: 'images/screens/soon25.jpg',
        header: 'Coming Soon',
        url: '../Duck Hunt/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale25.jpg',
        header: 'Domain For Sale',
        url: '../Duck Hunt/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40424.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Poly World 3D/404/index.html',
    },
    {
        image: 'images/screens/soon24.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Poly World 3D/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale24.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Poly World 3D/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40423.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Parallax Worktop/404/index.html',
    },
    {
        image: 'images/screens/soon23.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Parallax Worktop/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale23.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Parallax Worktop/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40426.jpg',
        header: '404 Error Page',
        url: '../Easter Bunny/404/index.html',
    },
    {
        image: 'images/screens/soon26.jpg',
        header: 'Coming Soon',
        url: '../Easter Bunny/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale26.jpg',
        header: 'Domain For Sale',
        url: '../Easter Bunny/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40422.jpg',
        header: '404 Error Page',
        url: '../Skate/404/index.html',
    },
    {
        image: 'images/screens/soon22.jpg',
        header: 'Coming Soon',
        url: '../Skate/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale22.jpg',
        header: 'Domain For Sale',
        url: '../Skate/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40421.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Jumping Balls/404/index.html',
    },
    {
        image: 'images/screens/soon21.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Jumping Balls/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale21.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Jumping Balls/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40420.jpg',
        header: '404 Error Page',
        url: '../Tower Blocks/404/index.html',
    },
    {
        image: 'images/screens/soon20.jpg',
        header: 'Coming Soon',
        url: '../Tower Blocks/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale20.jpg',
        header: 'Domain For Sale',
        url: '../Tower Blocks/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40419.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Webflow/404/index.html',
    },
    {
        image: 'images/screens/soon19.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Webflow/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale19.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Webflow/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40418.jpg',
        header: '404 Error Page',
        url: '../Crypto Gainers/404/index.html',
    },
    {
        image: 'images/screens/soon18.jpg',
        header: 'Coming Soon',
        url: '../Crypto Gainers/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale18.jpg',
        header: 'Domain For Sale',
        url: '../Crypto Gainers/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40417.jpg',
        header: '404 Error Page',
        url: '../Snow/404/index.html',
    },
    {
        image: 'images/screens/soon17.jpg',
        header: 'Coming Soon',
        url: '../Snow/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale17.jpg',
        header: 'Domain For Sale',
        url: '../Snow/Domain For Sale/index.html',
    },
    
    {
        image: 'images/screens/40416.jpg',
        header: '404 Error Page',
        url: '../Colorful Madnes Game/404/index.html',
    },
    {
        image: 'images/screens/soon16.jpg',
        header: 'Coming Soon',
        url: '../Colorful Madnes Game/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale16.jpg',
        header: 'Domain For Sale',
        url: '../Colorful Madnes Game/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40415.jpg',
        header: '404 Error Page',
        url: '../Retro Mac OS Window/404/index.html',
    },
    {
        image: 'images/screens/soon15.jpg',
        header: 'Coming Soon',
        url: '../Retro Mac OS Window/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale15.jpg',
        header: 'Domain For Sale',
        url: '../Retro Mac OS Window/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40414.jpg',
        header: '404 Error Page',
        url: '../Gradient Background/404/index.html',
    },
    {
        image: 'images/screens/soon14.jpg',
        header: 'Coming Soon',
        url: '../Gradient Background/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale14.jpg',
        header: 'Domain For Sale',
        url: '../Gradient Background/Domain For Sale/index.html',
    },

	{
        image: 'images/screens/40413.jpg',
        header: '404 Error Page',
        url: '../Dog/404/index.html',
    },
    {
        image: 'images/screens/soon13.jpg',
        header: 'Coming Soon',
        url: '../Dog/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale13.jpg',
        header: 'Domain For Sale',
        url: '../Dog/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40412.jpg',
        header: '404 Error Page',
        url: '../Halloween/404/index.html',
    },
    {
        image: 'images/screens/soon12.jpg',
        header: 'Coming Soon',
        url: '../Halloween/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale12.jpg',
        header: 'Domain For Sale',
        url: '../Halloween/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40411.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Cat Swinging/404/index.html',
    },
    {
        image: 'images/screens/soon11.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Cat Swinging/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale11.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Cat Swinging/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/40410.jpg',
        header: '404 Error Page',
        url: '../Word Search/404/index.html',
    },
    {
        image: 'images/screens/soon10.jpg',
        header: 'Coming Soon',
        url: '../Word Search/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale10.jpg',
        header: 'Domain For Sale',
        url: '../Word Search/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4049.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Falling Confetti/404/index.html',
    },
    {
        image: 'images/screens/soon9.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Falling Confetti/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale9.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Falling Confetti/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4044.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Rabbit 3D/404/index.html',
    },
    {
        image: 'images/screens/soon4.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Rabbit 3D/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale4.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Rabbit 3D/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4047.jpg',
        header: '404 Error Page',
        url: '../Cat/404/index.html',
    },
    {
        image: 'images/screens/soon7.jpg',
        header: 'Coming Soon',
        url: '../Cat/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale7.jpg',
        header: 'Domain For Sale',
        url: '../Cat/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4048.jpg',
        header: '404 Error Page',
        url: '../Space Elevator/404/index.html',
    },
    {
        image: 'images/screens/soon8.jpg',
        header: 'Coming Soon',
        url: '../Space Elevator/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale8.jpg',
        header: 'Domain For Sale',
        url: '../Space Elevator/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4046.jpg',
        header: '404 Error Page',
        url: '../Interactive Parallax/404/index.html',
    },
    {
        image: 'images/screens/soon6.jpg',
        header: 'Coming Soon',
        url: '../Interactive Parallax/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale6.jpg',
        header: 'Domain For Sale',
        url: '../Interactive Parallax/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4041.jpg',
        header: '404 Error Page',
        url: '../Orbs/404/index.html',
    },
    {
        image: 'images/screens/soon1.jpg',
        header: 'Coming Soon',
        url: '../Orbs/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale1.jpg',
        header: 'Domain For Sale',
        url: '../Orbs/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4042.jpg',
        header: '404 Error Page',
        url: '../Gravity/404/index.html',
    },
    {
        image: 'images/screens/soon2.jpg',
        header: 'Coming Soon',
        url: '../Gravity/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale2.jpg',
        header: 'Domain For Sale',
        url: '../Gravity/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4043.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Parallax/404/index.html',
    },
    {
        image: 'images/screens/soon3.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Parallax/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale3.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Parallax/Domain For Sale/index.html',
    },

    {
        image: 'images/screens/4045.jpg',
        header: '<span class="popular">POPULAR</span> 404 Error Page',
        url: '../Ultimate Slider/404/index.html',
    },
    {
        image: 'images/screens/soon5.jpg',
        header: '<span class="popular">POPULAR</span> Coming Soon',
        url: '../Ultimate Slider/Coming Soon/index.html',
    },
    {
        image: 'images/screens/sale5.jpg',
        header: '<span class="popular">POPULAR</span> Domain For Sale',
        url: '../Ultimate Slider/Domain For Sale/index.html',
    }
];

var industrylist = [
    {
        image: 'images/screens/industries/app-404.jpg',
        header: '<span>NEW</span> App - 404 Error Page',
        url: '../Industries/404/app.html',
    },
    {
        image: 'images/screens/industries/app-soon.jpg',
        header: '<span>NEW</span> App - Coming Soon',
        url: '../Industries/Coming Soon/app.html',
    },
    {
        image: 'images/screens/industries/app-sale.jpg',
        header: '<span>NEW</span> App - Domain For Sale',
        url: '../Industries/Domain For Sale/app.html',
    },

    {
        image: 'images/screens/industries/spa-404.jpg',
        header: '<span>NEW</span> Spa - 404 Error Page',
        url: '../Industries/404/spa.html',
    },
    {
        image: 'images/screens/industries/spa-soon.jpg',
        header: '<span>NEW</span> Spa - Coming Soon',
        url: '../Industries/Coming Soon/spa.html',
    },
    {
        image: 'images/screens/industries/spa-sale.jpg',
        header: '<span>NEW</span> Spa - Domain For Sale',
        url: '../Industries/Domain For Sale/spa.html',
    },

    {
        image: 'images/screens/industries/pizzeria-404.jpg',
        header: '<span>NEW</span> Pizzeria - 404 Error Page',
        url: '../Industries/404/pizzeria.html',
    },
    {
        image: 'images/screens/industries/pizzeria-soon.jpg',
        header: '<span>NEW</span> Pizzeria - Coming Soon',
        url: '../Industries/Coming Soon/pizzeria.html',
    },
    {
        image: 'images/screens/industries/pizzeria-sale.jpg',
        header: '<span>NEW</span> Pizzeria - Domain For Sale',
        url: '../Industries/Domain For Sale/pizzeria.html',
    },

    {
        image: 'images/screens/industries/naval-404.jpg',
        header: '<span>NEW</span> Naval - 404 Error Page',
        url: '../Industries/404/naval.html',
    },
    {
        image: 'images/screens/industries/naval-soon.jpg',
        header: '<span>NEW</span> Naval - Coming Soon',
        url: '../Industries/Coming Soon/naval.html',
    },
    {
        image: 'images/screens/industries/naval-sale.jpg',
        header: '<span>NEW</span> Naval - Domain For Sale',
        url: '../Industries/Domain For Sale/naval.html',
    },

    {
        image: 'images/screens/industries/cv-404.jpg',
        header: '<span>NEW</span> CV - 404 Error Page',
        url: '../Industries/404/cv.html',
    },
    {
        image: 'images/screens/industries/cv-soon.jpg',
        header: '<span>NEW</span> CV - Coming Soon',
        url: '../Industries/Coming Soon/cv.html',
    },
    {
        image: 'images/screens/industries/cv-sale.jpg',
        header: '<span>NEW</span> CV - Domain For Sale',
        url: '../Industries/Domain For Sale/cv.html',
    },

    {
        image: 'images/screens/industries/flower-shop-404.jpg',
        header: 'Flower Shop - 404 Error Page',
        url: '../Industries/404/flower-shop.html',
    },
    {
        image: 'images/screens/industries/flower-shop-soon.jpg',
        header: 'Flower Shop - Coming Soon',
        url: '../Industries/Coming Soon/flower-shop.html',
    },
    {
        image: 'images/screens/industries/flower-shop-sale.jpg',
        header: 'Flower Shop - Domain For Sale',
        url: '../Industries/Domain For Sale/flower-shop.html',
    },

    {
        image: 'images/screens/industries/photography-404.jpg',
        header: 'Photography - 404 Error Page',
        url: '../Industries/404/photography.html',
    },
    {
        image: 'images/screens/industries/photography-soon.jpg',
        header: 'Photography - Coming Soon',
        url: '../Industries/Coming Soon/photography.html',
    },
    {
        image: 'images/screens/industries/photography-sale.jpg',
        header: 'Photography - Domain For Sale',
        url: '../Industries/Domain For Sale/photography.html',
    },

    {
        image: 'images/screens/industries/restaurant-404.jpg',
        header: 'Restaurant - 404 Error Page',
        url: '../Industries/404/restaurant.html',
    },
    {
        image: 'images/screens/industries/restaurant-soon.jpg',
        header: 'Restaurant - Coming Soon',
        url: '../Industries/Coming Soon/restaurant.html',
    },
    {
        image: 'images/screens/industries/restaurant-sale.jpg',
        header: 'Restaurant - Domain For Sale',
        url: '../Industries/Domain For Sale/restaurant.html',
    },

    {
        image: 'images/screens/industries/yoga-404.jpg',
        header: 'Yoga - 404 Error Page',
        url: '../Industries/404/yoga.html',
    },
    {
        image: 'images/screens/industries/yoga-soon.jpg',
        header: 'Yoga - Coming Soon',
        url: '../Industries/Coming Soon/yoga.html',
    },
    {
        image: 'images/screens/industries/yoga-sale.jpg',
        header: 'Yoga - Domain For Sale',
        url: '../Industries/Domain For Sale/yoga.html',
    },

    {
        image: 'images/screens/industries/fitness-404.jpg',
        header: 'Fitness - 404 Error Page',
        url: '../Industries/404/fitness.html',
    },
    {
        image: 'images/screens/industries/fitness-soon.jpg',
        header: 'Fitness - Coming Soon',
        url: '../Industries/Coming Soon/fitness.html',
    },
    {
        image: 'images/screens/industries/fitness-sale.jpg',
        header: 'Fitness - Domain For Sale',
        url: '../Industries/Domain For Sale/fitness.html',
    },

    {
        image: 'images/screens/industries/agency-404.jpg',
        header: 'Agency - 404 Error Page',
        url: '../Industries/404/agency.html',
    },
    {
        image: 'images/screens/industries/agency-soon.jpg',
        header: 'Agency - Coming Soon',
        url: '../Industries/Coming Soon/agency.html',
    },
    {
        image: 'images/screens/industries/agency-sale.jpg',
        header: 'Agency - Domain For Sale',
        url: '../Industries/Domain For Sale/agency.html',
    }
];

var customlist = [
    {
        image: 'images/screens/customwork/404-moon.jpg',
        header: '<span>NEW</span> Moon - 404 Error Page',
        url: '../Custom Work/404/Moon/index.html',
    },
    {
        image: 'images/screens/customwork/404-picklerick.jpg',
        header: '<span>NEW</span> Pickle Rick Sliced - 404',
        url: '../Custom Work/404/Pickle Rick Sliced/index.html',
    },
    {
        image: 'images/screens/customwork/soon-citymap.jpg',
        header: '<span>NEW</span> City Map - Coming Soon',
        url: '../Custom Work/Coming Soon/City Map/index.html',
    }
];

var soonlist = [
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    },
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    },
    {
        image: 'images/soon.jpg',
        header: 'On the next week.',
        url: '#',
    }
];

var isOpenRegForm = false;
var timeoutId = setTimeout(function () {
    showRegistration();
    jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
    jQuery('.reg_container').addClass("reg_container_open");
    jQuery('#registered_email').focus();
    isOpenRegForm = true;
}, 40000);

jQuery('.reg_optionbtn').click(function () {
    if (isOpenRegForm == true) {
        hideRegistration();
        isOpenRegForm = false;
        jQuery('.reg_optionbtn').html("<i class='fa fa-star' aria-hidden='true'></i>").removeClass("optionbtn_open");
        jQuery('.reg_container').removeClass("reg_container_open");
    } else {
        showRegistration();
        jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
        jQuery('.reg_container').addClass("reg_container_open");
        jQuery('#registered_email').focus();
        isOpenRegForm = true;
    }
});
jQuery('#reg_submit').click(function (e) {
    if (!regFormValidation()) {
        e.preventDefault();
    }
});
function regFormValidation() {
    var valid_reg = jQuery('#registered_email').val().length;
    if (valid_reg == 0) {
        jQuery('#registered_email').css('border-color', 'red');
        return false;
    }
    return true;
}
function hideRegistration() {
    jQuery('.reg_container').animate({
        right: '-300px'
    }, 500);
};
function showRegistration() {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    jQuery('.reg_container').animate({
        right: '0px'
    }, 500);
};