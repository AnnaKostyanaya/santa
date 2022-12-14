
const KEY = 48110;

export default function securityCheck(password) {
    if (password === KEY) {
        return true;
    } return false;
}