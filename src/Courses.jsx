import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);

  return (
    <div>
      {courses.map((course) => {
        return (
          <div>
            <Card>
              {course.title}
              {course.description}
              {course.price}
              {course.imageLink}
            </Card>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
