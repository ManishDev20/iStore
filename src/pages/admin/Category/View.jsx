import React, { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { MainContext } from "../../../Main";
import axios from "axios";
const View = () => {
  const {
    category,
    notify,
    categoryImageUrl,
    fetchCategory,
    categroyBaseUrl,
    apiBaseUrl,
  } = useContext(MainContext);

  console.log(category);

  const deleteCategory = (id) => {
    axios
      .delete(apiBaseUrl + categroyBaseUrl + `/delete/${id}`)
      .then((success) => {
        if (success.data.status === 1) {
          fetchCategory();
          notify(success.data.msg);
        }
      })
      .catch(() => {
        notify("Client side error");
      });
  };

  const changeStatus = (id, new_status) => {
    axios
      .patch(
        apiBaseUrl + categroyBaseUrl + "/change-status/" + id + "/" + new_status
      )
      .then((success) => {
        if (success.data.status === 1) {
          fetchCategory(); // To update the data in category listing table component.
          notify(success.data.msg + " ");
        } else {
          notify(success.data.msg + ", error");
        }
      })
      .catch((error) => {
        notify("Client side error" + error.message);
      });
  };

  return (
    <div className="p-3 relative">
      <div className="w-full bg-[#374151] p-5 flex justify-between items-center my-5 shadow-[0px_8px_8px_rgba(0,0,0,0.5)] rounded-lg ">
        <div className="text-3xl font-semibold text-[#ffffff]">
          Category Listing
        </div>
        <div className="flex gap-5 items-center ">
          <Link
            to={"add"}
            className="text-[18px] px-2 py-1 rounded text-white bg-green-500 "
          >
            Add
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg shadow-[0px_8px_8px_rgba(0,0,0,0.5)]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                SR
              </th>
              <th scope="col" className="px-6 py-3 ">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Slug
              </th>
              <th scope="col" className="px-6 py-3 ">
                Image
              </th>
              <th scope="col" className="px-6 py-3 ">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          {category.map((cate, i) => {
            return (
              <tbody>
                <tr key={i} className="bg-white  dark:bg-gray-800   ">
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {cate.name}
                  </td>
                  <td className="px-6 py-4">{cate.slug}</td>
                  <td className="px-6 py-4">
                    <img
                      src={apiBaseUrl + categoryImageUrl + cate.image}
                      alt=""
                      className="w-[80px] h-[80px]  p-1"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {cate.status === true ? (
                      <button
                        onClick={() => changeStatus(cate._id, false)}
                        className="py-1 px-2 text-white bg-[#2dab22] rounded"
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        onClick={() => changeStatus(cate._id, true)}
                        className="py-1 px-2 text-white bg-[red] rounded"
                      >
                        Inactive
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex  gap-5 justify-center ">
                      {/* this is my edit button */}
                      <Link
                        to={`/admin/category/add`}
                        state={{ categoryData: cate }}
                        className="text-white text-xl cursor-pointer"
                      >
                        <Link to={`edit/${cate._id}`}>
                          <MdEdit />
                        </Link>
                      </Link>
                      <span className="text-[red] text-xl cursor-pointer">
                        <MdDelete onClick={() => deleteCategory(cate._id)} />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default View;
