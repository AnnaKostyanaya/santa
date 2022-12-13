import md5 from 'md5';
KEY = 48110;

export default function securityCheck(password) {
    if (password === KEY) {
        return true;
    } return false;
}