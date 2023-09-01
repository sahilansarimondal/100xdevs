import React from "react";
import {
  Card,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

function CreateCourse() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      {title}
      {description}
      {price}
      {image}
      {isChecked}
      <div
        style={{
          paddingTop: "150px",
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">
          Welcome to Coursera.Create Course below
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" style={{ width: "700px", padding: "30px" }}>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Img Url"
            variant="outlined"
          />
          <br />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
              />
            }
            label="Publish"
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                    imageLink: image,
                    published: isChecked,
                  }),
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    console.log(data);
                  });
                });
              }}
              variant="contained"
            >
              Create Course
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CreateCourse;
