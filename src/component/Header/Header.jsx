const Header = () => {
  return (
    <>
      <header className="bg-blue-400 h-[5vh]">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-4">
            <div>
              <p>Logo</p>
            </div>

            <ul className="flex justify-end">
              <li>Home</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

// default Export

export default Header;
