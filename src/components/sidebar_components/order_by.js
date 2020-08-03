import React from "react";
import { connect } from "react-redux";

function OrderBy({
  setRentSortFilterInRedux,
  setBathroomSortFilterInRedux,
  setBedroomSortFilterInRedux
}) {

  return (
    <div>
      <h2 id="order_by">Order By</h2>
      <h3 id="orderby_filter"> <span id="orderby_filter_title">Latest</span></h3>
      <div id="sidebar_orderby_fields">
        <h3 id="orderby_filter" onClick={
          () => {
            console.log("rent sorted")
            setRentSortFilterInRedux(0);
          }
        }><span id="orderby_filter_title">Rent</span>: Low to High</h3>
        <h3 id="orderby_filter" onClick={
          () => {
            setRentSortFilterInRedux(1);
          }
        }><span id="orderby_filter_title">Rent</span>: High to Low</h3>
      </div>

      <div id="sidebar_orderby_fields">
        <h3 id="orderby_filter" onClick={
          () => {
            setBedroomSortFilterInRedux(0);
          }
        }><span id="orderby_filter_title">Bedrooms</span>: Low to High</h3>
        <h3 id="orderby_filter" onClick={
          () => {
            setBedroomSortFilterInRedux(1);
          }
        }><span id="orderby_filter_title">Bedrooms</span>: High to Low</h3>
      </div>

      <div id="sidebar_orderby_fields">
        <h3 id="orderby_filter" onClick={
          () => {
            setBathroomSortFilterInRedux(0);
          }
        }><span id="orderby_filter_title">Bathrooms</span>: Low to High</h3>
        <h3 id="orderby_filter" onClick={
          () => {
            setBathroomSortFilterInRedux(1);
          }
        }><span id="orderby_filter_title">Bathrooms</span>: High to Low</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rentSort: state.filterReducer.rentSort,
    bedroomSort: state.filterReducer.bedroomSort,
    bathroomSort: state.filterReducer.bathroomSort
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRentSortFilterInRedux: (rentSort) => {
      dispatch({ type: "SET_RENT_SORT_FILTER", payload: { rentSort } })
    },
    setBedroomSortFilterInRedux: (bedroomSort) => {
      dispatch({ type: "SET_BEDROOM_SORT_FILTER", payload: { bedroomSort } })
    },
    setBathroomSortFilterInRedux: (bathroomSort) => {
      dispatch({ type: "SET_BATHROOM_SORT_FILTER", payload: { bathroomSort } })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBy);

