import { useEffect, useState } from 'react';
import ShowInfo from "./ShowInfo";
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let handle;
    if (title.length !== 0) {
      setLoading(true);
      handle = setTimeout(() => {
        fetch(`https://restcountries.com/v3.1/name/${title}?fullText=false`)
          .then((stream) => stream.json())
          .then((res) => {
            setData(res);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, 1500);
    }

    return () => {
      clearTimeout(handle);
    };
  }, [title]);

  return (
    <div className="App">
      <h2>Welcome To CountryDataVault!</h2>
      <p>Here you can enter the name of a country and get some information about it.</p>
      <input
        placeholder="Enter a country's name..."
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        id="countryInput"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <ShowInfo data={data[0]} />}
    </div>
  );
}

export default App;
