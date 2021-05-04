function getCaption() {
    let input = document.getElementById('myInput');
    input.value = input.value.toLowerCase();
    const img = document.getElementsByTagName('a');


    for (i = 0; i < img.length; i++) {
        let text = document.getElementsByTagName('a')[i].getAttribute('data-caption');
        let textLC = text.toLowerCase();
        let result = textLC.includes(input.value);
        if (result === true) {
            img[i].style.display = '';
        } else {
            img[i].style.display = 'none';
        }

    }
}


window.addEventListener('load', function () {
    baguetteBox.run('.gallery');
});