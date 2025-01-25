import Part from "./Part";

export const Content = ({ parts }) => parts.map((part) => <Part key={part.name} name={part.name} exercise={part.exercises} />);
    


 
  