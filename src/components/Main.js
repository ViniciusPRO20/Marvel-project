import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=374f1f8192e8a1d638d1067289251d0b&hash=129958c3d84213e2085e2be6abbf4dba");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const results = response.data.data.results;
        setData(results);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };

    fetchData();
  }, [url]);

  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const groupedData = chunk(data, 3);

  return (
    <div className="main">
      {groupedData.length > 0 ? (
        groupedData.map((group, index) => (
          <div className="card-group" key={index}>
            {group.map((item) => (
              <figure className="card" key={item.id}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="teste" />
                <figcaption>
                  <p>{item.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Main;
