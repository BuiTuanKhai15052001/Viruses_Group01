let years = document.querySelector('.year').children;
let virus_list = document.querySelector('.virus_parent').children;
let readmore123 = document.getElementsByClassName('bottom');
for (let i of virus_list) {
    const name = i.querySelector('strong');
    const x = name.textContent;
    i.setAttribute('data-category', x);
}
for (let i = 0; i < years.length; i++) {
    years[i].onclick = function () {
        for (let x = 0; x < years.length; x++) {
            years[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');

        for (let z = 0; z < virus_list.length; z++) {
            virus_list[z].style.transform = 'scale(0)';
            virus_list[z].style.dispaly = 'none';
            virus_list[z].classList.add('broken');
            // setTimeout(() => {
            //     virus_list[z].style.dispaly = 'none';
            // }, 500);
            if ((virus_list[z].getAttribute('data-category') == displayItems) || displayItems == 'all') {
                virus_list[z].style.transform = 'scale(1)';
                virus_list[z].style.dispaly = 'block';
                virus_list[z].classList.remove('broken');
                // setTimeout(() => {
                //     virus_list[z].style.dispaly = 'gird';
                // }, 500);
            }

        }
    }
}
readmore123.addEventListener("click", function () {
    window.open('readmore.html');
})