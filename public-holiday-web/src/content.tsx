import React, { useEffect, useState } from "react";
import "./content.css";

export default function Content({ selectedCountry, searchText }) {
  type Holiday = {
    date: string;
    localName: string;
    countryCode: string;
  };

  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      const year = new Date().getFullYear();

      if (selectedCountry === "All") {
        const [usRes, caRes] = await Promise.all([
          fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/US`),
          fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CA`),
        ]);

        const usData = await usRes.json();
        const caData = await caRes.json();

        const allData = [...usData, ...caData];

        const holidayMap = new Map();

        allData.forEach((item) => {
          const key = `${item.date}-${item.localName}`;

          if (holidayMap.has(key)) {
            const existing = holidayMap.get(key);
            holidayMap.set(key, { ...existing, countryCode: "ALL" });
          } else {
            holidayMap.set(key, item);
          }
        });

        const uniqueHolidays = Array.from(holidayMap.values());

        const sorted = uniqueHolidays.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        setHolidays(sorted);

        console.log(
          "Duplicates check",
          allData.map((h) => `${h.date} - ${h.localName} - ${h.countryCode}`)
        );
      } else {
        const res = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${year}/${selectedCountry}`
        );
        const data = await res.json();
        setHolidays(data);
      }
    };

    fetchHolidays();
  }, [selectedCountry]);

  const filteredHolidays = holidays.filter((h) =>
    h.localName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Holidays in {selectedCountry}</h1>

      <ul>

      {(searchText ? filteredHolidays : holidays).map((holiday) => (
          <li
            key={`${holiday.date}-${holiday.localName}-${
              holiday.countryCode
            }-${Math.random()}`}
          >
            <div className="card">
              <div className="holiday-details">
                <strong>{holiday.localName}</strong>
                <br></br>
                {holiday.date}
              </div>
              {selectedCountry === "All" && (
                <div className="country">
                  <strong>{holiday.countryCode}</strong>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
