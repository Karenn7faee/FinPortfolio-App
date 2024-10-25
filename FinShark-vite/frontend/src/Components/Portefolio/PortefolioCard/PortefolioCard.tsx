import { Card } from "react-bootstrap";
import RemovePortefolio from "../../FormButtons/DangerFormButton";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

interface Props {
  portefolioValue: string;
  onPortefolioDelete: (e: SyntheticEvent) => void;
}

const PortefolioCard = ({ portefolioValue, onPortefolioDelete }: Props) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img
        className="mt-2"
        variant="top"
        src="/stock-images/stockDefault-pexels-weekendplayer-187041.jpg"
      />
      <Link to={`/company/${portefolioValue}`}>
        <Card.Body>
          <Card.Title>{portefolioValue}</Card.Title>
        </Card.Body>
      </Link>
      <Card.Body>
        <RemovePortefolio
          symbol={portefolioValue}
          buttonText="Remove"
          onPortfolioChange={onPortefolioDelete}
        />
      </Card.Body>
    </Card>
  );
};

export default PortefolioCard;
