/***************************** Главная страница *****************************/

export const caruselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const contactFormErrors = {
    empty: 'Эта информация очень важна для нас',
    notCorrect: 'Данные введены не верно'
}

/** ---------------------------------------------------------------------- **/
/***************************** Страница О нас *****************************/

export const caruselTeam = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
