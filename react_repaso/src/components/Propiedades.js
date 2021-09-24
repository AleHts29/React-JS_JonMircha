import React from 'react';
import PropTypes from 'prop-types'

export default function Propiedades(props) {
    return (
        <div>
            <h2>Propiedades</h2>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.number}</li>
                <li>{props.boolean ? 'True':'False'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{`Nombre: ${props.objeto[0].name} - Price: $${props.objeto[0].price}`}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

// Ejemplo prop interna
Propiedades.defaultProps = {
    porDefecto: 'Soy una Prop interna'
}

// Usando porp-types
Propiedades.propTypes = {
    number: PropTypes.number.isRequired,
}