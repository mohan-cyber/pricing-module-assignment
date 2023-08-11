import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PricingConfigList = () => {
  const [pricingConfigs, setPricingConfigs] = useState([]);

  useEffect(() => {
    fetchPricingConfigs();
  }, []);

  const fetchPricingConfigs = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8002/api/pricing-configurations"
      );
      console.log(response);
      setPricingConfigs(response.data);
    } catch (error) {
      console.error("Error fetching pricing configurations:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl">Pricing Configurations</h2>
      <ul className="text-xl flex flex-col justify-center items-center">
        {pricingConfigs.map((config) => (
          <li className="py-5" key={config.id}>
            {config.day_of_week} -
            <Link className="p-4" to={`/edit/${config.id}`}>
              
              <button class="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l">
                Edit
              </button>
            </Link>
            |
            <Link to={`/delete/${config.id}`}>
              <button className="p-4" class="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l">
                Delete
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingConfigList;
