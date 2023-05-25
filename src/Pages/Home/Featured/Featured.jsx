import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed   text-white pt-6 my-20">
      <SectionTitle
        heading={"Featured Items"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-700 bg-opacity-30 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
          <p>Aug 20,2023</p>
          <p className="upprcase text-xl font-semibold">
            Where can i get some?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            sit dolorum labore ducimus cum soluta libero exercitationem aperiam
            earum placeat ab, a, illo velit minus officiis laudantium. Dicta
            eligendi explicabo soluta blanditiis quia veniam quidem. Fuga sunt
            distinctio voluptas laborum, perferendis labore porro perspiciatis
            eveniet, ad quasi est quaerat quisquam?
          </p>
          <button className="btn border-0 btn-outline border-b-4  ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
