import React, { useState, useRef } from "react";
import TextInput from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "./components/Select";
import { useForm } from "react-hook-form";

export default function FormModal() {
  const { handleSubmit, control, reset
   } = useForm({defaultValues: {employment: "Full time"}});

  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const handleNextPage = () => {
    setPage(page + 1);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 320;
    }
  };
  const onSubmit = (data: any) => {
    console.log(data);
    reset()
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 320;
    }
  };

  const options = [
    { label: "Full time", value: "Full time" },
    { label: "Part time", value: "Part time" },
    { label: "Hybrid", value: "Hybrid" },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
      <div className="hidden xl:block absolute top-0 left-0 w-full h-full">
        <img src="./circle.png" alt="circle" className="object-cover" />
      </div>
      <div className="hidden rounded-lg border w-[48px] h-[48px] xl:flex items-center justify-center ">
        <img
          src="./flag-05.png"
          alt="close"
          className="object-cover w-[24px] h-[25px]"
        />
      </div>
      <div className="relative flex flex-col justify-start items-start gap-1 w-full">
        <h1 className="text-lg font-semibold">Add experience</h1>
        <p className="text-textColor text-sm">
          Share where you've worked on your profile.
        </p>
      </div>
      <div
        id="scroll-container"
        ref={scrollRef}
        className="xs:w-[300px] xs:overflow-x-scroll whitespace-nowrap scroll-smooth xs:touch-none z-10 "
      >
        <div className="flex flex-col gap-4 xs:grid xs:grid-cols-2 xs:w-max">
          <div className="flex flex-col gap-4 xs:w-[300px] col-span-1 xs:px-1">
            <TextInput
              title="Title"
              placeholder="What is your title?"
              name="title"
              control={control}
            />
            <div className="flex flex-col md:flex-row  justify-evenly items-center gap-4">
              <TextInput
                title="Company"
                name="company"
                control={control}
                placeholder="Search for company"
                className="flex-1"
                icon={
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                }
              />
              <div className="flex-1 gap-1 flex-col flex w-full items-start">
                <label className="text-sm text-labelColor font-normal">
                  Website
                </label>
                <div className="flex w-full flex-1 flex-row justify-center items-center">
                  <span
                    className={`flex-[0.5] border border-r-0 font-normal rounded-tl-md rounded-bl-md text-md text-textColor p-2 w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50`}
                  >
                    https://
                  </span>
                  <TextInput
                    name="website"
                    control={control}
                    title="Website"
                    placeholder="www.example.com"
                    className="rounded-tl-none rounded-bl-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-evenly items-center gap-4">
              <TextInput
                title="Location"
                name="location"
                control={control}
                placeholder="Search for city"
                icon={
                  <FontAwesomeIcon icon={faSearch} className=" text-gray-500" />
                }
                className="md:flex-1"
              />
              <div className="flex-1 md:block sm:hidden xs:hidden">
                <Select
                  options={options}
                  name="employment"
                  control={control}
                  label="Employment"
                  className="w-max"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 xs:w-[300px] col-span-1 xs:px-1">
            <Select
              options={options}
              name="employment"
              label="Employment"
              control={control}
              className="w-full md:hidden xs:flex"
            />
            <TextInput
              name="Title"
              control={control}
              title="Title"
              placeholder="What is your title?"
            />
            <div className="flex-col gap-2">
              <div className="flex flex-row justify-start items-center gap-1">
                <label className="text-sm text-labelColor font-medium mb-1">
                  Description
                </label>
                <div className="h-4 w-4">
                  <img
                    src="./Icon.png"
                    alt="questionMark"
                    className=" h-3.5 w-3.5"
                  />
                </div>
              </div>
              <textarea
                className="text-third p-4 border font-normal text-md border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50"
                placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
                name="Description"
                id="description"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden items-center justify-center gap-4">
        <span
          className={`w-2 h-2 rounded-full ${
            page === 0 ? "bg-buttonColor" : "bg-gray-200 "
          }`}
        ></span>
        <span
          className={`w-2 h-2 rounded-full ${
            page === 1 ? "bg-buttonColor" : "bg-gray-200 "
          }`}
        ></span>
      </div>
      <div className="z-10 md:flex xs:flex-col items-center gap-4 w-full justify-between">
        <button
          className={`md:hidden bg-buttonColor mb-2 w-full text-white p-2 border font-semibold text-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor ${
            page === 1 ? "xs:hidden" : "xs:block"
          }`}
          onClick={handleNextPage}
        >
          Next
        </button>
        <button
          className={`w-full p-2 border font-semibold text-md border-gray-300 rounded-md focus:outline-none focus:ring-buttonColor focus:ring-2 disabled:opacity-50 ${
            page === 1 ? "xs:hidden" : "block"
          }`}
        >
          Save as draft
        </button>
        <button
          className={`md:hidden border font-semibold text-md border-gray-300 rounded-md focus:outline-none w-full p-2 mb-2 ${
            page === 0 ? "hidden" : "block"
          }`}
          onClick={handlePrevPage}
        >
          Back
        </button>
        <button
          type="submit"
          className={`w-full md:block bg-buttonColor text-white p-2 border font-semibold text-md border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50 ${
            page === 0 ? "xs:hidden" : "block"
          }`}
        >
          Add experience
        </button>
      </div>
    </form>
  );
}
