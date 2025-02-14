const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // moeda real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "Dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar-Americano"
        currencyImage.src = "/assets/USA.png"
    }
        if (currencySelect.value == "Euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src ="./assets/euro.png"
        }

        convertValues()

    }


    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues) 