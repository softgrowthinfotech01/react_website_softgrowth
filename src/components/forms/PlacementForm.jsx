import React from "react";

const PlacementForm = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <h1>Add Pllacement Details</h1>
      <input type="text" placeholder="Add Name Of Student"/>
      <input type="text" placeholder="Add Copmay Name"/>
      <input type="file" />
    </div>
  );
};

export default PlacementForm;
