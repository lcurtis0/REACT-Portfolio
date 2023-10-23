
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
        <div style={styles.content}>
        </div>
      </div>
    );
  }
  
  export default Footer;
  