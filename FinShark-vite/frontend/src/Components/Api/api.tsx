import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyPeerList,
  CompanyProfile,
  CompanySearch,
} from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompaniesAxios = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return data;
  } catch (error: any) {
    // axios handling errors

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.config);
      return "error response";
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      console.log(error.config);
      return "error request";
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      console.log(error.config);
      return error.message;
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};

export const getKeyMetricsTTM = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&period=annual&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&period=annual&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&period=annual&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};

export const getPeerslist = async (query: string) => {
  try {
    const data = await axios.get<CompanyPeerList[]>(
      `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}limit=40&period=annual&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
    return "An error has occured.";
  }
};
