import { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../Api/company";
import { cashFlowConfigs } from "../../Api/tableConfig";
import Table from "../../Table/Table";
import { getCashFlow } from "../../Api/api";
import Spinner from "../../../Components/Spinner/Spinner";

const configs = cashFlowConfigs;

interface Props {
  ticker: string;
}

const CashFlowStatement = ({ ticker }: Props) => {
  //const ticker = useOutletContext<string>();    // when using outlets
  const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCompanyBalanceStatement = async () => {
      const result = await getCashFlow(ticker);
      if (result !== "An error has occured.") {
        setCashFlow(result?.data);
      } else {
        setIsLoading(false);
      }
    };

    getCompanyBalanceStatement();
  }, [ticker]);

  return (
    <>
      {cashFlow ? (
        <Table key="cash-flow-statement" data={cashFlow} configs={configs} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h4 className="text-danger text-center">Error API</h4>
      )}
    </>
  );
};

export default CashFlowStatement;
