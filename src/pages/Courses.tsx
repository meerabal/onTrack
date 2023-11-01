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

  const updateCourseName = (event: any) => {
    courseName.current = event.target.value;
  };

  const onAddCourse = () => {
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

  return (
    <>
      <p>Hello {user.username}! Here's your courses</p>
      {user.courses.map((course: Course) => {
        return (
          <>
            <label style={{ color: course.color }}>{course.name}</label>
            <br />
          </>
        );
      })}
      <input placeholder={"course name"} onChange={updateCourseName} />
      <SketchPicker
        color={colorState}
        onChangeComplete={handleChangeComplete}
      />

      <button onClick={onAddCourse}>Add course</button>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </>
  );
};

export default CoursePage;
