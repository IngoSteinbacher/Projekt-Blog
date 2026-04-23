document.addEventListener("DOMContentLoaded", function() {
    // Header laden
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    // Footer laden
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});