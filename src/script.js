function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    if (page === 'about') {
        document.getElementById('about').classList.add('active');
        document.getElementById('why-spn').classList.add('active');
        document.getElementById('story').classList.add('active');
    } else {
        document.getElementById(page).classList.add('active');
    }
}
