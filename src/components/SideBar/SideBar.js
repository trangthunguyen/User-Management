import {
  FaSearch,
  AiFillDashboard,
  FaTh,
  VscFiles,
  FaChartPie,
  MdComputer,
  FaEdit,
  BsTable,
  FaCalendarAlt,
  HiOutlineMail,
  FaFolder,
  RiShareForwardFill,
  FaBook,
} from "react-icons/all";
import AVATAR from "../../assets/images/avatar.jpg";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="nav-top">
        <div className="user">
          <span className="user-pic">
            <img src={AVATAR} alt="" />
          </span>
          <p className="user-infor">
            <span className="user-name">Alexander Pierce</span>
            <br />
            <span className="user-status">
              <span className="user-status-icon"></span>
              <span className="user-status-text">Online</span>
            </span>
          </p>
        </div>

        <p className="search">
          <input className="search-input" placeholder="Search..."></input>
          <span className="search-icon">
            <FaSearch />
          </span>
        </p>
      </div>

      <div className="nav">
        <p className="title">MAIN NAVIGATION</p>

        <SideBarMenu menuName="Dashboard" leftIcon={<AiFillDashboard />} />
        <SideBarMenu menuName="Widgets" leftIcon={<FaTh />} />
        <SideBarMenu menuName="Layout Option" leftIcon={<VscFiles />} />
        <SideBarMenu menuName="Charts" leftIcon={<FaChartPie />} />
        <SideBarMenu menuName="UI Elements" leftIcon={<MdComputer />} />
        <SideBarMenu menuName="Forms" leftIcon={<FaEdit />} />
        <SideBarMenu menuName="Tables" leftIcon={<BsTable />} />

        <SideBarMenu menuName="Calendar" leftIcon={<FaCalendarAlt />} />
        <SideBarMenu menuName="Mailbox" leftIcon={<HiOutlineMail />} />
        <SideBarMenu menuName="Examples" leftIcon={<FaFolder />} />
        <SideBarMenu menuName="Multilevel" leftIcon={<RiShareForwardFill />} />
        <SideBarMenu menuName="Documentation" leftIcon={<FaBook />} />
      </div>

      <div className="nav">
        <p className="title">LABELS</p>

        <SideBarMenu menuName="Impotant" iconColor="icon-round color-orange" />
        <SideBarMenu menuName="Warning" iconColor="icon-round color-red" />
        <SideBarMenu menuName="Information" iconColor="icon-round color-blue" />
      </div>
    </div>
  );
};

export default SideBar;
