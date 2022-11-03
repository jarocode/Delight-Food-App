import React from "react";
import Layout from "layout";
import { useSelector } from "react-redux";

const FoodListings = () => {
  const { listings } = useSelector((state) => state);

  return (
    <Layout>
      <div className="listings-container">
        <p className="title">Delight Food App</p>
        <div class="row row-cols-1 row-cols-md-3">
          {listings.map((data) => (
            <div class="col mb-4">
              <div class="card listings-card">
                <img src={data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">${data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FoodListings;
