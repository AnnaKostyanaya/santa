import securityCheck from './js/security';
import Notiflix from 'notiflix';

const refs = {
    passwordForm: document.querySelector('#password-form'),
} 

refs.passwordForm.addEventListener('submit', onCheck);

function onCheck(evt) {
    evt.preventDefault();
    password = Number(evt.currentTarget.elements.searchQuery.value.trim());
    const result = securityCheck(password);
    if (result === true) {
        Notiflix.Notify.success('You are right!');
        document.location.href = './second.html';
    } else {
        Notiflix.Notify.failure('Ho-ho-ho... Try more...');
    }
    refs.passwordForm.reset();
}