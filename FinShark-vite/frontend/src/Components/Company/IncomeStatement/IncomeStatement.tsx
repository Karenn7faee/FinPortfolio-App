import { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../../Api/company";
import { getIncomeStatement } from "../../Api/api";
import { incomeStatementsConfigs } from "../../Api/tableConfig";
import Table from "../../Table/Table";
import Spinner from "../../../Components/Spinner/Spinner";

const configs = incomeStatementsConfigs;

interface Props {
  ticker: string;
}

const IncomeStatement = ({ ticker }: Props) => {
  //const ticker = useOutletContext<string>();    // when using outlets
  const [incomeStatementData, setIncomeStatementData] =
    useState<CompanyIncomeStatement[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCompanyIncomeStatement = async () => {
      const result = await getIncomeStatement(ticker);
      if (result !== "An error has occured.") {
        setIncomeStatementData(result?.data);
      } else {
        setIsLoading(false);
      }
    };

    getCompanyIncomeStatement();
  }, [ticker]);
  return (
    <>
      {incomeStatementData ? (
        <Table
          key="income-statement"
          data={incomeStatementData}
          configs={configs}
        />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h4 className="text-danger text-center">Error API</h4>
      )}
    </>
  );
};

export default IncomeStatement;
