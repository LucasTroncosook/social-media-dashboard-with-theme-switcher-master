document.addEventListener('DOMContentLoaded', function(){
    const body = document.querySelector('body');
    const h2Title = body.querySelector('.container .container-header .container-header-social h2');
    const cards = body.querySelectorAll('.container .container-cards .card');
    const titleOverview = body.querySelector('.container .container-overview h2');
    const cardsOverview = body.querySelectorAll('.container .container-overview .container-overview-cards .card-overview');
    const textMode = document.getElementById('mode');
    const modeDarkLight = document.getElementById('dark-mode-switch');

    const applyDarkMode= ()=>{
        textMode.textContent = `Dark Mode`;
            body.classList.remove('body');
            h2Title.classList.remove('dark-mode');
            cards.forEach(card => {
                const cardTitle = card.querySelector('.card-container .card-main h2');
                card.classList.remove('card-dark');
                cardTitle.classList.remove('card-main-dark');
            });
            titleOverview.classList.remove('title-overview');
            cardsOverview.forEach(card => {
                const cardTitle = card.querySelector('.card-overview-footer h4');
                card.classList.remove('card-overview-black');
                cardTitle.classList.remove('card-title-overview');
            });
    }

    const applyLightMode = ()=>{
        textMode.textContent = `Light Mode`;
        body.classList.add('body');
        h2Title.classList.add('dark-mode');
        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-container .card-main h2');
            card.classList.add('card-dark');
            cardTitle.classList.add('card-main-dark');
        });
        titleOverview.classList.add('title-overview');
        cardsOverview.forEach(card => {
            const cardTitle = card.querySelector('.card-overview-footer h4');
            card.classList.add('card-overview-black');
            cardTitle.classList.add('card-title-overview');
        });
    }

    const toggleDarkMode = (e) => {
        const isChecked = e.target.checked;
        localStorage.setItem('clave', isChecked);
        if (isChecked) {
            applyDarkMode();
        } else {
            applyLightMode();
        }
    };
    modeDarkLight.addEventListener('click', toggleDarkMode);

    const darkModeEnabled = localStorage.getItem('clave') === 'true';

    if (darkModeEnabled) {
        modeDarkLight.checked = true;
        applyDarkMode();
    } else {
        modeDarkLight.checked = false;
        applyLightMode();
    }
})