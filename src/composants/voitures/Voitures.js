
import React from 'react';
import './voitures.css'

const Voiture = ({ voitures }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Marque</th>
                    <th>Couleur</th>
                    <th>Année</th>
                </tr>
            </thead>
            <tbody>
                {voitures.map((voiture, index) => (
                    <tr key={index}>
                        <td> <img src={voiture.image} alt=""></img> </td>
                        <td>{voiture.marque}</td>
                        <td>{voiture.couleur}</td>
                        <td>{voiture.annee}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Voiture;
