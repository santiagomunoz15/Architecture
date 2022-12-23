
var f1 = document.getElementsByClassName('footer-left-1');
var f2 = document.getElementsByClassName('footer-left-2');
var f3 = document.getElementsByClassName('footer-left-3');
var f4 = document.getElementsByClassName('footer-left-4');

var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');

var mobileM1 = document.getElementById('footer-left-collapsible-1');
var mobileM2 = document.getElementById('footer-left-collapsible-2');
var mobileM3 = document.getElementById('footer-left-collapsible-3');
var mobileM4 = document.getElementById('footer-left-collapsible-4');

var headerMobile = document.getElementById('mobile-title');
var headerMobileDisplay = window.getComputedStyle(headerMobile).display;

var arrow1 = document.getElementById('footer-left-arrow1');

var hover;

f1[0].addEventListener('mouseover', footerMenu1);
f2[0].addEventListener('mouseover', footerMenu2);
f3[0].addEventListener('mouseover', footerMenu3);
f4[0].addEventListener('mouseover', footerMenu4);

f1[0].addEventListener('mouseout', removeFooterMenu1);
f2[0].addEventListener('mouseout', removeFooterMenu2);
f3[0].addEventListener('mouseout', removeFooterMenu3);
f4[0].addEventListener('mouseout', removeFooterMenu4);

f1[0].addEventListener('click', footerMenuCollapsible1);
f2[0].addEventListener('click', footerMenuCollapsible2);
f3[0].addEventListener('click', footerMenuCollapsible3);
f4[0].addEventListener('click', footerMenuCollapsible4);



//      Add the menu     //

function footerMenu1 () {
    if (headerMobileDisplay == 'grid') {
            m1.style.display = "none";
    }
    else {
        m1.style.display = "grid";
    }
}

function footerMenu2 () {
    if (headerMobileDisplay == 'grid') {
            m2.style.display = "none";
    }
    else {
        m2.style.display = "grid";
    }
}


function footerMenu3 () {
    if (headerMobileDisplay == 'grid') {
            m3.style.display = "none";
    }
    else {
        m3.style.display = "grid";
    }
}

function footerMenu4 () {
    if (headerMobileDisplay == 'grid') {
            m4.style.display = "none";
    }
    else {
        m4.style.display = "grid";
    }
}




//      Remove the menu      //

function removeFooterMenu1 () {
    m1.style.display = "none";
}

function removeFooterMenu2 () {
    m2.style.display = "none";
}

function removeFooterMenu3 () {
    m3.style.display = "none";
}

function removeFooterMenu4 () {
    m4.style.display = "none";
}




//      Mobile menu     //

function footerMenuCollapsible1 () {
    if (headerMobileDisplay == 'grid') {

        if (mobileM1.style.display == "grid") {
            mobileM1.style.display = "none";
            
        }
        
        else {
            mobileM1.style.display = "grid"
        }
        
    }
    
    else {
        mobileM1.style.display = "none";
    }

}

function footerMenuCollapsible2 () {
    if (headerMobileDisplay == 'grid') {

        if (mobileM2.style.display == "grid") {
            mobileM2.style.display = "none";
            
        }
        
        else {
            mobileM2.style.display = "grid"
        }
        
    }
    
    else {
        mobileM2.style.display = "none";
    }

    
}

function footerMenuCollapsible3 () {
    if (headerMobileDisplay == 'grid') {

        if (mobileM3.style.display == "grid") {
            mobileM3.style.display = "none";
            
        }
        
        else {
            mobileM3.style.display = "grid"
        }
        
    }
    
    else {
        mobileM3.style.display = "none";
    }

}

function footerMenuCollapsible4 () {
    if (headerMobileDisplay == 'grid') {

        if (mobileM4.style.display == "grid") {
            mobileM4.style.display = "none";
            
        }
        
        else {
            mobileM4.style.display = "grid"
        }
        
    }
    
    else {
        mobileM4.style.display = "none";
    }

}