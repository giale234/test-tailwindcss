import ItemPreriods from "./ItemPreriods";
import ItemRow from "./ItemRow";
import ItemImg from "./ItemImg";
import { array } from "../../Data/array";

import upload from "../../images/upload.png";

export default function SliceItem({ value }) {
  return (
    <div className="content-main w-full h-auto last: block pb-2.5">
      <div className="content-main-title w-full h-auto bg-lightblue cursor-pointer hover:bg-hoverColor flex justify-between">
        <h2 className="main-title-h2 text-sm font-medium py-5px ml-15px">
          Thong tin chi tiet
        </h2>
        <div className="main-title-icon w-20 h-auto flex items-center mr-2.5">
          <img className="w-4 h-4" src={upload} alt="" />
        </div>
      </div>
      {/* <ItemRow value={value?.width} title="ngang" /> */}
      {array.map((item, index) => {
        if (
          value[item.id] &&
          item.id !== "preriods" &&
          item.id !== "type" &&
          item.id !== "name" &&
          item.id !== "images"
        ) {
          return (
            <ItemRow
              key={index}
              value={value[item.id]}
              title={item.label}
              wrapperContainer={item.wrapperContainer}
              sup={item.sup}
            />
          );
        }
        if (item.id === "preriods") {
          return (
            <ItemPreriods
              key={index}
              value={value[item.id]}
              title={item.label}
              sup={item.sup}
            />
          );
        }
        if (item.id === "images") {
          return (
            <ItemImg key={index} value={value[item.id]} title={item.label} />
          );
        }
        return item.value;
      })}
    </div>
  );
}
