import axios from "axios";

const API_KEY = "bde52e68ada42e8e986e5868"; 

const api = axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${API_KEY}`,
});

// Get exchange rates for a base currency
export const getCurrencyData = (fromCurrency) => {
    return api.get(`/latest/${fromCurrency}`);
};
