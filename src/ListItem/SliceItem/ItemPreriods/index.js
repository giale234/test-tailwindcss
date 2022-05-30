import NullInfo from "../NullInfo";

export default function ItemPreriods({ value, title, sup }) {
  return value ? (
    <div className="content-item w-full h-auto border-b-1 border-lightblack">
      <div className="content-item-title w-full h-auto">
        <p className="py-10px font-medium">{title}</p>
      </div>
      <div className="content-item-subtitle w-full h-auto flex border-b-1 border-lightblack">
        <div className="content-subtitle-left w-40% h-auto">
          <p className="py-10px font-medium">Giai doan</p>
        </div>
        <div className="content-subtitle-right w-60% h-auto">
          <p className="py-10px font-medium">Gia</p>
        </div>
      </div>
      <div className="content-item-main w-full h-auto pb-15px">
        {value.map((item, index) => (
          <div
            key={index}
            className="content-item-main-area w-full h-auto flex py-10px text-slate-500"
          >
            <div className="content-item-main-title w-40% h-auto">
              <p>{item.name}</p>
            </div>
            <div className="content-item-main-subtitle w-60% h-auto">
              <p>
                {item.price}
                <sup>{sup}</sup>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <NullInfo />
  );
}
