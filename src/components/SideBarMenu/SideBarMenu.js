import { IoChevronBack } from "react-icons/all";
import "./SideBarMenu.scss";

const SideBarMenu = ({ menuName, leftIcon, iconColor }) => {
  return (
    <p className="menu">
      <span className="left-menu">
        <span className={`${iconColor}`}>{leftIcon}</span>
        <span className="left-menu-text">{menuName}</span>
      </span>

      <span className="right-menu">
        <span className="right-menu-icon">
          <IoChevronBack />
        </span>
      </span>
    </p>
  );
};

export default SideBarMenu;
