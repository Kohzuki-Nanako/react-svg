import React from "react";

const App = () => {
  const width = 700
  const height = 565
  const data = [
    {year: 1975, people: 5317.5},
    {year: 1980, people: 5649.91666666667},
    {year: 1985, people: 5963.41666666667},
    {year: 1990, people: 6383.58333333333},
    {year: 1995, people: 6666.41666666667},
    {year: 2000, people: 6766.25},
    {year: 2005, people: 6650.58333333333},
    {year: 2010, people: 6631.75},
    {year: 2015, people: 6624.75},
    {year: 2020, people: 6910.75},
  ]
  const barHeight = 30;
  return (
    <svg width={width} height={height}>
      <g transform="translate(100,0)">
        <line x1="0" y1="0" x2="0" y2={height} stroke="black" />
        {data.map((item, i) => {
          return (
            <g key={i} transform={`translate(0,${100 * (i + 1)})`}>
              <rect
                x="0"
                y={-barHeight / 2}
                width={item.people}
                height={barHeight}
                fill={"pink"}
              />
              <line x1="-10" y1="0" x2="0" y2="0" stroke="black" />
              <text x="-15" y="5" textAnchor="end">
                {item.year}
              </text>
              </g>
          );
        })}
      </g>
    </svg>
    
  );
};

export default App;