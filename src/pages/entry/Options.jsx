import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const getData = async (optionType) => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`);
      const data = await res.data;
      setItems(data);
    } catch (error) {
      setError(true);
    }
  };
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const optionItems = items.map((item, index) => {
    return (
      <ItemComponent key={index} name={item.name} imagePath={item.imagePath} />
    );
  });
  useEffect(() => {
    // optionType can be 'scoop' or 'topping'
    getData(optionType);
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  return <Row>{optionItems}</Row>;
}
