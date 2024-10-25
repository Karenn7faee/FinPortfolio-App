import { balanceSheetConfig } from "../../Api/tableConfig";
import { CompanyBalanceSheet } from "../../Api/company";
import { useEffect, useState } from "react";
import { getBalanceSheet } from "../../Api/api";
import Table from "../../Table/Table";
import Spinner from "../../../Components/Spinner/Spinner";

const configs = balanceSheetConfig;

interface Props {
  ticker: string;
}

const BalanceSheet = ({ ticker }: Props) => {
  //const ticker = useOutletContext<string>();    // when using outlets
  const [balanceSheetData, setBalanceSheetData] =
    useState<CompanyBalanceSheet[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCompanyBalanceStatement = async () => {
      const result = await getBalanceSheet(ticker);
      if (result !== "An error has occured.") {
        setBalanceSheetData(result?.data);
      } else {
        setIsLoading(false);
      }
    };

    getCompanyBalanceStatement();
  }, [ticker]);

  return (
    <>
      {balanceSheetData ? (
        <Table key="balance-sheet" data={balanceSheetData} configs={configs} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h4 className="text-danger text-center">Error API</h4>
      )}
    </>
  );
};

export default BalanceSheet;
