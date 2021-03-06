import './Card.css'
import heartFilled from '../../svgs/heartFilled.svg'
import heartOutlined from '../../svgs/heartOutlined.svg'
import { useState } from 'react'

export const Card = ({ name, phone, email, image, favoured, index, updateFavourite }) => {

    const [isFavoured, setIsFavoured] = useState(favoured);

    const toggleFavoured = () => {
        updateFavourite(index, !isFavoured)
        setIsFavoured(!isFavoured)
    }

    return (
        <>  
            <article className="card">
                <div className="card-header">
                    <img src={image.url} alt={image.alt} className="card-image"/>
                    <button className='heart' onClick={toggleFavoured}>
                        {isFavoured ? (
                            <img src={heartFilled} alt="filled heart" />
                        ) : 
                            <img src={heartOutlined} alt="outlined heart" />
                        }
                    </button>
                </div>
                <div className="card-content">
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </article>
        </>
    )
}