// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <header className="header">
        <h1
          style={{
            color: "#FFC300",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <Button color="green" text="Add" onClick={onClick} />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//CSS in JS
// const headingStyle = {
//   color: "#FFC300",
//   backgroundColor: "#900C3F",
// };
export default Header;
