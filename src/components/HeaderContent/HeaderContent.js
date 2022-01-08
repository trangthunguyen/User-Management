import { AiFillDashboard, AiOutlineRight } from "react-icons/all";
import "./HeaderContent.scss";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="title">
        <span className="title-bold">Data Tables</span>
        <span className="title-light light">advanced tables</span>
      </div>

      <div className="path">
        <span className="sub-path path-icon">
          <AiFillDashboard />
        </span>
        <span className="sub-path path-text">Home</span>
        <span className="sub-path path-lead light">
          <AiOutlineRight />
        </span>
        <span className="sub-path path-text">Tables</span>
        <span className="sub-path path-lead light">
          <AiOutlineRight />
        </span>
        <span className="sub-path path-light">Data tables</span>
      </div>
    </div>
  );
};

export default HeaderContent;
