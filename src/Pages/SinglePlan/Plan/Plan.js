import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookPlan from "../BookPlan/BookPlan";
import DetailsPlan from "../DetailsPlan/DetailsPlan";

const Plan = () => {
  const { planId } = useParams();
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    const uri = `https://calida-tour-planner.herokuapp.com/plans/${planId}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);
  return (
    <div>
      <DetailsPlan plan={plan}></DetailsPlan>
      <BookPlan plan={plan}></BookPlan>
    </div>
  );
};

export default Plan;
