import React, { useState } from "react";
import "./style.css";

// import { Container } from './styles';

const MonthSelect = () => {
  const [month, setMonth] = useState([
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "AGosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]);
  const [selectedMonth, setSelectedMonth] = useState(month[1]);

  return (
    <div className="MonthContainer">
      <button className="MonthButton">{"<--"}</button>
      <p>{selectedMonth}</p>
      <button className="MonthButton">{"-->"}</button>
    </div>
  );
};

export default MonthSelect;
