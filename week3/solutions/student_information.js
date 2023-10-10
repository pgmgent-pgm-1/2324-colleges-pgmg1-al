/*
 * Student information
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

/*
 * Construct a variable student with value a literal object
 * The literal object contains key / value pairs, the key is the access to the value. The key is a variable with a certain value.
 */
const student = {
  firstName: "Olivier",
  surName: "Pieters",
  genderCode: 1,
  dayOfBirth: 187605720000,
  courses: [
    {
      name: "Computer Systems",
      lecturers: ["Thibault Fouquaert", "Lennart Dubois"],
    },
    {
      name: "Web Design",
      lecturers: ["Mathieu Spillebeen"],
    },
    {
      name: "Programming",
      lecturers: ["Thibault Fouquaert", "Philippe De Pauw - Waterschoot"],
    },
  ],
};

/**
 * Generate String for Student
 */
function generateStringForStudent(student) {
  return `
  ======================================================
  |                STUDENT INFORMATION                 |
  ======================================================
  PERSONAL
  ======================================================
  Name: ${student.firstName} ${student.surName}
  ${generateStringForGender(student.genderCode)}
  Day of birth: ${new Date(student.dayOfBirth).toDateString()}
  ======================================================
  ${generateStringForCourses(student.courses)}
  ======================================================
    `;
}

/**
 * Generate String for Gender
 */
function generateStringForGender(genderCode) {
  let tempStr = "Gender: ";
  switch (genderCode) {
    case 0:
    default:
      tempStr += "Niet gekend";
      break;
    case 1:
      tempStr += "Man";
      break;
    case 2:
      tempStr += "Vrouw";
      break;
    case 9:
      tempStr += "Niet van toepassing";
      break;
  }
  return tempStr;
}

/**
 * Generate String for Courses
 */
function generateStringForCourses(courses) {
  let tempStr = "";
  tempStr += `COURSES
  ======================================================\n`;
  courses.forEach(function (c, index) {
    tempStr += `Course: ${c.name}\n${generateStringForLecturers(c.lecturers)}`;
    if (index < courses.length - 1) {
      tempStr += `\n------------------------------------------------\n`;
    }
  });
  return tempStr;
}

/**
 * Generate String for Lecturers
 */
function generateStringForLecturers(lecturers) {
  return `Lecturers: ${lecturers.join(", ")}`;
}

console.log(generateStringForStudent(student));
