import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
// import DragNdrop from "../../../component/admin/Dropzone";
import axios from "axios";
import { MainContext } from "../../../Main";
import { MdKeyboardBackspace } from "react-icons/md";

const Add = () => {
  const nameRef = useRef(null);
  const slugRef = useRef(null);

  const { notify, fetchCategory, apiBaseUrl, categroyBaseUrl } =
    useContext(MainContext);

  const titleToSlug = () => {
    slugRef.current.value = nameRef.current.value
      .toLowerCase()
      .trim()
      .replaceAll(" ", "-")
      .replaceAll("'", "");
  };

  // Form event handlers
  const formHandler = (e) => {
    e.preventDefault();
    const name = e.target.catName.value;
    const slug = e.target.catSlug.value;
    const image = e.target.catImage.files[0];
    if (name !== "" && slug !== "" && image !== null) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("slug", slug);
      formData.append("image", image);
      axios
        .post(apiBaseUrl + categroyBaseUrl + "/create", formData)
        .then((success) => {
          if (success.data.status === 1) {
            e.target.reset();
            notify(success.data.msg, success.data.status ? "success" : "error");
            fetchCategory();
          }
        })
        .catch((error) => {
          if (error) {
            notify("axios error, can't send data to server");
          }
        });
    }
  };
  return (
    <div className="h-full">
      <div className="mx-5 m-2 text-3xl">
        <Link to={"/admin/category"}>
          <MdKeyboardBackspace />
        </Link>
      </div>
      <div className="flex h-[100%] justify-center items-center relative ">
        <div className="w-[70%] p-2 shadow-xl border rounded-lg">
          <h1 className="text-2xl font-semibold mt-3 mb-5">Category</h1>
          <form
            encType="multipart/form-data"
            onSubmit={formHandler}
            className="flex gap-5 justify-around"
          >
            <div className=" w-full flex flex-col">
              <label htmlFor="catName" className="pl-2 font-semibold">
                Category Name
              </label>
              <input
                onChange={titleToSlug}
                ref={nameRef}
                type="text"
                id="catName"
                placeholder="Category name..."
                className="border p-2 rounded-md outline-none mb-2"
                required
              />
              <label htmlFor="catSlug" className="pl-2 font-semibold">
                Category Slug
              </label>
              <input
                ref={slugRef}
                readOnly
                type="text"
                id="catSlug"
                placeholder="Category slug..."
                className="border p-2 rounded-md outline-none mb-2"
              />
              <label htmlFor="catImage">Category Image</label>
              <input
                type="file"
                id="catImage"
                className="border p-2 rounded-md outline-none mb-2"
              />
              <button
                type="submit"
                className="border-2 border-[#22c55ec5] hover:text-white hover:bg-[#22c55e] bg-[#22c55ec5] p-2 text-[20px] rounded-md "
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
