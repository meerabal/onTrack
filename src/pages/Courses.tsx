import { Link, useNavigate } from "react-router-dom";
import { Course, User } from "../types";
import { SketchPicker } from "react-color";
import React from "react";

interface CoursePageInterface {
  user: User;
  addCourse: (course: Course) => void;
}

const CoursePage = ({ user, addCourse }: CoursePageInterface) => {
  const navigate = useNavigate();

  const courseName = React.useRef<string>("");
  const [colorState, setColorState] = React.useState("#fff");
  const [colorPicker, setColorPicker] = React.useState(false);

  const updateCourseName = (event: any) => {
    courseName.current = event.target.value;
  };

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
      <p>Hello {user.username}! Here's your courses:</p>
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
      <label style={{ color: colorState }}>Color selected</label>
      {colorPicker && (
        <SketchPicker
          color={colorState}
          onChangeComplete={handleChangeComplete}
        />
      )}
      <button onClick={handleSelectColor} className="small-button">
        Select color
      </button>

      <button onClick={onAddCourse} className="small-button">
        Add course
      </button>
    </>
  );
};

export default CoursePage;
