function List(props) {
  return (
    <div className="card">

      <img className="product-img" src={props.image} alt={props.name} />

      <h3 className="title">{props.name}</h3>

      <p className="desc">{props.description}</p>

      <p className="price">{props.price}</p>

      <button className="btn">Add to cart</button>

    </div>
  );
}

export default List;