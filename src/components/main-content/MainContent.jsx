import "./MainContent.css";
import { GitHubCalendar } from "react-github-calendar";

function MainContent() {
  const theme = {
    light: ["#e5ebe70a", "#145c38", "#b2d8bd77", "#37835a", "#74b58b"],
  };
  return (
    <div className="content-container">
      <section id="about">
        <h2>About</h2>
      </section>

      <section id="experience">
        <h2>Experience</h2>
      </section>

      <section id="works">
        <h2>Works</h2>
      </section>
      <footer>
        <div className="github-activity">
          <GitHubCalendar
            username="jethrosala9"
            colorScheme="light"
            theme={theme}
            blockSize={8}
            blockMargin={2}
            fontSize={12}
          />
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
