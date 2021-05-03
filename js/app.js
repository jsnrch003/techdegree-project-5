function getCaption() {
    let input = document.getElementById('myInput');
    input.value = input.value.toLowerCase();
    console.log(input.value);
    const img = document.getElementsByTagName('a');


    for (i = 0; i < img.length; i++) {
        let text = document.getElementsByTagName('a')[i].getAttribute('data-caption');
        let result = text.includes(input.value);
        console.log(result);
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