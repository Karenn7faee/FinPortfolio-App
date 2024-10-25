import { Nav, Tab } from "react-bootstrap";
import { FaHome, FaMoneyBillAlt } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import IncomeStatement from "../IncomeStatement/IncomeStatement";
import BalanceSheet from "../BalanceSheet/BalanceSheet";
import CashFlowStatement from "../CashFlowStatement/CashFlowStatement";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

interface Props {
  ticker: string;
}

const CompanyTabs = ({ ticker }: Props) => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="company-profile">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="company-profile">
              <FaHome /> Company Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="income-statement">
              <FaMoneyBillAlt /> Income Statement
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="balance-sheet">
              <MdAccountBalance /> Balance Statement
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cash-flow">
              <FaMoneyBillTrendUp /> Cash Flow Statement
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="company-profile">
            <CompanyProfile ticker={ticker} />
          </Tab.Pane>
          <Tab.Pane eventKey="income-statement">
            <IncomeStatement ticker={ticker} />
          </Tab.Pane>
          <Tab.Pane eventKey="balance-sheet">
            <BalanceSheet ticker={ticker} />
          </Tab.Pane>
          <Tab.Pane eventKey="cash-flow">
            <CashFlowStatement ticker={ticker} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );

  /*  
      Old way with outlet router... needed debugging defaultActiveKey={value}
      <Nav justify variant="tabs" defaultActiveKey="company-profile">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="company-profile" to="company-profile">
            <FaHome /> Company Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="income-statement" to="income-statement">
            <FaMoneyBillAlt /> Income Statement
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="balance-sheet" to="balance-sheet">
            <MdAccountBalance /> Balance Statement
          </Nav.Link>
        </Nav.Item>
      </Nav>
  */
};

export default CompanyTabs;
