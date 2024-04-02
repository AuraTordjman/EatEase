import React from 'react';

function LoginForm() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Nom d'utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <button type="submit">Se connecter</button>
            </form>
            <a href="#">Mot de passe oublié ?</a>
        </div>
    );
}

export default LoginForm;
