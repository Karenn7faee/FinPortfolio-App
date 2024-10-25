import { Container } from "react-bootstrap";
import { ReactNode } from "react";
import CompanyDescription from "../CompanyDescription/CompanyDescription";
import CompanyTabs from "../CompanyTabs/CompanyTabs";

interface Props {
  children: ReactNode;
  companyName: string;
  ticker: string;
  companyDescription: string;
}

const CompanyDashboard = ({
  children,
  companyName,
  ticker,
  companyDescription,
}: Props) => {
  return (
    <Container className="">
      <h1>
        {companyName} ({ticker})
      </h1>
      <hr />

      <Container className="d-flex flex-wrap gap-2 justify">
        {children}
      </Container>
      <hr />
      <CompanyDescription content={companyDescription} />

      <CompanyTabs ticker={ticker} />
    </Container>
  );

  /*
    Old way without tabs
    <CompanyTabs />
    <Outlet context={ticker} />
  */
};

export default CompanyDashboard;
