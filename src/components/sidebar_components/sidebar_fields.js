import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
let typesOfFields = ["Rent", "Bedrooms", "Bathrooms"];

function SidebarFields({
  parish,
  minRent,
  setMinRentFilterInRedux,
  maxRent,
  setMaxRentFilterInRedux,
  setParishFilterInRedux
}) {
  const [parishFilter, setParishFilterInState] = useState(parish);
  const [minRentFilter, setMinRentFilterInState] = useState(minRent);
  const [maxRentFilter, setMaxRentFilterInState] = useState(maxRent);

  return (
    <div >
      <div id="sidebar_parish">
        <h3 id="sidebar_subtitle">Parish</h3>
        <input
          type="text"
          id="sidebar_field"
          name="fname"
          placeholder="Enter parish"
          defaultValue={parish}
          onChange={(e) => {
            setParishFilterInState(e.target.value)
            //console.log(parishFilter)
          }}
        />
        <span>
          <Button variant="contained" id="sidebar_button" onClick={
            () => setParishFilterInRedux(parishFilter)
          }>
            Go
          </Button>
        </span>
      </div>
      <div id={`sidebar_Rent`}>
        <h3 id="sidebar_subtitle">Rent</h3>
        <input
          type="text"
          id="sidebar_min_field"
          name="Min"
          placeholder={minRent !== 0 ? minRent : "$Min"}
          onChange={(e) => {
            setMinRentFilterInState(e.target.value)
          }}
        />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder={maxRent !== null ? maxRent : "$Max"}
          onChange={(e) => {
            setMaxRentFilterInState(e.target.value)
          }}
        />
        <Button variant="contained" id="sidebar_button" onClick={
          () => {
            setMinRentFilterInRedux(minRentFilter)
            setMaxRentFilterInRedux(maxRentFilter)
          }
        }>
          Go
          </Button>
      </div>

      <div id={`sidebar_Bedrooms`}>
        <h3 id="sidebar_subtitle">Bedrooms</h3>
        <input
          type="text"
          id="sidebar_min_field"
          name="Min"
          placeholder="$Min"
        />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder="Max"
        />
        <Button variant="contained" id="sidebar_button">
          Go
          </Button>
      </div>


      <div id={`sidebar_Bathrooms`}>
        <h3 id="sidebar_subtitle">Bathrooms</h3>
        <input
          type="text"
          id="sidebar_min_field"
          name="Min"
          placeholder="$Min"
        />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder="Max"
        />
        <Button variant="contained" id="sidebar_button">
          Go
          </Button>
      </div>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    parish: state.filterReducer.parish,
    minRent: state.filterReducer.minRent,
    maxRent: state.filterReducer.maxRent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setParishFilterInRedux: (parish) => {
      dispatch({ type: "SET_PARISH_FILTER", payload: { parish } });
    },
    setMinRentFilterInRedux: (minRent) => {
      dispatch({ type: "SET_MIN_RENT_FILTER", payload: { minRent } })
    },
    setMaxRentFilterInRedux: (maxRent) => {
      dispatch({ type: "SET_MAX_RENT_FILTER", payload: { maxRent } })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFields);
