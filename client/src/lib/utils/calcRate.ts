import {ratesDataType} from "./../../../types"
const calculateExchangeRate = (
    sourceCurrency : string = "", 
    targetCurrency: string = "", 
    exchangeRateData : ratesDataType) =>{

    const baseCurr = exchangeRateData.Abase;
    const baseCurrencyRate = exchangeRateData.rates[baseCurr]

    const exchangeRate = (exchangeRateData.rates[targetCurrency] / exchangeRateData.rates[sourceCurrency]) * baseCurrencyRate;

    return exchangeRate

}

export default calculateExchangeRate