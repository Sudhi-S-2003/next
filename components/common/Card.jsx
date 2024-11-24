function Card({ title, description, image }) {
    return (
      <div className="card glass w-96">
        {image && (
          <figure>
            <img src={image} alt={title} />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn more</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  