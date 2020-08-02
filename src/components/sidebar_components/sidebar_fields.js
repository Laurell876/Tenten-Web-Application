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
  minBedrooms,
  setMinBedroomsFilterInRedux,
  maxBedrooms,
  setMaxBedroomsFilterInRedux,
  minBathrooms,
  setMinBathroomsFilterInRedux,
  maxBathrooms,
  setMaxBathroomsFilterInRedux,
  setParishFilterInRedux
}) {
  const [parishFilter, setParishFilterInState] = useState(parish);
  const [minRentFilter, setMinRentFilterInState] = useState(minRent);
  const [maxRentFilter, setMaxRentFilterInState] = useState(maxRent);
  const [minBedroomsFilter, setMinBedroomsFilterInState] = useState(minBedrooms);
  const [maxBedroomsFilter, setMaxBedroomsFilterInState] = useState(minBedrooms);
  const [minBathroomsFilter, setMinBathroomsFilterInState] = useState(minBathrooms);
  const [maxBathroomsFilter, setMaxBathroomsFilterInState] = useState(minBathrooms);

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
          placeholder={maxRent ? maxRent : "$Max"}
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
          placeholder={minBedrooms !== 0 ? minBedrooms : "$Min"}
          onChange={(e) => {
            setMinBedroomsFilterInState(e.target.value)
          }}
        />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder={maxBedrooms ? maxBedrooms : "$Max"}
          onChange={(e) => {
            setMaxBedroomsFilterInState(e.target.value)
          }}
        />
        <Button variant="contained" id="sidebar_button" onClick={
          () => {
            setMinBedroomsFilterInRedux(minBedroomsFilter)
            setMaxBedroomsFilterInRedux(maxBedroomsFilter)
          }
        }>
          Go
          </Button>
      </div>


      <div id={`sidebar_Bathrooms`}>
        <h3 id="sidebar_subtitle">Bathrooms</h3>
        <input
          type="text"
          id="sidebar_min_field"
          name="Min"
          placeholder={minBathrooms !== 0 ? minBathrooms : "$Min"}
          onChange={(e) => {
            setMinBathroomsFilterInState(e.target.value)
          }}
        />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder={maxBathrooms ? maxBathrooms : "$Max"}
          onChange={(e) => {
            setMaxBathroomsFilterInState(e.target.value)
          }}
        />
        <Button variant="contained" id="sidebar_button" onClick={
          () => {
            setMinBathroomsFilterInRedux(minBathroomsFilter)
            setMaxBathroomsFilterInRedux(maxBathroomsFilter)
          }
        }>
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
    maxRent: state.filterReducer.maxRent,
    minBedrooms: state.filterReducer.minBedrooms,
    maxBedrooms: state.filterReducer.maxBedrooms,
    minBathrooms: state.filterReducer.minBathrooms,
    maxBathrooms: state.filterReducer.maxBathrooms
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
    },
    setMinBedroomsFilterInRedux: (minBedrooms) => {
      dispatch({ type: "SET_MIN_BEDROOMS_FILTER", payload: { minBedrooms } })
    },
    setMaxBedroomsFilterInRedux: (maxBedrooms) => {
      dispatch({ type: "SET_MAX_BEDROOMS_FILTER", payload: { maxBedrooms } })
    },
    setMinBathroomsFilterInRedux: (minBathrooms) => {
      dispatch({ type: "SET_MIN_BATHROOMS_FILTER", payload: { minBathrooms } })
    },
    setMaxBathroomsFilterInRedux: (maxBathrooms) => {
      dispatch({ type: "SET_MAX_BATHROOMS_FILTER", payload: { maxBathrooms } })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFields);
