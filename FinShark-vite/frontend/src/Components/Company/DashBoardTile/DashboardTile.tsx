import { Card } from "react-bootstrap";

type Props = {
  title: string;
  subtitle: string;
};

const DashboardCard = ({ title, subtitle }: Props) => {
  return (
    <Card
      className="shadow-sm"
      style={{ width: "23%", minWidth: "100px", maxWidth: "300px" }}
    >
      <Card.Body className="px-3 py-1">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-1 text-muted text-truncate">
          {subtitle}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
