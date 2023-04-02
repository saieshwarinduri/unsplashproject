import { useSelector } from "react-redux";

function Images() {
  const data = useSelector((state) => state.arr);
  const { arr } = data;
  console.log(arr);
  return (
    <div className="container d-flex flex-wrap">
      {arr.map((each) => (
        <img
          key={each.id}
          src={each.urls.small}
          alt="LL"
          style={{ margin: "10px", height: "200px" }}
        />
      ))}
    </div>
  );
}

export default Images;
