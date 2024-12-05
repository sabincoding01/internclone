import React, { useEffect, useState } from "react";

const Services = () => {
  const [dropdowns, setDropdowns] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDropdowns(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    
    <div className="max-w-screen-xl mx-auto px-4 py-8 m-8">
      
<div className="font-bold text-3xl pt-14 pb-6">Services Offered</div>

<h2 className="pt-6 font-bold pb-3 text-xl">India</h2>

      {/* Category Grid */}
      <div className="flex flex-wrap gap-4">
        {dropdowns.map((item, index) => (
          <div key={index} className="relative">
            {/* Dropdown Button */}
            <button
              className="inline-flex items-center px-4 py-2 bg-blue-50 border-gray-300 rounded-lg shadow-md text-gray-700 hover:bg-gray-100"
              onClick={() => toggleDropdown(index)}
            >
              {item.category}
              <span className="ml-2">▼</span>
            </button>

            {/* Dropdown Options */}
            {activeDropdown === index && (
              <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {item.options.map((option, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
