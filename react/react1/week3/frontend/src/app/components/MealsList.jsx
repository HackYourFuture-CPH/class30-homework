"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";


const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/meal/all-meals");
        setMeals(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch meals");
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Meals List</h2>
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        meals.map((meal) => (
          <div key={meal.id} style={{ marginBottom: "20px" }}>
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            <p>Price: ${meal.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MealsList;
