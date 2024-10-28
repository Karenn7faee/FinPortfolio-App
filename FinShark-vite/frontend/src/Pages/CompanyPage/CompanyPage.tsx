import { useParams } from "react-router";
import { CompanyProfile } from "../../Components/Api/company";
import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../Components/Api/api";
import SideBar from "../../Components/SideBar/SideBar";
import CompanyDashboard from "../../Components/Company/CompanyDashboard/CompanyDashboard";
import { Col, Container, Row } from "react-bootstrap";
import DashboardTile from "../../Components/Company/DashBoardTile/DashboardTile";
import { formatRatio } from "../../Helper/NumberFormatting";
import Spinner from "../../Components/Spinner/Spinner";

const CompanyPage = () => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (result !== "An error has occured.") {
        setCompany(result?.data[0]);
      } else {
        setIsLoading(false);
      }
    };

    getProfileInit();
  }, [ticker]);

  /* temporary remove side bar
            <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9}>
            ...
            <Col xs={0} sm={0} md={0} lg={3} xl={3} xxl={3}>
              <SideBar />
            </Col>
  
  */

  return (
    <>
      {company ? (
        <Container fluid className="mt-1 align-items-start m-auto">
          <Row>
            <Col>
              <CompanyDashboard
                companyName={company.companyName}
                ticker={ticker!}
                companyDescription={company.description}
              >
                <DashboardTile title="CEO" subtitle={company.ceo} />
                <DashboardTile title="Stock Symbol" subtitle={company.symbol} />
                <DashboardTile
                  title="DCF"
                  subtitle={formatRatio(company.dcf).toString()}
                />
                <DashboardTile
                  title="Stock Price"
                  subtitle={"$" + company.price.toString()}
                />
              </CompanyDashboard>
            </Col>
          </Row>
        </Container>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h4 className="text-danger text-center">Error API</h4>
      )}
    </>
  );
};

export default CompanyPage;
