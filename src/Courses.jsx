import React, { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  if (!courses) {
    setIsLoading(true);
  }
  if (!isLoading) {
    return <div>{JSON.stringify(courses)}</div>;
  }
}

function Course(prop) {
  return <div>{prop.title}</div>;
}

export default Courses;
