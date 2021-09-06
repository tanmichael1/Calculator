// Import React (Mandatory Step).
import React from "react";
// Import Output Screen Row.
import OutputScreenRow from "./outputScreenRow.js";

// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = () => {
  return (
    <div className="screen">
      <OutputScreenRow />
      <OutputScreenRow />
    </div>
  );
};

// Export Output Screen.
export default OutputScreen;
