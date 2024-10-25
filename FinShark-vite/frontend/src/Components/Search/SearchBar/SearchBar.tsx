import { ChangeEvent, SyntheticEvent } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { FormControlElement } from "../../../types";
import "./SearchBar.css";

type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<FormControlElement>) => void;
  search: string | undefined;
};

const Search: React.FC<Props> = ({
  onSearchSubmit,
  handleSearchChange,
  search,
}: Props): JSX.Element => {
  return (
    <div className="bg-body-secondary p-2 w-100">
      <div className="m-auto bg-info rounded p-3 mw-50 search-max-width">
        <Form onSubmit={onSearchSubmit}>
          <InputGroup>
            <Form.Control
              aria-label="Search text input"
              value={search}
              onChange={handleSearchChange}
            />
            <Button
              variant="secondary"
              id="Search button"
              onClick={onSearchSubmit}
            >
              Search
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default Search;
