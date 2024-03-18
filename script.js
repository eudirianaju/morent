document.addEventListener('DOMContentLoaded', function () {
    var hearts = document.getElementsByClassName('heart');
    for (var i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener('click', function () {
            var imgSrc = this.getAttribute('src');
            if (imgSrc === 'img/coracaovazio.jpg') {
                this.setAttribute('src', 'img/coracaovermelho.jpg');
            } else {
                this.setAttribute('src', 'img/coracaovazio.jpg');
            }
        });
    }


    const priceSlider = document.getElementById('priceSlider');
    const currentPrice = document.getElementById('currentPrice');

    priceSlider.addEventListener('input', () => {
        const price = priceSlider.value;
        currentPrice.textContent = `$${price}`;
    });

    $("#datepicker").datepicker();
    $("#timepicker").timepicker();

    window.addEventListener('resize', function () {
        var screenWidth = window.innerWidth;

        if (screenWidth <= 767) {
            var h1b = document.getElementById('h1b');
            var brElements = h1b.getElementsByTagName('br');

            for (var i = 0; i < brElements.length; i++) {
                brElements[i].parentNode.removeChild(brElements[i]);
            }
        }
    });
});
