window.onload = function() {
    document.getElementById("loading").style.display = "none";
    document.body.style.overflowY = "clip";

    function counter(valueDisplays) {
        let interval = 1000;

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-number"));
            if (endValue > 499) {
                startValue = 300;
            }
            if (endValue > 899) {
                startValue = 800;
            }
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function() {

                startValue += 1;

                valueDisplay.innerHTML = startValue + "+";

                if (startValue >= endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }



    if (document.getElementById("hook") != null) {
        document.getElementById("hook").style.animation = "lights 1s ease-in-out";
        setTimeout(() => {
            document.getElementById("hook").style.left = "0%";
        }, 1000)

        setTimeout(() => {
            document.getElementById("hook").style.color = "#fff";
        }, 800);
    }

    document.onscroll = function() {

        fadEIn = $(".fadeIn");
        for (var i = 0; i < fadEIn.length; i++) {
            if (isInViewport(fadEIn[i])) {
                fadEIn[i].style.opacity = 1;
            }
        }
        fadeUp = $(".fadeUp");
        for (var i = 0; i < fadeUp.length; i++) {
            if (isInViewport(fadeUp[i])) {
                fadeUp[i].style.opacity = 1;
                fadeUp[i].style.bottom = 0;
            }
        }


        scrll = window.scrollY;
        if ($("#l-p1") != null) {
            if (scrll > 300) {
                $("#l-p1").animate({
                    bottom: '0px',
                    opacity: '1',
                });
            }
            if (scrll > 400) {
                $('#btnc-1').animate({
                    bottom: '0px',
                    opacity: '1',
                });
            }
            if (scrll > 800) {
                $("#s2-h1").animate({
                    bottom: '0px',
                    opacity: '1',
                });
            }
            if (scrll > 4260) {
                ele = document.querySelectorAll(".count-number");
                if (ele[0] != null) {
                    if (ele[0].innerHTML == 0) {
                        counter(ele);
                    }
                    $("#portfolio-pix").css("display", "grid");
                    $("#portfolio-pix").css("animation", "float-in 5s ease");
                    $(".lines").css("height", "4px");
                }
            }

            if (screen.width < 450) {

                if (scrll > 100) {
                    $("#l-p1").animate({
                        bottom: '0px',
                        opacity: '1',
                    });
                }
                if (scrll > 270) {
                    $('#btnc-1').animate({
                        bottom: '0px',
                        opacity: '1',
                    });
                }
                if (scrll > 400) {
                    $("#s2-h1").animate({
                        bottom: '0px',
                        opacity: '1',
                    });
                }


                if ((scrll > 2600) && ($(".count-number")[0] != undefined)) {

                    ele = document.querySelectorAll(".count-number")
                    if (ele[0] != null) {
                        if (ele[0].innerHTML == 0) {
                            counter(ele);
                        }
                        $("#portfolio-pix").css("display", "grid")
                        $("#portfolio-pix").css("animation", "float-in 3s ease")
                        $(".lines").css("height", "4px");
                    }
                }
            }
        }

    }


    var opp = false;
    accordianToggle = $(".accordian-toggle");
    for (var i = 0; i < accordianToggle.length; i++) {
        accordianToggle[i].addEventListener("click", function(e) {
            e.stopPropagation();
            e.target.classList.toggle("accordian-toggle-active");
            ele = e.target.parentNode.parentNode;
            ele.children[1].classList.toggle("accordian-visible");


        });
    }


}

function searchBar(e) {
    e.preventDefault();
    s = document.getElementById("s-form");
    if (s.style.display == "none") {
        s.style.display = "flex";
        document.getElementById("s-toggle").classList.remove("fa-magnifying-glass")
        document.getElementById("s-toggle").classList.add("fa-xmark")
    } else {
        s.style.display = "none";
        document.getElementById("s-toggle").classList.remove("fa-xmark")
        document.getElementById("s-toggle").classList.add("fa-magnifying-glass")
    }

}

function toggleMenu(e) {
    document.getElementsByClassName("mobile-menu")[0].classList.toggle("mobile-menu-active");
    if (document.getElementsByClassName("mobile-menu")[0].classList.contains("mobile-menu-active")) {
        appendMenu();
    } else {
        closeMenu();
    }
}

function appendMenu() {
    const menuC = document.getElementById('center-menu-append');
    const menuR = document.getElementById('right-menu-append');
    const MenuCover = document.getElementById('mobile-menu-container');
    const centerMenu = document.getElementsByClassName('center-nav');
    const rightMenu = document.getElementsByClassName('right-nav');
    const arr = centerMenu[0].children[0].children;
    const arr1 = rightMenu[0].children[0].children;
    while (arr.length != 0) {
        if (arr[0] == null) {
            break;
        }
        menuC.appendChild(arr[0]);
        menuC.children[0].classList.add("menu-item");
    }
    while (arr1.length != 0) {
        if (arr1[0] == null) {
            break;
        }
        menuR.appendChild(arr1[0]);
    }
    MenuCover.style.display = "block"
    MenuCover.style.animation = "slideIn 0.5s ease";
    document.body.style.overflowY = "hidden";

}

function closeMenu() {
    const MenuCover = document.getElementById('mobile-menu-container');
    MenuCover.style.animation = "slideOut 0.5s ease";
    setTimeout(function() {
        MenuCover.style.display = "none";
    }, 500);
    document.body.style.overflowY = "clip";
}

window.addEventListener('resize', function(event) {
    event.preventDefault();

    const menuC = document.getElementById('center-menu-append');
    const menuR = document.getElementById('right-menu-append');
    const MenuCover = document.getElementById('mobile-menu-container');
    const centerMenu = document.getElementsByClassName('center-nav');
    const rightMenu = document.getElementsByClassName('right-nav');
    const arr = centerMenu[0].children[0].children;
    const arr1 = rightMenu[0].children[0].children;

    if (screen.width > 900) {
        const arr2 = menuC.children;
        const arr3 = menuR.children;
        MenuCover.style.display = "none";
        while (arr2.length != 0) {
            if (arr2[0] == null) {
                break;
            }
            centerMenu[0].children[0].appendChild(arr2[0]);
        }

        while (arr3.length != 0) {
            if (arr3[0] == null) {
                break;
            }
            rightMenu[0].children[0].appendChild(arr3[0]);
        }
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 10 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}