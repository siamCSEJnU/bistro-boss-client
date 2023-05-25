const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-lime-500 mb-2 italic">---{subheading}---</p>
      <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
