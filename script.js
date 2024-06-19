document.getElementById('next').onclick = function () {
    document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' });
};

document.getElementById('prev').onclick = function () {
    document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' });
};
