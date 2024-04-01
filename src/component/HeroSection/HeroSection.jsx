const HeroSection = () => {
  return (
    <>
      <div className="2xl:container mx-auto py-5">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://img.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_181624-1669.jpg?t=st=1711900559~exp=1711904159~hmac=99727b38f230869dcfee70f34d223c55023828c965997516aefec5464f2a67fd&w=1380"
              className="h-80"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl">Welcome to Food Store</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              distinctio tempora exercitationem dicta natus, veritatis, fugit
              minima unde aperiam minus assumenda aliquam, deleniti laboriosam
              vel rerum? Culpa aut nostrum voluptatum?
            </p>
            <button className="bg-green-500 px-8 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection