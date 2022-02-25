import {Link} from 'react-router-dom';
import {HomeIcon} from '../../Icons/Icons.js';
import {ExploreIcon} from '../../Icons/Icons.js';
import {NotificationsIcon} from '../../Icons/Icons.js';
import {MessagesIcon} from '../../Icons/Icons.js';
import {ProfileIcon} from '../../Icons/Icons.js';
import {TwitterIcon} from '../../Icons/Icons.js';

const RightNavBar = () => {
  return (
    <div className="flex flex-col">
      <div className="columns-2 p-0 ml-2 w-24">
        <div className="w-6 mb-16">
          <TwitterIcon />
        </div>
        <Link to="/home"></Link>
      </div>

      <div className="flex flex-row w-24  p-2 hover:bg-gray-400/25 rounded-full">
        <div className="w-6 p-0 mr-2">
          <HomeIcon className="icon" />
        </div>
        <div className="pl-1 text-center font-bold">
          <Link className="link " to="/home">
            Home
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-28 p-2 hover:bg-gray-400/25 rounded-full">
        <div className="w-6 p-0 mr-2">
          <ExploreIcon className="icon" />
        </div>
        <div className="pl-1 text-center font-bold">
          <Link className="link " to="/explore">
            Explore
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-36 p-2 hover:bg-gray-400/25 rounded-full">
        <div className="w-6 p-0 mr-2">
          <NotificationsIcon className="icon" />
        </div>
        <div className="pl-1 text-center font-bold font-mid">
          <Link className="link " to="/notifications">
            Notifications
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-29 p-2 hover:bg-gray-400/25 rounded-full">
        <div className="w-6 p-0 mr-2">
          <MessagesIcon className="icon" />
        </div>
        <div className="pl-1 text-center font-bold font-mid">
          <Link className="link " to="/messages">
            Messages
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-24 p-2 hover:bg-gray-400/25 rounded-full">
        <div className="w-6 p-0 mr-2">
          <ProfileIcon className="icon" />
        </div>
        <div className="pl-1 text-center font-bold font-mid">
          <Link className="link " to="/profile">
            Profile
          </Link>
        </div>
      </div>

      <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2  mt-4 w-36 rounded-full">
        Tweet
      </button>
    </div>
  );
};

export default RightNavBar;
