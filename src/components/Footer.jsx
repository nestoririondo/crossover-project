import "../styles/Footer.css";
import githubIcon from "../assets/icons/github.svg";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const year = getYear();

  return (
    <footer>
      <div className="inside">
        <p>
          © {year} Crossover Project by{" "}
          <a href="https://github.com/KenKindermann">Ken</a>,{" "}
          <a href="https://github.com/islandarber">Christina</a> and{" "}
          <a href="https://github.com/nestoririondo">Néstor</a>
        </p>
        <a href="https://github.com/nestoririondo/crossover-project">
          <img src={githubIcon} alt="github icon" />
        </a>
        <p>
          Sources:{" "}
          <a href="https://www.bmi-calculator.net/bmr-calculator/">
            BMR Calculator
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/Dietary_Reference_Intake">
            Wikipedia
          </a>
          ,{" "}
          <a href="https://examine.com/guides/protein-intake/">
            Optimal Protein Intake Guide
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
