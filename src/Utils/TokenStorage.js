const tokenName = 'access_token';

export function removeToken() {
    window.localStorage.removeItem(tokenName);
}