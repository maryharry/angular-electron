function sidewidth() {
    if (screen.width > 800) {
        var x = document.getElementById("mySidebar").style.width = "100px";
    } else {
        document.getElementById("mySidebar").style.width = "75px";
        document.getElementById("openbtn").style.paddingLeft = "1.3rem";
        $(document).ready(function() {
            $(".left-icons").hover(function() {
                $(this).css("padding", "17px 5px 15px 18px");
            }, function() {
                $(this).css("padding", "17px 5px 15px 18px");
            });
        });
    }

}


function openNav() {
    var width_side = document.getElementById("mySidebar");
    var side_value = width_side.offsetWidth;
    if (side_value < 200) {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("menus").style.display = "block";
        document.getElementById("menus1").style.display = "block";
        document.getElementById("menus2").style.display = "block";
        document.getElementById("menus3").style.display = "block";
        document.getElementById("menus4").style.display = "block";
        document.getElementById("menus5").style.display = "block";
        document.getElementById("menus6").style.display = "block";
        $(document).ready(function() {
            $(".left-icons").hover(function() {
                $(this).css("padding", "15px 55px 15px 60px");
            }, function() {
                $(this).css("padding", "15px 55px 15px 60px");
            });
        });
    } else {
        if (screen.width > 800) {
            document.getElementById("mySidebar").style.width = "100px";
            $(document).ready(function() {
                $(".left-icons").hover(function() {
                    $(this).css("padding", "17px 5px 15px 30px");
                }, function() {
                    $(this).css("padding", "17px 5px 15px 0px");
                });
            });
        } else {
            document.getElementById("mySidebar").style.width = "75px";
            $(document).ready(function() {
                $(".left-icons").hover(function() {
                    $(this).css("padding", "17px 5px 15px 17px");
                }, function() {});
            });
        }
        document.getElementById("main").style.marginLeft = "0px";
        document.getElementById("menus").style.display = "none";
        document.getElementById("menus1").style.display = "none";
        document.getElementById("menus2").style.display = "none";
        document.getElementById("menus3").style.display = "none";
        document.getElementById("menus4").style.display = "none";
        document.getElementById("menus5").style.display = "none";
        document.getElementById("menus6").style.display = "none";
    }

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "100px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("menus").style.display = "none";
    document.getElementById("menus1").style.display = "none";
    document.getElementById("menus2").style.display = "none";
    document.getElementById("menus3").style.display = "none";
    document.getElementById("menus4").style.display = "none";
    document.getElementById("menus5").style.display = "none";
    document.getElementById("menus6").style.display = "none";
    $(document).ready(function() {
        $(".left-icons").hover(function() {
            $(this).css("padding", "17px 5px 15px 30px");
        }, function() {
            $(this).css("padding", "17px 5px 15px 0px");
        });
    });

}