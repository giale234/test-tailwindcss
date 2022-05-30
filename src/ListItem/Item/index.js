import SliceItem from "../SliceItem";

export default function Item({ value }) {
  return (
    <>
      {value.map((item, index) => (
        <div
          key={index}
          className="content w-5/6 h-auto m-2.5 shadow-xl rounded-md px-20px"
        >
          <div className="content-title w-full h-auto flex items-center font-medium py-15px">
            <img
              className="rounded-lg w-30 h-30"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
              alt=""
            />
            <h2 className="text-lg text-semilightblue ml-10px">
              Thong tin chi tiet {item.name}
            </h2>
          </div>
          <SliceItem value={item} />
        </div>
      ))}
    </>
  );
}
