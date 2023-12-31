import { useNavigate } from "react-router-dom";
import { Course, User } from "../types";
import { SketchPicker } from "react-color";
import React from "react";

/* course page with current courses and option to add courses */
interface CoursePageInterface {
  user: User;
  addCourse: (course: Course) => void;
}

const CoursePage = ({ user, addCourse }: CoursePageInterface) => {
  const navigate = useNavigate();

  // keeps track of the course name entered
  const courseName = React.useRef<string>("");
  // keeps track of the color selected
  const [colorState, setColorState] = React.useState("");
  // keeps track of whether the color picker is open or closed
  const [colorPicker, setColorPicker] = React.useState(false);

  const updateCourseName = (event: any) => {
    courseName.current = event.target.value;
  };

  /* adds course and updates the course list */
  const onAddCourse = () => {
    if (courseName.current === "") {
      alert("Please enter course name");
      return;
    }
    if (
      user.courses.map((course) => course.name).includes(courseName.current)
    ) {
      alert("This course already exists");
      return;
    }
    addCourse({ name: courseName.current, color: colorState });
    navigate("/courses");
  };

  const handleChangeComplete = (color: any) => {
    setColorState(color.hex);
  };

  const handleSelectColor = () => {
    setColorPicker(() => !colorPicker);
  };

  return (
    <>
      <h3>Hello {user.username}! Here's your courses:</h3>
      {user.courses.length < 1 && <p>You have no courses added yet</p>}
      {user.courses.map((course: Course) => {
        return (
          <>
            <label key={course.name} style={{ color: course.color }}>
              {course.name}
            </label>
            <br />
          </>
        );
      })}
      <br />
      <h3>Add a course:</h3>
      <div className="div-row">
        <label>Course name: </label>
        <input
          size={7}
          placeholder={"course name"}
          onChange={updateCourseName}
        />
      </div>
      <br />
      <button onClick={handleSelectColor} className="small-button">
        Select color
      </button>
      <strong style={{ color: colorState }}>
        {colorState === "" ? "No color selected yet" : "Color selected"}
      </strong>
      {colorPicker && (
        <SketchPicker
          color={colorState}
          onChangeComplete={handleChangeComplete}
        />
      )}
      <br />
      <button onClick={onAddCourse} className="small-button">
        Add course
      </button>
    </>
  );
};

export default CoursePage;
