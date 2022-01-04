import { FileUploader } from "react-drag-drop-files";
import { useEffect, useState } from "react";
import styles from "./Upload.module.css";
import { Button, Carousel } from "react-bootstrap";

const Upload = () => {
  const fileTypes = ["JPG", "PNG", "JPEG"];
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const handleChange = (file) => {
    console.log(file);
    setImages([...images, file]);
  };

  const handleArrows = (e) => {
    console.log("e", e);
    setIndex(e);
  };

  useEffect(() => {
    console.log("efecto", images.length - 1, images.length);
    setIndex(images.length > 1 ? images.length - 1 : 0);
  }, [images.length]);

  console.log(images);

  return (
    <div className={styles.upload}>
      <div className={styles.drag}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          className={styles.drag}
        />
      </div>

      <Carousel
        interval={null}
        className={styles.carousel}
        activeIndex={index}
        onSelect={handleArrows}
        indicators={false}
      >
        {images.map((item, index) => (
          <Carousel.Item className={styles.carouselItem}>
            <img key={index} src={URL.createObjectURL(item)} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Button className={styles.uploadButton}>Upload</Button>
    </div>
  );
};

export default Upload;
