import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const CompanyDashboard = () => {
  const [addStudentBox, setAddStudentBox] = useState(false);
  const [detailBox, setDetailBox] = useState(false);
  const [msgIndex, setMsgIndex] = useState(null);

  const showStudentDetail = (index) => {
    setMsgIndex(index), setDetailBox(true);
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
    pending: "#B2651B",
    rejected: "#FF0000",
  };

  return (
    <div className="size-full relative flex flex-col gap-5 py-4 px-4 lg:px-10">
      <div className="flex p-1 400px:flex-row flex-col gap-3 h-fit input-holder py-4">
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
            <i className="ri-add-line text-lg"></i>
          </button>
        </div>
      </div>

      <div className="h-full overflow-auto set-custom-scroll p-1 pe-2.5">
        <table className="min-w-full divide-y outline-[2px] outline-gray-400 overflow-hidden rounded-md">
          <thead className="rounded-md headline overflow-hidden">
            <tr>
              <th colSpan={2} className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
              <th className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">status & info</th>
            </tr>
          </thead>
          <tbody className="">
            {students.map(({ companyName, status }, i) => (
              <tr key={i}>
                <td colSpan={2} className="px-6 py-4 outline outline-gray-400 text-sm whitespace-nowrap">{companyName}</td>
                <td className="px-6 py-4 whitespace-nowrap outline outline-gray-400 text-sm flex justify-center items-center gap-2">
                  <span
                    className="text-[10px] block size-3.5 rounded-full text-center capitalize outline tracking-[1px] outline-black"
                    title={status}
                    style={{
                      background: statusColors[status]
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
            <div className="rounded-md w-full max-w-100 outline">
              <div className="p-4 border-b-[1px] head-line headline overflow-x-hidden flex justify-between items-center">
                <h1>Add a Student</h1>
                <span onClick={() => setAddStudentBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="grid gap-4 px-4 h-full max-h-100 overflow-x-hidden overflow-y-auto set-custom-scroll p-2">
                  <input
                    className="outline inline-block exclusive w-full"
                    type="text"
                    placeholder="Company Name"
                  />
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Company's Status</h3>
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        className="w-fit"
                        name="studentStatus"
                        id="activeStatus"
                      />
                      <label htmlFor="activeStatus">Active</label>
                    </div>
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        className="w-fit"
                        name="studentStatus"
                        id="notActiveStatus"
                      />
                      <label htmlFor="notActiveStatus">Not-Active</label>
                    </div>
                  </div>
                  <input
                    className="outline inline-block exclusive w-full"
                    type="date"
                    placeholder="Date"
                  />
                  <button type="submit" className="py-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {detailBox && (
          <motion.div
            className="absolute px-4 inset-0 size-full head-line z-1 grid place-items-center"
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
              <div className="p-4 border-b-[1px] head-line flex justify-between items-center">
                <h1 className="tracking-[1px]">
                  {students[msgIndex].studentName}
                </h1>
                <span onClick={() => setDetailBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="px-4 h-full max-h-100 overflow-y-auto set-custom-scroll p-2">
                  <div className="space-y-4 capitalize">
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Course:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].course}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Email:{" "}
                      <span className="tracking-[1px] text-base normal-case">
                        {students[msgIndex].email}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Contact:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].contact}
                      </span>
                    </p>
                    <div className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      <p>Notes:</p>
                      <ul className="space-y-1">
                        {students[msgIndex].notes.map((note, index) => (
                          <li key={index}>- {note}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="py-2 outline px-4 rounded-md text-sm">
                      Resume:{" "}
                      <a
                        target="_blank"
                        href={students[msgIndex].resume}
                        className="underline normal-case"
                      >
                        click here
                      </a>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Education:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].Education}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Status:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].studentStatus}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Area:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].studentArea}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Experience:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].experience}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Faculty:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].facultyName}
                      </span>
                    </p>
                    <p className="py-2 outline px-4 rounded-md flex flex-col text-sm">
                      Date:{" "}
                      <span className="tracking-[1px] text-base">
                        {students[msgIndex].date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyDashboard;
