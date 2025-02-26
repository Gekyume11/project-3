import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const InterviewDashboard = () => {
  const [detailBox, setDetailBox] = useState(false);
  const [msgIndex, setMsgIndex] = useState(null);
  const [addFollowUp, setAddFollowUp] = useState(false);
  const [addInterviewBox, setInterviewBox] = useState(false);

  const showStudentDetail = (index) => {
    setMsgIndex(index);
    setDetailBox(true);
    setAddFollowUp(false); // Ensure only one dialog opens at a time
  };

  const students = [
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
  ];

  const statusColors = {
    done: "green",
    pending: "orange",
    rejected: "#FF0000",
  };

  return (
    <div className="size-full relative flex flex-col gap-5 py-4 px-4 lg:px-10">
      <div className="flex p-1 350px:flex-row flex-col gap-3 h-fit">
        <input
          type="text"
          id="studentSearch"
          placeholder="Search any Student"
          className="outline w-full"
        />
        <div className="flex gap-2 lg:flex-row flex-col">
          <button className="350px:w-10 w-full h-10 350px:size-10 grid place-items-center">
            <i className="ri-search-line text-lg"></i>
          </button>
          <button
            className="350px:w-10 w-full h-10 350px:size-10 grid place-items-center"
            onClick={() => setInterviewBox(true)}
          >
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>

      <div className="h-full overflow-auto set-custom-scroll p-1 pe-2.5">
        <table className="min-w-full divide-y outline-[2px] outline-gray-500 overflow-hidden rounded-md">
          <thead className="rounded-md headline overflow-hidden">
            <tr>
              <th
                colSpan={2}
                className="outline outline-gray-500 text-sm px-6 py-3 text-left font-medium uppercase tracking-wider"
              >
                Company
              </th>
              <th className="outline outline-gray-500 text-sm px-6 py-3 text-center font-medium uppercase tracking-wider">
                status & info
              </th>
            </tr>
          </thead>
          <tbody className="">
            {students.map(({ studentName, companyName, status }, i) => (
              <tr key={i}>
                <td
                  colSpan={2}
                  className="px-6 py-4 outline outline-gray-500 text-sm whitespace-nowrap"
                >
                  {companyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap outline outline-gray-500 text-sm flex justify-center items-center gap-2">
                  <span
                    className="text-[10px] block size-3.5 rounded-full text-center capitalize outline tracking-[1px] outline-black"
                    title={status}
                    style={{
                      background: statusColors[status],
                    }}
                  ></span>
                  <i
                    onClick={() => showStudentDetail(i)}
                    className="ri-information-2-line cursor-pointer text-xl"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Student Detail Modal */}
      <AnimatePresence mode="wait">
        {detailBox && !addFollowUp && (
          <motion.div
            className="absolute overflow-auto px-4 inset-0 size-full z-1 grid place-items-center"
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [1, 0.02, 0.2, 0.76] }}
          >
            <div className="rounded-md flex flex-col gap-2 size-full max-w-100 max-h-110 outline">
              <div className="flex p-4 w-full outline h-fit justify-between items-center">
                <h1>{students[msgIndex]?.studentName}</h1>
                <span onClick={() => setDetailBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>

              <div className="h-full flex flex-col w-full p-2">
                <div className="flex flex-col h-full p-2 pe-3 gap-3">
                  <p className="font-normal py-2 outline rounded-md px-4 flex flex-col">
                    <span className="font-normal text-xs">Company:</span>{" "}
                    {students[msgIndex]?.companyName}
                  </p>
                  <p
                    className="text-gray-medium capitalize px-4 flex flex-col py-2 outline outline-black rounded-md font-medium"
                    style={{ color: statusColors[students[msgIndex]?.status] }}
                  >
                    <span className="font-normal text-xs">Status:</span>{" "}
                    {students[msgIndex]?.status}
                  </p>
                  <p className="text-gray-medium px-4 flex flex-col py-2 outline rounded-md">
                    <span className="font-normal text-xs">Date:</span>{" "}
                    {students[msgIndex]?.date}
                  </p>

                  <div className="flex gap-1 flex-col outline overflow-hidden h-full rounded-md">
                    <div className="font-normal outline capitalize w-full px-4 py-2 flex items-center justify-between">
                      <span className="text-xs">follow ups:</span>

                      <span
                        onClick={() => {
                          setAddFollowUp(true);
                          setDetailBox(false);
                        }}
                        className="text-base bg-blue-500 cursor-pointer text-white rounded-md"
                      >
                        <i className="ri-add-large-line"></i>
                      </span>
                    </div>

                    <div className="h-full px-4 py-2 set-custom-scroll">
                      <p className="text-gray-700 400px:text-base text-sm">
                        {" "}
                        - No follow-ups added yet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {addInterviewBox && (
          <motion.div
            className="absolute px-4 inset-0 size-full bg-[rgba(0,0,0,.8)] z-1 grid place-items-center"
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
            <div className="rounded-md w-full max-w-100 outline">
              <div className="p-4 head-line border-b-[1px] flex justify-between items-center">
                <h1>Add a Interview</h1>
                <span onClick={() => setInterviewBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="grid gap-4 px-4 h-full max-h-100 overflow-y-auto set-custom-scroll p-2">
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Select a Student</h3>
                    <select
                      name="studentArea"
                      className="outline rounded-sm py-1 px-2"
                      id="studentArea"
                    >
                      <option disabled={true} defaultChecked value="">
                        Select a Student
                      </option>
                      <option className="text-md" value="studName">
                        Dhruv
                      </option>
                      <option className="text-md" value="studName">
                        Dhruv
                      </option>
                      <option className="text-md" value="studName">
                        Dhruv
                      </option>
                      <option className="text-md" value="studName">
                        Dhruv
                      </option>
                    </select>
                  </div>

                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Company</h3>
                    <select
                      name="studentArea"
                      className="outline rounded-sm py-1 px-2"
                      id="studentArea"
                    >
                      <option disabled={true} defaultChecked value="">
                        Select a Company
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                      <option className="text-md" value="companyName">
                        Company Name
                      </option>
                    </select>
                  </div>

                  <button
                    onClick={() => setAddFollowUp(true)}
                    className="btn text-md font-medium capitalize"
                  >
                    Add a Follow Up.
                  </button>

                  <button type="submit" className="py-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {addFollowUp && (
          <motion.div
            className="absolute px-4 inset-0 size-full bg-[rgba(0,0,0,.8)] z-1 grid place-items-center"
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [1, 0.02, 0.2, 0.76] }}
          >
            <div className="rounded-md w-full max-w-100 outline bg-white p-4">
              <div className="flex justify-between items-center border-b-[1px] pb-2">
                <h1>Add Follow-up</h1>
                <span
                  onClick={() => {
                    setAddFollowUp(false);
                  }}
                >
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>

              <div className="mt-4">
                <input
                  type="date"
                  className="outline w-full my-2 p-1"
                  placeholder="Date"
                />
                <textarea
                  className="outline w-full resize-none p-1 set-custom-scroll"
                  placeholder="Enter Follow-up"
                ></textarea>

                <div className="px-4 outline rounded-md my-3 pt-2 pb-4 grid gap-2">
                  <h3 className="opacity-50">Status</h3>
                  <select
                    name="studentArea"
                    className="outline rounded-sm py-1 px-2"
                    id="studentArea"
                  >
                    <option disabled={true} defaultChecked value="">
                      Select a Status
                    </option>
                    <option className="text-md" value="statusValue">
                      Pending
                    </option>
                    <option className="text-md" value="statusValue">
                      Done
                    </option>
                    <option className="text-md" value="statusValue">
                      Rejected
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  onClick={() => {
                    setAddFollowUp(false);
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

export default InterviewDashboard;
