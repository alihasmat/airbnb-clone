function Card({ image, rating, rank, country, content, price, openSpots }) {
  return (
    <section className="cards">
      <div className="card-badge">
        {openSpots === 0 ? "sold out" : `${openSpots} left`}
      </div>
      <div className="card-image">
        <img src={image} alt="image" />
      </div>
      <div className="card-info">
        <p className="card-ranks">
          <span className="red-star">★</span>
          <span className="rating">{rating}</span>
          <span className="rank">({rank})</span>
          <span className="country">• {country}</span>
        </p>

        <p className="card-description">{content}</p>
        <p>
          <span className="price">${price}</span> / person
        </p>
      </div>
    </section>
  );
}

export default Card;
