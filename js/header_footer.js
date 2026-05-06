document.addEventListener("DOMContentLoaded", function() {
    
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });


    fetch("footer_header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer_header-placeholder").innerHTML = data;
        });

});