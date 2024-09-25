import style from './RestaurantCard.module.css';


const RestaurantsCards = (props) => {
    return (
        <div className={style['card-container']}>
            <div className={style['card-details']} >
                <div className={style['card-name-ratings']}>
                    <h2>{props.name}</h2>
                    <div className={style.ratings}>
                        {
                            [...new Array(5)].map((rat, idx) => <i class={`fa-${ props.rating >= idx + 1 ? 'solid' : 'regular'} fa-star`}></i>
                            )
                        }
                        
                        {/* <i class="fa-regular fa-star"></i> */}
                    </div>
                </div>
                <p className={style.location}>
                <i class="fa-solid fa-location-dot"></i>
                    <span> {props.address}</span>
                </p>
                <p className={style.code}>`${props.outcode} ${props.postcode}`</p>
            </div>
            <div className={style.cuisine}>
                <div className={style['cuisine-name']}>
                    <i class="fa-solid fa-utensils"></i>
                    <span>{props.type_of_food}</span> 
                </div>
                <a href={props.URL} target='_blank'>Visit Menu</a>
            </div>
        </div>
        
    )
}

export default RestaurantsCards;