import React, { useState, useEffect } from "react";
import "./country_pickers.css";

export default function CountryPicker({selectedCountry, setSelectedCountry}) {
  

  return (
    <div>
      <select
        className="custom-picker"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="All">🌎 All Countries</option>
        <option value="US">🇺🇸 United States</option>
        <option value="CA">🇨🇦 Canada</option>
      </select>

    </div>
  );
}
