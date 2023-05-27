const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-900 text-white absolute top-0 right-0 mt-4 mr-4 px-4">
          ${price}
        </p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn border-0 btn-outline border-b-4 bg-slate-100 border-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
