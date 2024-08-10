import React, { useState } from "react";
import TextInput from "./components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "./components/Select";

export default function FormModal() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [page, setPage] = useState(0);
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    { label: "Full time", value: "option1" },
    { label: "Part time", value: "option2" },
    { label: "Hybrid", value: "option3" },
  ];
  return (
    <div className="grid gap-2">
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
        <img src="./circle.png" alt="circle" className="object-cover" />
      </div>
      <div className="hidden lg:block rounded-lg border w-[48px] h-[48px] xl:flex items-center justify-center ">
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
      <div className="relative flex flex-col gap-4">
        <TextInput
          title="Title"
          placeholder="What is your title?"
          value={email}
          onChange={handleEmailChange}
          type="email"
        />
        <div className="flex flex-col lg:flex-row  justify-evenly items-center gap-4">
          <TextInput
            title="Company"
            placeholder="Search for company"
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="flex-1"
            icon={<FontAwesomeIcon icon={faSearch} className="text-gray-500" />}
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
                title="Website"
                placeholder="www.example.com"
                value={email}
                onChange={handleEmailChange}
                type="url"
                className="rounded-tl-none rounded-bl-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center gap-4">
          <TextInput
            title="Location"
            placeholder="Search for city"
            value={email}
            onChange={handleEmailChange}
            type="email"
            icon={
              <FontAwesomeIcon icon={faSearch} className=" text-gray-500" />
            }
            className="flex-1"
          />
          <div className="hidden lg:flex flex-row flex-1">
            <Select
              options={options}
              value={selectedOption}
              onChange={handleChange}
              label="Employment"
              className="max-w-sm flex-1"
            />
            <div className="hidden lg:flex flex-1"></div>
          </div>
        </div>
        <TextInput
          title="Title"
          placeholder="What is your title?"
          value={email}
          onChange={handleEmailChange}
          type="email"
          className="hidden lg:block"
        />
        <div className="hidden lg:block flex-col gap-2">
          <div className="flex flex-row justify-start items-center gap-1">
            <label className="text-sm text-secondary font-medium mb-1">
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
          ></textarea>
        </div>
        <div className="lg:hidden">***</div>
        <div className="flex flex-row justify-center items-center gap-4">
          <button className="lg:hidden text-white bg-buttonColor p-2 border font-normal text-md border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50">
            Next
          </button>
          <button className="text-third p-2 border font-normal text-md border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50">
            Save as draft
          </button>
          <button className=" text-white bg-buttonColor p-2 border font-normal text-md border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50">
            Add experience
          </button>
        </div>
      </div>
    </div>
  );
}
