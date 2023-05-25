import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-6 my-20">
      <SectionTitle
        heading={"Featured Items"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
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
          <button className="btn ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
