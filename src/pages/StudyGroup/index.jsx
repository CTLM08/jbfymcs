import React from "react";
import { useParams } from "react-router-dom";

const StudyGroup = () => {
  const { id } = useParams();
  return <div>StudyGroup</div>;
};

export default StudyGroup;
