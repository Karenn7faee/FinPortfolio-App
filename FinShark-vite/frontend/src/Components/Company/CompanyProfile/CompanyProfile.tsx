import { CompanyKeyMetrics } from "../../Api/company";
import { useEffect, useState } from "react";
import { getKeyMetricsTTM } from "../../Api/api";
import RatioList from "../../RatioList/RatioList";
import { companyProfileConfigs } from "../../Api/tableConfig";
import Spinner from "../../../Components/Spinner/Spinner";

const configs = companyProfileConfigs;

interface Props {
  ticker: string;
}

const CompanyProfile = ({ ticker }: Props) => {
  //const ticker = useOutletContext<string>();    // when using outlets
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const result = await getKeyMetricsTTM(ticker);
      if (result !== "An error has occured.") {
        setCompanyData(result?.data[0]);
      } else {
        setIsLoading(false);
      }
    };

    getCompanyKeyMetrics();
  }, [ticker]);

  return (
    <>
      {companyData ? (
        <RatioList data={companyData} config={configs} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h4 className="text-danger text-center">Error API</h4>
      )}
    </>
  );
};

export default CompanyProfile;
