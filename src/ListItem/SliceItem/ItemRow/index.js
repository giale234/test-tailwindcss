export default function ItemRow({ value, title, wrapperContainer, sup }) {
  return (
    value !== undefined && (
      <div className="content-item w-full h-auto flex border-b-1 border-lightblack">
        <div className="content-item-title w-40% h-auto">
          <p className="py-10px font-medium">{title}</p>
        </div>
        <div className="content-item-subtitle w-60% h-auto w-60% h-auto">
          <p className={`py-10px ${wrapperContainer}`}>
            {value}
            <sup>{sup}</sup>
          </p>
        </div>
      </div>
    )
  );
}
