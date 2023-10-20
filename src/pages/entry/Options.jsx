import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  const getData = async (optionType) => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`);
      const data = await res.data;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  const ItemComponent = optionType === "scoop" ? ScoopOption : null;
  const optionItems = items.map((item, index) => {
    return (
      <ItemComponent key={index} name={item.name} imagePath={item.imagePath} />
    );
  });
  useEffect(() => {
    // optionType can be 'scoop' or 'topping'
    getData(optionType);
  }, [optionType]);

  return <Row>{optionItems}</Row>;
}
