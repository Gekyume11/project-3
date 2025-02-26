import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const CourseDashboard = () => {
  const [addStudentBox, setAddStudentBox] = useState(false);
  const [addFollowUp, setAddFollowUp] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [students, setStudents] = useState([
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
  ]);

  const deleteOnIndex = (index) => {
    let copyData = [...students];
    copyData.splice(index, 1);
    setStudents(copyData);
  };

  useEffect(() => {
  }, [students]);

  return (
    <div className="size-full relative flex flex-col gap-5 py-4 px-4 lg:px-10">
      <div className="flex p-1 400px:flex-row flex-col gap-3 h-fit">
        <input
          type="text"
          id="studentSearch"
          placeholder="Search any Student"
          className="outline w-full"
        />
        <div className="flex gap-2">
          <button className="400px:w-10 head-line w-full h-10 400px:size-10 grid place-items-center">
            <i className="ri-search-line text-lg"></i>
          </button>
          <button
            className="400px:w-10 head-line w-full h-10 400px:size-10 grid place-items-center"
            onClick={() => setAddStudentBox(true)}
          >
            <i className="ri-user-add-line text-lg"></i>
          </button>
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
              <th className="outline outline-gray-400 text-sm px-6 py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {students.map(({ studentName, course, studentStatus }, i) => (
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
                <td className="px-6 py-4 whitespace-nowrap outline outline-gray-400 text-xl flex  items-center justify-center">
                  <span className="mr-8 cursor-pointer" onClick={() => setEditBox(true)}>
                    <i className="ri-pencil-line"></i>
                  </span>
                  <span className="cursor-pointer" onClick={() => deleteOnIndex(i)}>
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
                <h1>Add a Student</h1>
                <span onClick={() => setAddStudentBox(false)}>
                  <i className="ri-close-large-line cursor-pointer"></i>
                </span>
              </div>
              <div className="py-4 px-2">
                <div className="grid gap-4 px-4 h-full max-h-100 overflow-y-auto set-custom-scroll p-2">
                  <input type="text" name="courseName" placeholder="Course Name" id="courseName" />
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
        {editBox && (
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
                <h1>Add a Student</h1>
                <span onClick={() => setEditBox(false)}>
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
                        Edit
                      </option>
                      <option className="text-md" value="studName">
                        studentName
                      </option>
                      <option className="text-md" value="studName">
                        studentName
                      </option>
                      <option className="text-md" value="studName">
                        studentName
                      </option>
                      <option className="text-md" value="studName">
                        studentName
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
                  className="cursor-pointer"
                >
                  <i className="ri-close-large-line"></i>
                </span>
              </div>

              <div className="mt-4">
                <input
                  type="date"
                  className="outline w-full exclusive mb-2 p-1"
                  placeholder="Date"
                />
                <input
                  type="text"
                  className="outline w-full exclusive mb-2 p-1"
                  placeholder="Faculty Name"
                />
                <textarea
                  className="outline w-full exclusive resize-none p-1 set-custom-scroll"
                  placeholder="Enter Follow-up"
                ></textarea>
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

export default CourseDashboard;
