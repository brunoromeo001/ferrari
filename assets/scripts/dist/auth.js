import queryStringToJSON from "./utils/queryStringToJSON.js";
const authPage = document.querySelector("main#auth");
if (authPage) {
    const hideAuthForms = () => {
        document.querySelectorAll("form").forEach((el) => {
            el.classList.add("hide");
        });
    };
    const showAuthForm = (id) => {
        document.getElementById(id)?.classList.remove("hide");
    };
    const authHash = () => {
        hideAuthForms();
        if (sessionStorage.getItem("email")) {
            const emails = [
                ...document.querySelectorAll("[name=email]"),
            ];
            emails.forEach((el) => {
                el.value = sessionStorage.getItem("email") ?? "";
            });
        }
        const queryString = queryStringToJSON();
        if (queryString.mode && queryString.mode === "resetPassword") {
            location.hash = "#reset";
            showAuthForm("reset");
        }
        else {
            switch (location.hash) {
                case "#register":
                    showAuthForm("register");
                    break;
                case "#login":
                    showAuthForm("login");
                    break;
                case "#forget":
                    showAuthForm("forget");
                    break;
                case "#reset":
                    showAuthForm("reset");
                    break;
                default:
                    showAuthForm("auth-email");
                    break;
            }
        }
    };
    window.addEventListener("load", (e) => {
        authHash();
    });
    window.addEventListener("hashchange", (e) => {
        authHash();
    });
}
