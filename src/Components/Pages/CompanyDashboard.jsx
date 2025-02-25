import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const CompanyDashboard = () => {
  const [addStudentBox, setAddStudentBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [addNotes, setAddNotes] = useState(false);

  const showStudentDetail = (index) => {
    setMsgIndex(index), seteditBox(true);
  };

  const [students, setStudents] = useState([
    {
      studentName: "Dhruv Harsoda",
      companyName: "Google",
      status: "done",
      date: "23-2-2025",
      facultyName: "Albert Einstein",
    },
    {
      studentName: "Aryan Mehta",
      companyName: "Microsoft",
      status: "pending",
      date: "2-3-1847",
      facultyName: "Allah hu Akhbar",
    },
    {
      studentName: "Satyam Singh",
      companyName: "Tesla",
      status: "rejected",
      date: "23-2-2025",
      facultyName: "Albert Einstein",
    },
    {
      studentName: "Rehman Khuresi",
      companyName: "Amazon",
      status: "pending",
      date: "2-3-1847",
      facultyName: "Allah hu Akhbar",
    },
    {
      studentName: "Hamza Alee",
      companyName: "Facebook",
      status: "done",
      date: "23-2-2025",
      facultyName: "Albert Einstein",
    },
    {
      studentName: "Abdul Alim",
      companyName: "Apple",
      status: "rejected",
      date: "2-3-1847",
      facultyName: "Allah hu Akhbar",
    },
  ]);

  const deleteOnInd = (index) => {
    let copyData = [...students];
    copyData.splice(index, 1);
    setStudents(copyData);
  };

  const statusColors = {
    done: "green",
    pending: "#B2651B",
    rejected: "#FF0000",
  };

  return (
    <div className="size-full relative flex flex-col gap-5 py-4 px-4 lg:px-10">
      <div className="flex p-1  flex-col gap-3 h-fit input-holder py-4">
        <div className="flex 400px:flex-row flex-col gap-4">
          <input
            type="text"
            id="studentSearch"
            placeholder="Search any Student"
            className="outline w-full"
          />
          <div className="flex gap-2">
            <button className="400px:w-10 icon w-full h-10 400px:size-10 grid place-items-center">
              <i className="ri-search-line text-lg"></i>
            </button>
            <button
              className="400px:w-10 w-full h-10 400px:size-10 icon grid place-items-center"
              onClick={() => setAddStudentBox(true)}
            >
              <i className="ri-user-add-line text-lg"></i>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 capitalize gap-3">
          <select
            name="studentArea"
            className="outline rounded-sm py-1 px-2"
            id="studentArea"
          >
            <option disabled={true} defaultChecked value="">
              Select a area
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
            <option className="text-md" value="areaName">
              area name
            </option>
          </select>
          <select
            name="studentArea"
            className="outline rounded-sm py-1 px-2"
            id="studentArea"
          >
            <option disabled={true} defaultChecked value="">
              Select a course
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
            <option className="text-md" value="cityName">
              city name
            </option>
          </select>
        </div>
      </div>

      <div className="h-full overflow-auto set-custom-scroll p-1 pe-2.5">
        <table className="min-w-full divide-y outline-[2px] outline-gray-400 overflow-hidden rounded-md">
          <thead className="rounded-md headline overflow-hidden">
            <tr>
              <th className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th className="outline outline-gray-400 text-sm px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {students.map(({ companyName, status }, i) => (
              <tr key={i}>
                <td className="px-6 py-4 outline outline-gray-400 text-md whitespace-nowrap">
                  {companyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap outline outline-gray-400 flex justify-around">
                  <span
                    onClick={() => setEditBox(true)}
                    className="cursor-pointer text-2xl"
                  >
                    <i className="ri-pencil-line"></i>
                  </span>
                  <span
                    onClick={() => deleteOnInd(i)}
                    className="cursor-pointer text-2xl"
                  >
                    <i className="ri-delete-bin-6-line"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence mode="wait">
        {addStudentBox && (
          <motion.div
            className="absolute px-4 inset-0 size-full z-1 grid place-items-center"
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0",
            }}
            exit={{
              y: "100%",
            }}
            transition={{
              duration: 0.5,
              ease: [1, 0.02, 0.2, 0.76],
            }}
          >
            <div className="rounded-md w-full max-w-240 outline">
              <div className="p-4 border-b-[1px] head-line headline overflow-x-hidden flex justify-between items-center">
                <h1>Add a Student</h1>
                <span onClick={() => setAddStudentBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="grid sm:grid-cols-2 gap-4 px-4 h-full max-h-140 overflow-x-hidden overflow-y-auto set-custom-scroll p-2">
                  <input
                    className="outline inline-block exclusive w-full"
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="tel"
                    placeholder="Contact no."
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="text"
                    placeholder="Website Link"
                  />
                  <select
                    name="studentArea"
                    className="outline rounded-sm py-1 px-2"
                    id="studentArea"
                  >
                    <option disabled={true} defaultChecked value="">
                      Select a area
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      city name
                    </option>
                  </select>
                  <select
                    name="studentArea"
                    className="outline rounded-sm py-1 px-2"
                    id="studentArea"
                  >
                    <option disabled={true} defaultChecked value="">
                      Select a City
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                  </select>

                  <input
                    className="outline inline-block exclusive w-full"
                    type="date"
                    placeholder="Date"
                  />

                  <button className="btn " onClick={() => setAddNotes(true)}>
                    Add a Note
                  </button>
                  <button type="submit" className="py-2 sm:col-span-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {editBox && (
          <motion.div
            className="absolute px-4 inset-0 size-full z-1 grid place-items-center"
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0",
            }}
            exit={{
              y: "100%",
            }}
            transition={{
              duration: 0.5,
              ease: [1, 0.02, 0.2, 0.76],
            }}
          >
            <div className="rounded-md w-full max-w-240 outline">
              <div className="p-4 border-b-[1px] head-line headline overflow-x-hidden flex justify-between items-center">
                <h1>Edit</h1>
                <span onClick={() => setEditBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="grid sm:grid-cols-2 gap-4 px-4 h-full max-h-140 overflow-x-hidden overflow-y-auto set-custom-scroll p-2">
                  <input
                    className="outline inline-block exclusive w-full"
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="tel"
                    placeholder="Contact no."
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="outline inline-block exclusive w-full"
                    type="text"
                    placeholder="Website Link"
                  />
                  <select
                    name="studentArea"
                    className="outline rounded-sm py-1 px-2"
                    id="studentArea"
                  >
                    <option disabled={true} defaultChecked value="">
                      Select a area
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      area name
                    </option>
                    <option className="text-md" value="areaName">
                      city name
                    </option>
                  </select>
                  <select
                    name="studentArea"
                    className="outline rounded-sm py-1 px-2"
                    id="studentArea"
                  >
                    <option disabled={true} defaultChecked value="">
                      Select a City
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                    <option className="text-md" value="cityName">
                      city name
                    </option>
                  </select>

                  <input
                    className="outline inline-block exclusive w-full"
                    type="date"
                    placeholder="Date"
                  />

                  <button className="btn " onClick={() => setAddNotes(true)}>
                    Add / Edit a Note
                  </button>
                  <button type="submit" className="py-2 sm:col-span-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {addNotes && (
          <motion.div
            className="absolute px-4 inset-0 size-full bg-[rgba(0,0,0,.8)] z-1 grid place-items-center"
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [1, 0.02, 0.2, 0.76] }}
          >
            <div className="rounded-md w-full max-w-100 outline bg-white p-4">
              <div className="flex justify-between items-center border-b-[1px] pb-2">
                <h1>Add a Note</h1>
                <span
                  onClick={() => {
                    setAddNotes(false);
                  }}
                  className="cursor-pointer"
                >
                  <i className="ri-close-large-line"></i>
                </span>
              </div>

              <div className="mt-4">
                <textarea
                  className="outline w-full exclusive resize-none p-1 set-custom-scroll"
                  placeholder="Enter Note"
                ></textarea>
                <input
                  type="date"
                  className="outline w-full exclusive mb-2 p-1"
                  placeholder="Date"
                />
                <button
                  type="submit"
                  onClick={() => {
                    setAddNotes(false);
                  }}
                  className="mt-2 btn w-full bg-green-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyDashboard;
