import Button from "./Components/Button/Button";

const Main = () => {
  return (
    <div>
      Main world
      <Button onClick={() => console.log("hi")}>Button</Button>
    </div>
  );
};

export default Main;
