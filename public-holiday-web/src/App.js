import "./App.css";
import HolidaySearch from "./holiday_search.tsx";
import CountryPicker from "./country_pickers.tsx";
import React, { useState } from "react";
import Content from "./content.tsx";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="Text-header">
          <div className="text-block">
            <h1 style={{ fontSize: "25px", marginBottom: "5px" }}>
              Public Holidays
            </h1>
            <p
              style={{ marginBottom: "10px", fontSize: "17px", color: "gray" }}
            >
              Discover holidays around the world
            </p>
          </div>
          <div className="calendar-label">
            <p style={{ fontSize: "15px", color: "gray" }}>
              🌎 Global Holiday Calendar
            </p>
          </div>
        </div>

        <div className="field-block">
          <HolidaySearch
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CountryPicker
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      </header>

      <div className="content">
        <Content selectedCountry={selectedCountry} searchText={searchText} />
      </div>
    </div>
  );
}

export default App;
