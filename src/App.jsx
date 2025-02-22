import React, { useState } from "react";
import { getCurrencyData } from "./API/postAPI";
import "./App.css";

function App() {
    const [amount, setAmount] = useState( );
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleConvertCurrency = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await getCurrencyData(fromCurrency);
            const conversionRates = res.data.conversion_rates;

            if (!conversionRates || !conversionRates[toCurrency]) {
                throw new Error("Invalid currency pair");
            }

            const rate = conversionRates[toCurrency];
            const result = amount * rate;

            setConvertedAmount(result);
        } catch (error) {
            setError("Error fetching Conversion Rate");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="currency-converter">
            <div className="currency-div">
                <h1>Currency Converter</h1>

                <div>
                    <label htmlFor="currency_amount">
                        Amount:
                        <input
                            type="number"
                            id="currency_amount"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                        />
                    </label>
                </div>

                <div className="currency-selector">
                    <div>
                        <label>
                            From:
                            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            To:
                            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </label>
                    </div>

                    <button disabled={loading || amount <= 0} onClick={handleConvertCurrency}>
                        {loading ? "Converting..." : "Convert"}
                    </button>
                </div>

                <hr />

                {convertedAmount !== null && (
                    <div>
                        <h2>
                            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
                        </h2>
                    </div>
                )}

                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </section>
    );
}

export default App;
