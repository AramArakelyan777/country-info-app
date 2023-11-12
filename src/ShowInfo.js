function ShowInfo({ data }) {
    if (data === undefined) return "";

    let name, fullName, population, area, capital = "", flagUrl, languagesArr, language = "", coatOfArmsUrl, continent = "";

    if (data) {
        name = data.name.common;
        fullName = data.name.official;
        population = data.population;
        area = data.area;
        flagUrl = data.flags.png;
        coatOfArmsUrl = data.coatOfArms.png;
        for (let i = 0; i < data.capital.length; i++) {
            capital += data.capital[i];
            if (i !== data.capital.length - 1) capital += ", ";
        }
        languagesArr = Object.values(data.languages);
        for (let i = 0; i < languagesArr.length; i++) {
            language += languagesArr[i];
            if (i !== languagesArr.length - 1) language += ", ";
        }
        for (let i = 0; i < data.continents.length; i++) {
            continent += data.continents[i];
            if (i !== data.continents.length - 1) continent += ", ";
        }
    }

    return (
        <div>
            <h1>{name}</h1>
            <div id="flagAndCoatOfArms">
                <img src={flagUrl} alt="flag" id="flag" />
                <img src={coatOfArmsUrl} alt="coat of arms" id="coatOfArms" />
            </div>
            <p><strong>Official name:</strong> {fullName}</p>
            <p><strong>Capital:</strong> {capital}</p>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Continent(s)</strong>: {continent}</p>
            <p><strong>Area(km<sup>2</sup>)</strong>: {area}</p>
            <p><strong>Language(s):</strong> {language}</p>
        </div>
    );
}

export default ShowInfo;
