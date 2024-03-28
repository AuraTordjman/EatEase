import React, { Component } from 'react';

interface DonneesProduit {
    nom: string;
    ingredients: string[];
}

class CreerProduit extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            nomProduit: '',
            ingredients: []
        };
    }
    render() {
        return (
            <div>
                <h2>Créer un nouveau produit</h2>
                <label>
                    Nom du produit :
                    <input type="text" value={this.state.nomProduit}
                           onChange={(e) => this.setState({nomProduit: e.target.value})}/>
                </label>
                <br/>
                <br/>
                <label>
                    Ingrédients :
                    <textarea value={this.state.ingredients.join('\n')}
                              onChange={(e) => this.setState({ingredients: e.target.value.split('\n')})}></textarea>
                </label>
                <br/>
                <br/>
                <button>Ajouter</button>
            </div>
        );
    }
}

class AjoutProducts extends Component {
    render() {
        return (
            <div>
                <h1>Page de création de produits</h1>
                <CreerProduit />
            </div>
        );
    }
}

export default AjoutProducts;
