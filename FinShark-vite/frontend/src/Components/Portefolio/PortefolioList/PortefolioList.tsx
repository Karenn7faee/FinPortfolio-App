import { SyntheticEvent } from "react";
import { Container, Row } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";
import PortefolioCard from "../PortefolioCard/PortefolioCard";

interface Props {
  portefolioValues: string[];
  onPortefolioDelete: (e: SyntheticEvent) => void;
}

const PortefolioList = ({ portefolioValues, onPortefolioDelete }: Props) => {
  return (
    <>
      <div className="p-2 bg-body">
        <h3 className="text-center">My portefolio</h3>

        {portefolioValues.length > 0 ? (
          <div className="p-2">
            <Container>
              <Row>
                {portefolioValues &&
                  portefolioValues.map((portefolioValue: string) => {
                    return (
                      <PortefolioCard
                        key={uuid4()}
                        portefolioValue={portefolioValue}
                        onPortefolioDelete={onPortefolioDelete}
                      />
                    );
                  })}
              </Row>
            </Container>
          </div>
        ) : (
          <h5 className="text-center text-secondary">
            Your portefolio is empty
          </h5>
        )}
      </div>
    </>
  );
};

export default PortefolioList;
