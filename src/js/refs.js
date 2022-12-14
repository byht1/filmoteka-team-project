export const refs = {
    //html
    html: document.querySelector('html'),
    // preLoader
    // header
    navLogo: document.querySelector('.navigation__logo'),
    navPage: document.querySelector('.navigation__page'),
    searchWrap: document.querySelector('.search-wrap'),
    libWrap: document.querySelector('.library-button__container'),
    navPageHome: document.querySelector('.navigation__page-home'),
    navPageLib: document.querySelector('.navigation__page-library'),
    header: document.querySelector('header'),
    logoText: document.querySelector('.logo-name'),
    homeTextChangeLanguage: document.querySelector('.navigation__page-home'),
    myLibraryTextChangeLanguage: document.querySelector('.navigation__page-library'),
    // search
    searchErrorText: document.querySelector('.search-error-text-js'),
    searchInput: document.querySelector('.search-bar__input'),
    // myLibrary
    // interface
    // genere
    genreText: document.querySelector('.genres-text-js'),
    // movie
    movieGallery: document.querySelector('.movie-gallery'),
    // footer
    goItStud: document.querySelector('.goItStud-js'),
    footerTextChangeLanguage: document.querySelector('.footer-box-text-js'),
    footerByChangeLanguage: document.querySelector('.footer-box-text-by-js'),
    // modalTeam
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalBackdrop: document.querySelector('.backdrop'),
    // modalMovie
    moviePosterContainer: document.querySelector('.movie-poster'),
    movieDataContainer: document.querySelector('.movie-data'),
    openMovieModal: document.querySelector('[data-movie-modal-open]'),
    closeMovieModalBtn: document.querySelector('[data-movie-modal-close]'),
    movieModalBackdrop: document.querySelector('[data-movie-modal-backdrop]'),
    movieModal: document.querySelector('[data-movie-modal]'),
    // modalActors
    actorsContainer: document.querySelector('.actors-modal__container'),
    actorsModalContainer: document.querySelector('.actors'),
    openActorsModalBtn: document.querySelector('[data-actors-modal-open]'),
    closeActorsModalBtn: document.querySelector('[data-actors-modal-close]'),
    actorsModalBackdrop: document.querySelector('[data-actors-modal-backdrop]'),
    actorsModal: document.querySelector('[data-actors-modal]'),
    //login
    signInBtn: document.querySelector('[data-signin-open]'),
    signInCloseBtn: document.querySelector('[data-modal-close-form]'),
    backdropSignIn: document.querySelector('[data-modal-signin]'),
    signUpLink: document.querySelector('[data-modal-link]'),
    backdropSignUp: document.querySelector('[data-modal-signup]'),
    signUpCloseBtn: document.querySelector('[data-modal-signup-close]'),
    signInLink: document.querySelector('[data-modal-link-signin]'),
    inputPassword: document.querySelector('[data-password]'),
    inputPasswordRepeat: document.querySelector('[data-password-repeat]'),
    formSignUp: document.querySelector('[data-signup]'),
    passwordNotMatchAlert: document.querySelector('[data-not-match]'),
    //login translation
    modalLoginTitle: document.querySelector('.registration__modal-title'),
    modalLoginInputEmail: document.querySelector('.registration__modal-input'),
    modalLoginInputPassword: document.querySelector('.registration__modal-input + input'),
    modalLoginBtn: document.querySelector('[data-modalbtn-tosignin]'),
    modalLoginErrorText: document.querySelector('.registration__modal-alert'),
    modalLoginRememberText: document.querySelector('.modal-login-checkbox-text-js'),
    modalLoginNewMemberText: document.querySelector('.registration-text-js > p > span'),
    // modalLoginRegistrationLink: document.querySelector('.registration__modal-link'),
    // signUp translation
    modalSignUpTitle: document.querySelector('.registration__modal-title--signup'),
    modalSignUpText: document.querySelector('.registration__modal-text'),
    modalSignUpEmail: document.querySelector('.registration__modal-input.email'),
    modalSignUpPassword: document.querySelector('.registration__modal-input.password'),
    modalSignUpPasswordRepeat: document.querySelector('.registration__modal-input.password + input'),
    modalSignUpOldMember: document.querySelector('.registration__modal-linkSignin > p > span'),
    toSignUpBtn: document.querySelector('[data-toSignUp-btn]'),
    //change color theme
    toggleTheme: document.querySelector('#toggle-theme'),
    //change language
    changeLanguage: document.querySelector('#toggle-language'),
    // preLoader
    // header
    navLogo: document.querySelector('.navigation__logo'),
    navPage: document.querySelector('.navigation__page'),
    searchWrap: document.querySelector('.search-wrap'),
    libWrap: document.querySelector('.library-button__container'),
    navPageHome: document.querySelector('.navigation__page-home'),
    navPageLib: document.querySelector('.navigation__page-library'),
    header: document.querySelector('header'),
    addToWachedBtn: document.querySelector('[data-click="addToWached"]'),
    logoText: document.querySelector('.logo-name'),
    queueButton: document.querySelector('.library-button__queue'),
    watchedButton: document.querySelector('.library-button__watched'),
    // search
    // myLibrary
    loadWathedBtn: document.querySelector('.library-button__watched'),
    loadQueueBtn: document.querySelector('.library-button__queue'),
    // interface
    // genere
    // movie
    movieGallery: document.querySelector('.movie-gallery'),
    scrolltopBtn: document.querySelector('.scrolltop'),
    // footer
    goItStud: document.querySelector('.goItStud-js'),
    // modalMovie
    movieModalContainer: document.querySelector('.movie-modal__container'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalBackdrop: document.querySelector('.backdrop'),
    watchedBtn: document.querySelector('.button-watched'),
    queueBtn: document.querySelector('.button-queue'),
    // modalTeam
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalBackdrop: document.querySelector('.backdrop'),
    modalTeamLanguage: document.querySelector('.box-team-js'),
    // modalMovie
    openMovieModal: document.querySelector('[data-movie-modal-open]'),
    closeMovieModalBtn: document.querySelector('[data-movie-modal-close]'),
    movieModalBackdrop: document.querySelector('[data-movie-modal-backdrop]'),
    movieModal: document.querySelector('[data-movie-modal]'),
    // modalActors
    openActorsModalBtn: document.querySelector('[data-actors-modal-open]'),
    closeActorsModalBtn: document.querySelector('[data-actors-modal-close]'),
    actorsModalBackdrop: document.querySelector('[data-actors-modal-backdrop]'),

    actorsModalContainer: document.querySelector('.actors'),
    actorsModal: document.querySelector('[data-actors-modal]'),
    //login
    signInBtn: document.querySelector('[data-signin-open]'),
    btnLoginWrap: document.querySelector('[data-btn-login-wrap]'),
    signInCloseBtn: document.querySelector('[data-modal-close-form]'),
    backdropSignIn: document.querySelector('[data-modal-signin]'),
    signUpLink: document.querySelector('[data-modal-link]'),
    backdropSignUp: document.querySelector('[data-modal-signup]'),
    signUpCloseBtn: document.querySelector('[data-modal-signup-close]'),
    signInLink: document.querySelector('[data-modal-link-signin]'),
    inputPassword: document.querySelector('[data-password]'),
    inputPasswordRepeat: document.querySelector('[data-password-repeat]'),
    formSignUp: document.querySelector('[data-signup]'),
    passwordNotMatchAlert: document.querySelector('[data-not-match]'),
    body: document.querySelector('body'),
    //pagination
    paginationList: document.querySelector('[data-pagination]'),
    accountCreatedText: document.querySelector('[data-acc-already-created]'),
    btnValueOut: document.querySelector('[data-btn-value-out]'),
    signInForm: document.querySelector('[data-signIn-form]'),
    signInErrorText: document.querySelector('[data-signin-errorText]'),
    noEmailText: document.querySelector('[data-signin-noEmailText]'),
    paginationSection: document.querySelector('.pagination'),
};
