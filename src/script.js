function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    document.getElementById('btn-' + pageId).classList.add('active');
}
