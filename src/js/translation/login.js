import { refs } from '../refs';

const logInTextUk = 'Увійти';
const logInTextEng = 'Sign In';

export function changeLanguageLogin() {
    // refs.modalLoginTitle.innerHTML = '';

    // refs.modalLoginBtn.innerHTML = '';
    // refs.modalLoginErrorText.innerHTML = '';
    // refs.modalLoginRememberText.innerHTML = '';

    if (refs.html.getAttribute('lang') == 'uk') {
        refs.signInBtn.textContent = logInTextUk;
        refs.modalLoginTitle.textContent = logInTextUk;

        refs.modalLoginInputEmail.placeholder = 'Пошта';
        refs.modalLoginInputPassword.placeholder = 'Пароль';

        refs.modalLoginBtn.textContent = logInTextUk;
        refs.modalLoginErrorText.textContent = 'Електронна пошта або пароль невірні';

        refs.modalLoginRememberText.textContent = "Запам'ятати мене";

        refs.modalLoginRegistrationLink.textContent = 'Приєднатися зараз';

        refs.modalLoginNewMemberText.textContent = 'Новенький на Filmoteka?';
        // -------singup
        refs.modalSignUpTitle.textContent = 'Створити акаунт';
        refs.modalSignUpText.textContent = 'Введіть свою електронну пошту, щоб приєднатись';

        refs.modalSignUpEmail.placeholder = 'Пошта';
        refs.modalSignUpPassword.placeholder = 'Пароль';
        refs.modalSignUpPasswordRepeat.placeholder = 'Повторіть свій пароль';

        refs.passwordNotMatchAlert.textContent = 'Паролі не збігаються, спробуйте ще раз';
        refs.accountCreatedText.textContent = 'Ця електронна пошта вже зареєстрована';

        refs.toSignUpBtn.textContent = 'Приєднатись';

        refs.modalSignUpOldMember.textContent = 'Вже є акаунт?';
        refs.signInLink.textContent = 'Приєднатися зараз';
    } else {
        refs.signInBtn.textContent = logInTextEng;
        refs.modalLoginTitle.textContent = logInTextEng;

        refs.modalLoginInputEmail.placeholder = 'Email';
        refs.modalLoginInputPassword.placeholder = 'Password';

        refs.modalLoginBtn.textContent = logInTextEng;
        refs.modalLoginErrorText.textContent = 'Email or password is wrong';

        refs.modalLoginRememberText.textContent = 'Remember me';

        refs.modalLoginRegistrationLink.textContent = 'Sign up now';

        refs.modalLoginNewMemberText.textContent = 'New to Filmoteka?';

        // -------singup
        refs.modalSignUpTitle.textContent = 'Create account';
        refs.modalSignUpText.textContent = 'Enter your email to create your membership';

        refs.modalSignUpEmail.placeholder = 'Email';
        refs.modalSignUpPassword.placeholder = 'Password';
        refs.modalSignUpPasswordRepeat.placeholder = 'Repeat your password';

        refs.passwordNotMatchAlert.textContent = 'Passwords do not match, please try again';
        refs.accountCreatedText.textContent = 'This email is already registered';

        refs.toSignUpBtn.textContent = 'Sign up';

        refs.modalSignUpOldMember.textContent = 'Have account?';
        refs.signInLink.textContent = 'Sign in now';
    }
}