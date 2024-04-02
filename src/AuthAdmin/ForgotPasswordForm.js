import React from 'react';

function ForgotPasswordForm() {
    return (
        <div>
            <h2>Mot de passe oublié</h2>
            <form>
                <input type="email" placeholder="Adresse e-mail" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default ForgotPasswordForm;