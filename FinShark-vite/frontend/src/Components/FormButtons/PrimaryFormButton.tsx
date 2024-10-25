import { SyntheticEvent } from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  buttonText: string;
  symbol: string;
  onPortfolioChange: (e: SyntheticEvent) => void;
}

const PrimaryFormButton = ({
  symbol,
  buttonText,
  onPortfolioChange,
}: Props) => {
  return (
    <Form onSubmit={onPortfolioChange} className="mb-2 pb-0">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="input" readOnly hidden value={symbol} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default PrimaryFormButton;
