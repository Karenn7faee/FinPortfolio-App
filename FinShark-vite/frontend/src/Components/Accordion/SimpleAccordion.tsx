import { ReactNode } from "react";
import { Accordion } from "react-bootstrap";

interface Props {
  children: ReactNode;
  title: string;
}

const SimpleAccordion = ({ children, title }: Props) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SimpleAccordion;
