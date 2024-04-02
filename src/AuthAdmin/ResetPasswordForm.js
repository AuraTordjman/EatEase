import React from 'react';

function ResetPasswordForm() {
    return (
        <div>
            <h2>Réinitialiser le mot de passe</h2>
            <form>
                <input type="password" placeholder="Nouveau mot de passe" />
                <input type="password" placeholder="Confirmer le mot de passe" />
                <button type="submit">Réinitialiser</button>
            </form>
        </div>
    );
}

export default ResetPasswordForm;
