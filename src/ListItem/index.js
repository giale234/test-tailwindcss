import Item from "./Item";
import { productList } from "../Data/InitValue";

export default function ListItem() {
  return (
    <>
      {productList.map((items, index) => (
        <Item key={index} value={items} />
      ))}
    </>
  );
}
