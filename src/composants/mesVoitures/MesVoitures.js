import React, { Component } from 'react';
import Voiture from '../voitures/Voitures'; 
import  './mesVoitures.css'

class MesVoitures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voitures: [
                { marque: 'Tesla Model S Plaid ', image:'https://i.pinimg.com/564x/92/81/bb/9281bb349ff69a637a9a0190598518d5.jpg',couleur: 'Rouge', annee: 2021 },
                { marque: 'Mercedes-Benz EQS', image: 'https://i.pinimg.com/564x/df/08/ba/df08ba01c1be1fae4a27f4d083a99042.jpg', couleur: 'rose', annee: 2019 },
                { marque: 'Chevrolet Corvette C8', image: 'https://i.pinimg.com/564x/99/65/70/996570be2b0bde24e957f063db3c198e.jpg', couleur: 'Vert', annee: 2022 },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>🚗Liste des Voitures🚗</h2>
                <Voiture voitures={this.state.voitures} />
            </div>
        );
    }
}

export default MesVoitures;