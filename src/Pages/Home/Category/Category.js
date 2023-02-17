import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  // import cars-categories file from public folder
  const [carsCategories, setCarsCategories] = React.useState([]);
  React.useEffect(() => {
    fetch("cars-categories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarsCategories(data);
      });
  }, []);

  return (
    <div className="min-h-screen mt-6">
      <h1 className=" text-center text-4xl font-bold mb-12 ">
        What Do You Need?
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {carsCategories.map((carCategory) => (
          <div key={carCategory._id}>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg h-48"
                    src={carCategory.img}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {carCategory.categories_name}
                  </h5>
                  <p
                    className="text-gray-700 text-base mb-4"
                    title={carCategory.desc}
                  >
                    {carCategory.desc && carCategory.desc.length > 100
                      ? carCategory.desc.substring(0, 100) + "..."
                      : carCategory.desc}
                  </p>
                  <Link to={`/category/${carCategory.categories_name}`}>
                    <button
                      type="button"
                      className="
                      inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
                      "
                    >
                      See All
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
