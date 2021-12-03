import React, { createContext, useContext } from 'react';
import StudentList from '../components/StudentList';
// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useStudentContext = () => useContext(StudentContext);

// StudentProvider is a function that will return a provider component that makes global state available
export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        id: 1,
        name: "Stu A",
        major: "Com Sci",
      },
      {
        id: 2,
        name: "Stu B",
        major: "Communication",
      },
      // TODO: Add two students with a `name`, `major` and `id` property
    ],
  };

  // TODO: Fill in the value prop for the provider
  return (
    <StudentContext.Provider value={{ students: initialState.students }} {...children}>
      {/* //TODO: Render the children from props */}
      <StudentList />
    </StudentContext.Provider>
  );
};
