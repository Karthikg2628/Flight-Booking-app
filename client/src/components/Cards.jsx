import "../styles/card.css"
const Card = ({ place, price, img }) => {
    console.log(img)
    return (
        <>
            <div className="card">
                <div className="img"
                    style={{ backgroundImage: `url(${img})` }}
                >
                </div>
                <div className="Pricing">
                    <h3 className="place">{place}</h3>
                    <h6>{`price ${price}`}</h6>
                </div>

            </div>
        </>
    )
}

export default Card;


