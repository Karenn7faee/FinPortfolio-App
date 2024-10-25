import { ListGroup } from "react-bootstrap";
import { FaHome, FaMoneyBillAlt } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <Link to="company-profile" className="d-flex gap-1">
          <FaHome />
          <h6>Company Profile</h6>
        </Link>

        <Link to="income-statement" className="d-flex gap-1">
          <FaMoneyBillAlt />
          <h6>Income Statement</h6>
        </Link>

        <Link to="balance-sheet" className="d-flex gap-1">
          <MdAccountBalance />
          <h6>Balance Sheet</h6>
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SideBar;
