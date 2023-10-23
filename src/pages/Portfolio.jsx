
// const Jetblue = '#3C3744'
const Dukeblue = '#090C9B'
// const Trueblue = '#3066BE'
// const Powderblue = '#B4C5E4'
const Ivory = '#FBFFF1'

const styles = {
  background:{
    background: Ivory,
  },
  project: {
    margin: 30,
    background: Dukeblue,
    radius: 30
  },
  assignment: {
    margin: 20,
    background: Dukeblue,
    radius: 10
  },
  text: {
    fontfamily:'Oxygen',
    
  },
  heading: {
    fontfamily:'Cochin',
  },
};

export default function Portfolio() {
  return ( 
    <ul style={styles.background}>
      <h1>Portfolio</h1>

      <li style={styles.project}>
        <a href="https://sjones-njones.github.io/Group-Project-1/">

          <img
            alt="Project"
            className="work-large"
            src="assets/images/Screenshots/Screenshot (147).png"
            href="./assets/images/Resume of June.pdf"
          />

          </a>
        <p> - Project-1 - Home to Bitcoin Conversion </p>
        <p> - HTML / CSS / Javascript / jQuery / APIs </p>
      </li>

      <li style={styles.assignment}>
        <a href="https://sjones-njones.github.io/Group-Project-1/">

          <img
            alt="Assignment"
            className="work-large"
            src="assets/images/Screenshots/Screenshot (147).png"
            href="./assets/images/Resume of June.pdf"
          />

          </a>
        <h3 style={style.heading}> - Project-1 - Home to Bitcoin Conversion </h3>
        <p  style={style.text}> - HTML / CSS / Javascript / jQuery / APIs </p>
      </li>

      <li style={styles.assignment}>
        <a href="https://sjones-njones.github.io/Group-Project-1/">

          <img
            alt="Project"
            className="work-large"
            src="assets/images/Screenshots/Screenshot (147).png"
            href="./assets/images/Resume of June.pdf"
          />
          
          </a>
        <p> - Project-1 - Home to Bitcoin Conversion </p>
        <p> - HTML / CSS / Javascript / jQuery / APIs </p>
      </li>

      <li style={styles.assignment}>
        <a href="https://sjones-njones.github.io/Group-Project-1/">
          <img
            alt="Project"
            className="work-large"
            src="assets/images/Screenshots/Screenshot (147).png"
            href="./assets/images/Resume of June.pdf"
          /></a>
        <p> - Project-1 - Home to Bitcoin Conversion </p>
        <p> - HTML / CSS / Javascript / jQuery / APIs </p>
      </li>


    </ul>
  );
}
