import React from "react";

export default function LatestOrder(props) {
  return (
    <div className="latest-order">
      {props.is_latest_order ? <p>Latest Order</p> : <p>No Latest Order</p>}
    </div>
  );
}
