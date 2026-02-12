
document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel', // или 'slider'
        perView: 8,       // сколько слайдов видно за раз
        gap: 16,          // отступы между ними
        autoplay: 1000,
        hoverpause: true,// автопрокрутка (мс), если нужно
    }).mount();
        $( function() {
            $( "#accordion" ).accordion();
        } );
        const subscribeBTN = document.querySelector(".subscribe_btn")
        if (!subscribeBTN) return;
        function changeValues(){
            if (window.innerWidth <= 850) {
                subscribeBTN.textContent = "Subscribe";
            } else {
                subscribeBTN.textContent = "Subscribe to Our Newsletter";
            }
        }
        changeValues()
        window.addEventListener("resize", changeValues);

    }
);
