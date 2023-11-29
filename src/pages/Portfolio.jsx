
const Jetblue = '#3C3744'
const Dukeblue = '#090C9B'
const Trueblue = '#3066BE'
const Powderblue = '#B4C5E4'
const Ivory = '#FBFFF1'

const styles = {
  project: {
    margin: 30,
    color:Ivory,
    backgoundColor:Trueblue,
    radius: 10,
  },
  assignment: {
    margin: 20,
    color:Ivory,
    backgoundColor:Trueblue,
    radius: 10,
  },
  text: {
    fontfamily:'Oxygen',
    backgoundColor:Trueblue,
    color: Ivory,
  },
  heading: {
    fontfamily:'Cochin',
    backgoundColor:Trueblue,
    color: Ivory,
  },
};

function Portfolio() {
  return ( 
    <ul>
      <h1>Portfolio</h1>
      <hr></hr>

<h3>Welcome!</h3>
      <p>Explore some of the projects I have made over the course of my bootcamp and other personal projects</p>

      <li style={styles.project}>
        <a className="ClickToView" href="https://sjones-njones.github.io/Group-Project-1/">

          <img
            alt="Project"
            className="image"
            src="assets/images/Screenshot (147).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/sjones-njones/Group-Project-1"> Click to view Github </a>
        <p> - Project-1 - Home to Bitcoin Conversion </p>
        <p> - HTML / CSS / Javascript / jQuery / APIs </p>
      </li>

      <li style={styles.assignment}>
        <a className="ClickToView" href="https://lcurtis0.github.io/Mug-and-Spoon/">

          <img
            alt="Assignment"
            className="image"
            src="assets/images/Screenshot (148).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/lcurtis0/Mug-and-Spoon"> Click to view Github </a>
        <h3 style={styles.heading}> - Password generator </h3>
        <p  style={styles.text}> - HTML / CSS / Javascript</p>
      </li>

      <li style={styles.assignment}>
        <a className="ClickToView" href="https://lcurtis0.github.io/The-Ultimate-Test/">

          <img
            alt="Assignment"
            className="image"
            src="assets/images/Screenshot (149).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/lcurtis0/The-Ultimate-Test"> Click to view Github </a>
        <h3 style={styles.heading}> - The Ultimate Test </h3>
        <p  style={styles.text}> - HTML / CSS / Javascript / JQuery</p>
      </li>

      <li style={styles.assignment}>
        <a className="ClickToView" href="https://lcurtis0.github.io/past-present-and-future-spirit-schedule/">

          <img
            alt="Assignment"
            className="image"
            src="assets/images/Screenshot (150).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/lcurtis0/past-present-and-future-spirit-schedule"> Click to view Github </a>
        <h3 style={styles.heading}> - past present and-future spirit schedule  </h3>
        <p  style={styles.text}> - HTML / CSS / Javascript / JQuery</p>
      </li>

      <li style={styles.assignment}>
        <a className="ClickToView" href="https://lcurtis0.github.io/rain-or-shine/">

          <img
            alt="Assignment"
            className="image"
            src="assets/images/Screenshot (151).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/lcurtis0/rain-or-shine"> Click to view Github </a>
        <p> - Rain or Shine</p>
        <p> - HTML / CSS / Javascript / APIs </p>
      </li>

      <li style={styles.assignment}>
        <a className="ClickToView" href="https://samt11345.github.io/Project2/">

          <img
            alt="Project"
            className="image"
            src="assets/images/project-2.png"
          />

          </a>
          <br></br>
          <a href="https://github.com/samt11345/Deal-Dive"> Click to view Github </a>
        <h3 style={styles.heading}> - Project-2 - DealDive </h3>
        <p  style={styles.text}> - HTML / CSS / Javascript / jQuery / APIs / Express / Handlebars</p>
      </li>


        <li style={styles.project}>
        <a className="ClickToView" href="https://sediam.github.io/PhotoShopIt/">

          <img
            alt="Project"
            className="image"
            src="assets/images/Github logo (png).png"
          />

          </a>
          <br></br>
          <a href="https://github.com/SediaM/PhotoShopIt"> Click to view Github </a>
        <h3 style={styles.heading}> - Project-3 - Foto Flip </h3>
        <p  style={styles.text}> - HTML / CSS / Javascript / Express / React </p>
        <p>Heroku: https://photo-shop-it-b7b28611be34.herokuapp.com/</p>
      </li>


    </ul>
  );
}

export default Portfolio;