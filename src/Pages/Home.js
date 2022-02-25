import RightNavBar from '../Components/RightNavBar/RightNavBar';

const Home = () => {
  return (
    <div className="container">
      <div className="flex min-h-screen max-w-7xl mx-auto  mt-5">
        <div className="w-72 ml-20 mt-5 ">
          <RightNavBar  />
        </div>
        <div className="w-72 ml-20 mt-5">
          <div class="flex justify-center">
              Home
          </div>
        </div>
        <div className="w-72 ml-20 mt-5"></div>
      </div>
    </div>
  );
};

export default Home;
