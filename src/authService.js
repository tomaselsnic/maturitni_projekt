export function isLogged() {
    const isLogged = localStorage.getItem("token") !== null;
    return isLogged;
}