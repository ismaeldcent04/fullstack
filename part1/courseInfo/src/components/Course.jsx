import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

export const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <Content parts={course.parts} />
    </div>
  );
};
