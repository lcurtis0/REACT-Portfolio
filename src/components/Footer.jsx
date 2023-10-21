
// A single Footer component that appears on multiple pages

// We set an object to assign styles and then reference in Footer() function

const styles = {
    footer: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

function Footer() {
    return (
      <div style={styles.footer}>
        <div style={styles.heading}>More about Lyell</div>
        <div style={styles.content}>
          `On the front-end, Lyell is a master of user interface (UI) design and development. He creates visually appealing and user-friendly websites that engage and captivate visitors. His proficiency in HTML, CSS, and JavaScript allows him to craft responsive and interactive web interfaces `
        </div>
      </div>
    );
  }
  
  export default Footer;
  