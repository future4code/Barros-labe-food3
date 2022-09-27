import { useState } from 'react';
import './index.css'

const CardMenu = ({ img, category, description, name, price}) => {

    const [click, setClick] = useState(true)

    const onClick = () => {
        setClick(!click)
    }

    return (
        <div className='card-products-container'>
            <div className="logo-product">
                <img src={img} alt={name} />
            </div>
            <div className="content-product">
                <div className="name-product">
                    <h3>{name}</h3>
                </div>
                <div className="description-product">
                    <p>{description}</p>
                </div>
                <div className="price-and-button">
                    <div className="price">
                        <h3>R${price}</h3>
                    </div>
                    <div className={click? 'button' : 'button2'}>
                        <button onClick={onClick} type='button'>{click?'adicionar':'remover'}</button>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default CardMenu;