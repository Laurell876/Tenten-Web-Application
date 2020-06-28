import React from "react";
import MinimumRating from "../sidebar_components/minimum_rating";
import SidebarFields from "../sidebar_components/sidebar_fields";
import OrderBy from "../sidebar_components/order_by";

export default function Sidebar() {
  return (
    <div>
      <h2 id="sidebar_title">Filters</h2>
        <MinimumRating />
        <SidebarFields />
        <OrderBy />
    </div>
  );
}

