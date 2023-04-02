import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";
import Images from "./images";

function App() {
  const [searin, setSearch] = useState("");
  const arr = useSelector((state) => state.arr);

  const dispatch = useDispatch();
  const { addObject, deleteObj } = bindActionCreators(actionCreators, dispatch);

  const getPhotos = async () => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searin}&client_id=MBduWf3tdGoa5BxJ5ueT8i_E2wObbtemjdNFmuF5BIk`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    addObject(results);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searin}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success"
              type="bitton"
              onClick={() => {
                getPhotos();
              }}
            >
              Search
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                deleteObj();
              }}
            >
              delete
            </button>
          </div>
        </div>
      </nav>
      <Images />
    </div>
  );
}

export default App;
