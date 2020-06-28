import React from "react";

export default function OrderBy() {
  return (
    <div>
      <h2 id="sidebar_title">Order By</h2>
      <h3 id="orderby_filter"> <span id="orderby_filter_title">Latest</span></h3>
      {generateOrderByFilters()}
    </div>
  );
}

const generateOrderByFilters = () => {
  let filters = ["Rent", "Bathrooms", "Bedrooms"];
  let components = [];
  filters.forEach((filter) => {
    components.push(
      <div>
        <h3 id="orderby_filter"><span id="orderby_filter_title">{filter}</span>: Low to High</h3>
        <h3 id="orderby_filter"><span id="orderby_filter_title">{filter}</span>: High to Low</h3>
      </div>
    );
  });
  return components;
};
