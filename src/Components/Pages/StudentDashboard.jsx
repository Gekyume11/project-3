import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const StudentDashboard = () => {
  const [addStudentBox, setAddStudentBox] = useState(false);
  const [detailBox, setDetailBox] = useState(false);
  const [msgIndex, setMsgIndex] = useState(null);

  const showStudentDetail = (index) => {
    setMsgIndex(index), setDetailBox(true);
  };

  const students = [
    {
      studentName: "Dhruv Harsoda",
      course: "Full Stack",
      Education: "SY - Saurastra",
      contact: "+91 9999999999",
      email: "dhruv@gmail.com",
      notes: ["This is a Demo Note!", "Another example of Demo note!"],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "active",
      studentArea: "Katargam",
      experience: "Fresher",
      facultyName: "Albert Einstein",
      date: "23-2-2025",
    },
    {
      studentName: "Aryan Mehta",
      course: "Data Science",
      Education: "TY - Gujarat University",
      contact: "+91 8888888888",
      email: "aryan.mehta@example.com",
      notes: [
        "Completed the first module successfully!",
        "Needs improvement in Python coding.",
      ],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "inactive",
      studentArea: "Adajan",
      experience: "6 months",
      facultyName: "Allah hu Akhbar",
      date: "2-3-1847",
    },
    {
      studentName: "Satyam Singh",
      course: "Full Stack",
      Education: "SY - Saurastra",
      contact: "+91 9999999999",
      email: "dhruv@gmail.com",
      notes: ["This is a Demo Note!", "Another example of Demo note!"],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "active",
      studentArea: "Katargam",
      experience: "Fresher",
      facultyName: "Albert Einstein",
      date: "23-2-2025",
    },
    {
      studentName: "rehman khuresi",
      course: "Data Science",
      Education: "TY - Gujarat University",
      contact: "+91 8888888888",
      email: "aryan.mehta@example.com",
      notes: [
        "Completed the first module successfully!",
        "Needs improvement in Python coding.",
      ],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "inactive",
      studentArea: "Adajan",
      experience: "6 months",
      facultyName: "Allah hu Akhbar",
      date: "2-3-1847",
    },
    {
      studentName: "Hamza Alee",
      course: "Full Stack",
      Education: "SY - Saurastra",
      contact: "+91 9999999999",
      email: "dhruv@gmail.com",
      notes: ["This is a Demo Note!", "Another example of Demo note!"],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "active",
      studentArea: "Katargam",
      experience: "Fresher",
      facultyName: "Albert Einstein",
      date: "23-2-2025",
    },
    {
      studentName: "Abdul Alim",
      course: "Data Science",
      Education: "TY - Gujarat University",
      contact: "+91 8888888888",
      email: "aryan.mehta@example.com",
      notes: [
        "Completed the first module successfully!",
        "Needs improvement in Python coding.",
      ],
      resume: "https://dhruv-harsoda.tiiny.site/DHRUV-HARSODA-output.pdf",
      studentStatus: "inactive",
      studentArea: "Adajan",
      experience: "6 months",
      facultyName: "Allah hu Akhbar",
      date: "2-3-1847",
    },
  ];

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
        <div className="grid 400px:grid-cols-2 gap-3">
          <select
            name="studentArea"
            className="outline rounded-sm py-1 px-2"
            id="studentArea"
          >
            <option disabled={true} defaultChecked value="">
              Select a area
            </option>
            <option className="text-md" value="areaName">
              Katargam
            </option>
            <option className="text-md" value="areaName">
              Mota-varracha
            </option>
            <option className="text-md" value="areaName">
              Uttran
            </option>
            <option className="text-md" value="areaName">
              Navsari
            </option>
            <option className="text-md" value="areaName">
              Rajkot
            </option>
            <option className="text-md" value="areaName">
              Hirabaugh
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
            <option className="text-md" value="courseName">
              Full Stack
            </option>
            <option className="text-md" value="courseName">
              Data Science
            </option>
            <option className="text-md" value="courseName">
              Master in Multimedia
            </option>
            <option className="text-md" value="courseName">
              Game Development
            </option>
            <option className="text-md" value="courseName">
              Web development
            </option>
            <option className="text-md" value="courseName">
              UI / UX / Web Designer
            </option>
          </select>
        </div>
      </div>

      <div className="h-full overflow-auto set-custom-scroll p-1 pe-2.5">
        <table className="min-w-full divide-y outline-[2px] outline-gray-400 overflow-hidden rounded-md">
          <thead className="rounded-md headline overflow-hidden">
            <tr>
              <th
                colSpan={2}
                className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Student Name
              </th>
              <th
                colSpan={2}
                className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Course
              </th>
              <th
                colSpan={2}
                className="outline outline-gray-400 text-sm px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Faculty name
              </th>
              <th className="outline outline-gray-400 text-sm px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                status & info
              </th>
            </tr>
          </thead>
          <tbody className="">
            {students.map(
              ({ studentName, course, studentStatus, facultyName }, i) => (
                <tr key={i}>
                  <td
                    colSpan={2}
                    className="px-6 py-4 outline outline-gray-400 text-sm whitespace-nowrap"
                  >
                    {studentName}
                  </td>
                  <td
                    colSpan={2}
                    className="px-6 py-4 outline outline-gray-400 text-sm whitespace-nowrap"
                  >
                    {course}
                  </td>
                  <td
                    colSpan={2}
                    className="px-6 py-4 outline outline-gray-400 text-sm whitespace-nowrap"
                  >
                    {facultyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap outline outline-gray-400 text-sm flex justify-center items-center gap-2">
                    <span
                      className="text-[10px] block size-3.5 rounded-full text-center capitalize outline tracking-[1px] outline-black"
                      title={studentStatus}
                      style={{
                        background:
                          studentStatus === "active" ? "#4BB543" : "#FF0000",
                        color: "white",
                      }}
                    ></span>
                    <i
                      onClick={() => showStudentDetail(i)}
                      className="ri-information-2-line cursor-pointer text-xl"
                    ></i>
                  </td>
                </tr>
              )
            )}
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
              <div className="p-4 border-b-[1px] head-line overflow-x-hidden flex justify-between items-center">
                <h1>Add a Student</h1>
                <span onClick={() => setAddStudentBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-3">
                <div className="grid gap-4 pe-4 h-full max-h-100 overflow-x-hidden overflow-y-auto set-custom-scroll p-2">
                  <input
                    className="outline inline-block w-full exclusive"
                    type="text"
                    placeholder="Student Name"
                  />
                  <input
                    className="outline inline-block w-full exclusive"
                    type="text"
                    placeholder="Course"
                  />
                  <input
                    className="outline inline-block w-full exclusive"
                    type="text"
                    placeholder="Education"
                  />
                  <input
                    className="outline inline-block w-full exclusive"
                    type="tel"
                    placeholder="Contact no."
                  />
                  <input
                    className="outline inline-block w-full exclusive"
                    type="tel"
                    placeholder="Student's Email"
                  />
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Add a Note</h3>
                    <textarea
                      name="Add a Note"
                      className="exclusive resize-none block outline text-sm outline-[rgba(0,0,0,.4)] w-full h-24"
                      id="studentNote"
                    ></textarea>
                  </div>
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Upload Student's Resume</h3>
                    <input
                      className="exclusive w-full outline cursor-pointer outline-[rgba(0,0,0,.4)]"
                      type="file"
                      name="resume"
                      accept="application/pdf"
                      id="studentResume"
                    />
                  </div>
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Student's Status</h3>
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
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Select a Area</h3>
                    <select
                      name="studentArea"
                      className="outline rounded-sm py-1 px-2"
                      id="studentArea"
                    >
                      <option disabled={true} defaultChecked value="">
                        Select a area
                      </option>
                      <option className="text-md" value="areaName">
                        Katargam
                      </option>
                      <option className="text-md" value="areaName">
                        Mota-varracha
                      </option>
                      <option className="text-md" value="areaName">
                        Uttran
                      </option>
                      <option className="text-md" value="areaName">
                        Navsari
                      </option>
                      <option className="text-md" value="areaName">
                        Rajkot
                      </option>
                      <option className="text-md" value="areaName">
                        Hirabaugh
                      </option>
                    </select>
                  </div>
                  <div className="px-4 outline rounded-md pt-2 pb-4 grid gap-2">
                    <h3 className="opacity-50">Experience</h3>
                    <select
                      name="studentArea"
                      className="outline rounded-sm py-1 px-2"
                      id="studentArea"
                    >
                      <option disabled={true} defaultChecked value="">
                        Select any one option
                      </option>
                      <option className="text-md" value="0m">
                        No-expreience {"(Fresher)"}
                      </option>
                      <option className="text-md" value="0-1m">
                        0 - 1 month
                      </option>
                      <option className="text-md" value="2-3m">
                        2 - 3 months
                      </option>
                      <option className="text-md" value="3-6m">
                        3 - 6 months
                      </option>
                      <option className="text-md" value="6-8m">
                        6 - 8 months
                      </option>
                      <option className="text-md" value="3-6m">
                        8 - 12 months
                      </option>
                      <option className="text-md" value="1y">
                        1 year or more
                      </option>
                      <option className="text-md" value="1.5y">
                        1.5 yrs+
                      </option>
                      <option className="text-md" value="2y">
                        2 yrs+
                      </option>
                      <option className="text-md" value="3y">
                        3 yrs+
                      </option>
                    </select>
                  </div>
                  <input
                    className="outline inline-block w-full exclusive"
                    type="text"
                    placeholder="Faculty name"
                  />
                  <input
                    className="outline inline-block w-full exclusive"
                    type="date"
                    placeholder="Date"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="py-2 exclusive"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {detailBox && (
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

export default StudentDashboard;
