import React from "react";
import StudentReview from "../StudentReview/StudentReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Student Review</h3>
        <StudentReview />
      </div>
    </div>
  );
};

export default RightSide;