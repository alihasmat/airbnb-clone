function Card(props) {
  return (
    <section className="cards">
      <div className="card-badge">
        {props.openSpots === 0 ? "sold out" : `${props.openSpots} left`}
      </div>
      <div className="card-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="card-info">
        <p className="card-ranks">
          <span className="red-star">★</span>
          <span className="rating">{props.rating}</span>
          <span className="rank">({props.rank})</span>
          <span className="country">• {props.country}</span>
        </p>

        <p className="card-description">{props.content}</p>
        <p>
          <span className="price">${props.price}</span> / person
        </p>
      </div>
    </section>
  );
}

export default Card;
