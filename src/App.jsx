import { useState } from "react";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import { Yelp } from "./utils/yelp";

function App() {
  const [businessData, setBusinessData] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      setBusinessData(businesses);
    });
  };

  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businessData={businessData} />
    </div>
  );
}

export default App;
