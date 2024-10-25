import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CompanySearch } from "../../Api/company";
import AddPortefolio from "../../FormButtons/PrimaryFormButton";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const StockCard: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <>
      <Card style={{ width: "10rem" }}>
        <Card.Img
          className="mt-2"
          variant="top"
          src="/stock-images/stockDefault-pexels-weekendplayer-187041.jpg"
        />
        <Card.Body>
          <Link to={`/company/${searchResult.symbol}`}>
            <Card.Title>
              {searchResult.name} ({searchResult.symbol})
            </Card.Title>
          </Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{searchResult.currency}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Text>
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
          </Card.Text>
        </Card.Body>
        <Card.Body className="pb-2">
          <AddPortefolio
            symbol={searchResult.symbol}
            buttonText="Add"
            onPortfolioChange={onPortfolioCreate}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default StockCard;
