import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";
import {
  TestDataCompany,
  testIncomeStatementData,
} from "../../Components/Table/TestData";

const ratioProfileData = TestDataCompany[0];
const tableIncomeData = testIncomeStatementData;

const ratioConfigs = [
  {
    label: "Company ticker",
    render: (company: any) => company.symbol,
    subTitle: "Symbol",
  },
  {
    label: "Stock price",
    render: (company: any) => company.price,
    subTitle: "Money money money",
  },
];

const tableIncomeConfigs = [
  {
    label: "Symbol",
    render: (company: any) => company.symbol,
  },
  {
    label: "Year",
    render: (company: any) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: any) => company.costOfRevenue,
  },
];

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is FinShark's design page. This is where we will house various
        design aspects of the app.
      </h2>
      <hr />

      <RatioList data={ratioProfileData} config={ratioConfigs} />
      <Table data={tableIncomeData} configs={tableIncomeConfigs} />
    </>
  );
};

export default DesignPage;
