import StockCard from "./SearchCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { CompanySearch } from "../../Api/company";
import { v4 as uuid4 } from "uuid";
import { SyntheticEvent } from "react";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const StockCardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      <div className="bg-body-tertiary">
        {searchResults.length > 0 ? (
          <div className="p-2">
            <Container>
              <Row>
                {searchResults.map((result) => {
                  return (
                    <StockCard
                      key={uuid4()}
                      onPortfolioCreate={onPortfolioCreate}
                      searchResult={result}
                    />
                  );
                })}
              </Row>
            </Container>
          </div>
        ) : (
          <h1>No results</h1>
        )}
      </div>
    </>
  );
};

export default StockCardList;
