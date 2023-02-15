import { Box, Button } from "@mui/material";
import "./CourseBox.css";

const CourseBox = () => {
  return (
    <span className="box">
      <Button component="span" sx={{ position: "absolute", width: 217, height: 208, left: 188, top: 656, p: 6, border: "2px solid #757575", borderRadius: 5 }}>
          Subject
        </Button>
      </Button>
    </span>
  );
};

export default CourseBox;
