import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const SERVER = "http://localhost:8000";
const images = [
  "appleTree",
  "field",
  "flower",
  "garden",
  "lilies",
  "lotus",
  "pond",
  "seaside",
];
const measurement = [100, 200, 300];

function defaultFetchOpts() {
  return {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": SERVER,
    },
  };
}

function FormForImage() {
  const [imageURL, setImageURL] = useState();
  const [fileName, setFileName] = useState("select");
  const [width, setWidth] = useState("select");
  const [height, setHeight] = useState("select");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(fileName, width, height);

      await fetch(
        `${SERVER}/api/images?filename=${fileName}&width=${width}&height=${height}`,
        {
          method: "GET",
          ...defaultFetchOpts(),
        }
      )
        .then((res) => res.blob())
        .then((myBlob) => setImageURL(URL.createObjectURL(myBlob)));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Filename Select</Form.Label>
          <Form.Control
            as="select"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          >
            <option disabled value="select" hidden>
              Select filename
            </option>
            {images.map((image) => (
              <option key={image} value={image}>
                {image}
              </option>
            ))}
          </Form.Control>

          <Form.Label>Width Select</Form.Label>
          <Form.Control
            as="select"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          >
            <option disabled value="select" hidden>
              Select Width
            </option>
            {measurement.map((measure) => (
              <option key={measure} value={measure}>
                {measure}
              </option>
            ))}
          </Form.Control>

          <Form.Label>Height Select</Form.Label>
          <Form.Control
            as="select"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          >
            <option disabled value="select" hidden>
              Select Height
            </option>
            {measurement.map((measure) => (
              <option key={measure} value={measure}>
                {measure}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          disabled={
            fileName === "select" || width === "select" || height === "select"
          }
        >
          Submit
        </Button>
      </Form>
      <Image className="image" src={imageURL} fluid />
    </div>
  );
}

export default FormForImage;
