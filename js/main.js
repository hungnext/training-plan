// Initialize and add the map
function initMap() {
    // Your Location
    const loc = { lat: 16.463859, lng: 107.6077933 };

    // Centerd map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 14
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Stick menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.7;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        // const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(this.hash).offset().top - 76
            },
            800
        );
    }
});
