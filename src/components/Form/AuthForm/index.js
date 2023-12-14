export { default } from './AuthForm';
export { default as LoginWithEmailForm } from './LoginWithEmailForm';
export { default as LoginWithPhoneForm } from './LoginWithPhoneForm';
export { default as LoginWithQrForm } from './LoginWithQrForm';
export { default as OptionsLoginForm } from './OptionsLoginForm';
export { default as OptionsRegisterForm } from './OptionsRegisterForm';
export { default as RegisterWithEmailForm } from './RegisterWithEmailForm';
export { default as RegisterWithPhoneForm } from './RegisterWithPhoneForm';

/* Contain 7 + 1 forms: 

AuthForm là phần khung, chứa 7 form dưới đây:

1. OptionsLoginForm
2. LoginWithQRCode
3. LoginWithPhoneNumber
4. LoginWithEmail
5. OptionsSignupForm
6. SignupWithPhoneNumber
7. SignupWithEmail

AuthForm sẽ dựa vào authType để render các component và xử lý các sự kiện onCLick

*/
