export default function ItemImg({ value, title }) {
  return (
    value !== undefined && (
      <div className="content-item w-full h-auto">
        <div className="content-item-title w-full h-auto flex py-5">
          <div className="content-item-title-icon w-7 bg-silver rounded-md">
            <img
              className=""
              src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"
              alt=""
            />
          </div>
          <p className="font-medium text-semilightblue text-lg pl-2.5">
            {title}
          </p>
        </div>
        <div className="content-item-main w-full h-auto flex py-3.5 bg-lightblue pl-2.5">
          {value.map((item, index) => {
            // <div className="content-item-main-subitem w-24 h-auto"></div>;
            if (item.type === "img") {
              return (
                <img
                  key={index}
                  className="w-24 h-24 rounded-xl mr-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
                  alt=""
                />
              );
            }
            return (
              <img
                key={index}
                className="w-24 h-24 rounded-xl"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
                alt=""
              />
            );
          })}
        </div>
      </div>
    )
  );
}
