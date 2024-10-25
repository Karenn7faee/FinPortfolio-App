import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";

interface Props {
  data: any;
  config: any;
}

const RatioList = ({ data, config }: Props) => {
  const renderedRows = config.map((row: any) => {
    return (
      <ListGroup.Item key={uuid4()} className="mt-2 p-0">
        <Container className="mx-auto p-0">
          <Row>
            <Col className="text-start">
              <p className="text-truncate mb-0">{row.label}</p>
            </Col>
            <Col className="text-end">
              <strong>{row.render(data)}</strong>
            </Col>
          </Row>
          <Row>
            <p className="text-secondary mb-0">
              {row.subTitle && row.subTitle}
            </p>
          </Row>
        </Container>
      </ListGroup.Item>
    );
  });
  return <ListGroup>{renderedRows}</ListGroup>;
};

export default RatioList;
