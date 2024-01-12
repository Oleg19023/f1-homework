// Загрузка списка стран
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        // Загрузка курсов валют НБУ
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(response => response.json())
            .then(currencies => {
                // Обработка данных и отображение результатов
                displayResults(countries, currencies);
                
        // Добавление текущей даты в заголовок
        const date = currencies[0].exchangedate; // Получение даты из первого объекта в массиве валют
        const titleElement = document.querySelector('h1');
        titleElement.textContent += ` на ${date}`; // Добавление даты к тексту заголовка

            });
    });

// function displayResults(countries, currencies) {
//     const container = document.getElementById('currencyContainer');
//     const orderedCountries = ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Israel', 'Japan', 'Kazakhstan', 'South Korea', 'Mexico', 'Moldova', 'New Zealand', 'Norway', 'Russia', 'Singapore', 'South Africa', 'Sweden', 'Switzerland', 'Egypt', 'United Kingdom', 'United States', 'Belarus', 'Azerbaijan', 'Romania', 'Turkey', 'SDR', 'Bulgaria', 'Euro', 'Poland', 'Algeria', 'Bangladesh', 'Armenia', 'Dominican Republic', 'Iran', 'Iraq', 'Kyrgyzstan', 'Lebanon', 'Libya', 'Malaysia', 'Morocco', 'Pakistan', 'Saudi Arabia', 'Vietnam', 'Thailand', 'UAE', 'Tunisia', 'Uzbekistan', 'Taiwan', 'Turkmenistan', 'Serbia', 'Tajikistan', 'Georgia', 'Brazil', 'Gold', 'Silver', 'Platinum', 'Palladium'];

//     orderedCountries.forEach(countryName => {
//     const country = countries.find(c => c.name.common === countryName);
//     if (country && country.flags) {
//         const flagElement = document.createElement('img');
//         flagElement.src = country.flags.png;
//         flagElement.title = country.name.common; // This will add a tooltip with the country name
//         flagElement.style.height = '60px';
//         flagElement.style.width = '90px';
//         container.appendChild(flagElement);
//         container.appendChild(document.createElement('br')); // This will add a line break after each flag
//     }

//     currencies.forEach(currency => {
//         // Создать элемент для отображения информации о валюте
//         const currencyElement = document.createElement('div');
//         currencyElement.innerHTML = `
//                 <h2>${currency.txt} (${currency.cc})</h2>
//                 <p>Курс: ${currency.rate} грн</p>
//             `;
//         container.appendChild(currencyElement);
//     });
//     });
// }

function displayResults(countries, currencies) {
    const container = document.getElementById('currencyContainer');
    const orderedCountries = ['Australia', 'Canada', 'China', 'Czech Republic', 'Denmark', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Israel', 'Japan', 'Kazakhstan', 'South Korea', 'Mexico', 'Moldova', 'New Zealand', 'Norway', 'Russia', 'Singapore', 'South Africa', 'Sweden', 'Switzerland', 'Egypt', 'United Kingdom', 'United States', 'Belarus', 'Azerbaijan', 'Romania', 'Turkey', 'SDR', 'Bulgaria', 'Euro', 'Poland', 'Algeria', 'Bangladesh', 'Armenia', 'Dominican Republic', 'Iran', 'Iraq', 'Kyrgyzstan', 'Lebanon', 'Libya', 'Malaysia', 'Morocco', 'Pakistan', 'Saudi Arabia', 'Vietnam', 'Thailand', 'UAE', 'Tunisia', 'Uzbekistan', 'Taiwan', 'Turkmenistan', 'Serbia', 'Tajikistan', 'Georgia', 'Brazil', 'Gold', 'Silver', 'Platinum', 'Palladium'];

    orderedCountries.forEach(countryName => {
        const country = countries.find(c => c.name.common === countryName);
        if (country && country.flags) {
            const flagElement = document.createElement('img');
            flagElement.src = country.flags.png;
            flagElement.title = country.name.common; // This will add a tooltip with the country name
            flagElement.style.height = '60px';
            flagElement.style.width = '90px';
            container.appendChild(flagElement);
            container.appendChild(document.createElement('br')); // This will add a line break after each flag

            const currency = currencies.find(c => {
                if (country.currencies) {
                    return Object.values(country.currencies).some(c => c.code === c.c);
                }
            });

            if (currency) {
                const currencyElement = document.createElement('div');
                currencyElement.innerHTML = `
                    <h2>${currency.txt} (${currency.cc})</h2>
                    <p>Курс: ${currency.rate} грн</p>
                `;
                container.appendChild(currencyElement);
            }
        }
    });
}

// Загрузка списка стран
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            if (country.flags) {
                console.log(country.flags.png); // Вывод ссылки на флаг страны
            }
        });
    });