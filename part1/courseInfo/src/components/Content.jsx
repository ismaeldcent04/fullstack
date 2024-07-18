import { Part } from "./Part";
import { Summary } from "./Summary";

export const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        );
      })}
      <Summary parts={parts} />
    </>
  );
};
