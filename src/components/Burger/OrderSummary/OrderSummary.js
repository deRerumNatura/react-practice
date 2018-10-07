import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrederSummary extends React.Component {
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
                );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button action={this.props.cancel} btnType={'Danger'}>CANCEL</Button>
                <Button action={this.props.continue} btnType={'Success'}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrederSummary;