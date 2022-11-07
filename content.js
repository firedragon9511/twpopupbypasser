/**
 * by firedragon9511 test
 */

setInterval(() => {
    if(document.documentElement.style["overflow-y"] == "hidden"){
        document.documentElement.style["overflow-y"] = "scroll";
        var elements =  document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1kihuf0 r-18u37iz r-1pi2tsx r-1777fci r-1pjcn9w r-xr3zp9 r-1xcajam r-ipm5af r-g6jmlv");
        if (elements.length > 0){
            elements[0].remove();
        }
    }
}, 100);