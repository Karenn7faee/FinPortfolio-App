import { SyntheticEvent, useState } from "react";
import { CompanySearch } from "../../Components/Api/company";
import { FormControlElement } from "../../types";
import { searchCompaniesAxios } from "../../Components/Api/api";
import { Stack } from "react-bootstrap";
import Search from "../../Components/Search/SearchBar/SearchBar";
import PortefolioList from "../../Components/Portefolio/PortefolioList/PortefolioList";
import StockCardList from "../../Components/Search/SearchCard/SearchCardList";

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [portefolioValues, setPortefolioValues] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<FormControlElement>) => {
    setSearch(e.target.value);
  };

  // const onSearchClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>)
  // not as abstract as SyntheticEvent => simpler typing
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await searchCompaniesAxios(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResults(result.data);
    }
  };

  // type e:SyntheticEvent does not grant access to any values from e.
  // type e:any is necessary to access : e.target[0].value
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const currValue: string = e.target[0].value;
    //console.log("value added ", currValue);
    const valueExists = portefolioValues.find((value) => value === currValue);
    if (valueExists) return;
    const updatedPortefolio = [...portefolioValues, currValue];
    setPortefolioValues(updatedPortefolio);
  };

  const onPortefolioDelete = (e: any) => {
    e.preventDefault();
    const currValue: string = e.target[0].value;
    //console.log("removed value ", currValue);
    const removed = portefolioValues.filter((value) => {
      return value !== currValue;
    });
    setPortefolioValues(removed);
  };

  return (
    <>
      <Stack gap={3}>
        <Search
          onSearchSubmit={onSearchSubmit}
          handleSearchChange={handleSearchChange}
          search={search}
        />

        <PortefolioList
          portefolioValues={portefolioValues}
          onPortefolioDelete={onPortefolioDelete}
        />
        <StockCardList
          onPortfolioCreate={onPortfolioCreate}
          searchResults={searchResults}
        />
        {serverError && (
          <h4 className="text-danger">Unable to connect to API</h4>
        )}
      </Stack>
    </>
  );
};

export default SearchPage;
