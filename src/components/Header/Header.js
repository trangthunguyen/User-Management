import {
  FaBars,
  FaRegEnvelope,
  FaRegBell,
  FaRegFlag,
  FaCogs,
} from "react-icons/fa";
import AVATAR from "../../assets/images/avatar.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-brand">
        <b>Admin</b>
        LTE
      </div>

      <div className="header-menu">
        <div className="header-menu-icon">
          <FaBars />
        </div>

        <div className="header-menu-choice">
          <span className="choice-notification">
            <FaRegEnvelope />
            <span className="notification-quantity notification-quantity-green">
              4
            </span>
          </span>
          <span className="choice-notification">
            <FaRegBell />
            <span className="notification-quantity notification-quantity-orange">
              10
            </span>
          </span>
          <span className="choice-notification">
            <FaRegFlag />
            <span className="notification-quantity notification-quantity-red">
              9
            </span>
          </span>

          <span className="choice-profile">
            <span className="profile-picture">
              <img src={AVATAR} alt="" />
            </span>
            <span className="profile-name">Alexander Pierce</span>
          </span>

          <span className="choice-setting">
            <FaCogs />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
