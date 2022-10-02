import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <FontAwesomeIcon icon={faCartShopping} />
    )
}

export default CartWidget;