
// A single Footer component that appears on multiple pages

// We set an object to assign styles and then reference in Footer() function


function Footer() {
  return (
    <div className="lineUp">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/lyell-curtis-936198232/">
            <img
              alt="LinkedIn logo"
              className="logo"
              src="Assets/images/linkedIn logo.png"
              
            />
          </a>

          <p>LinkedIn: <a href="https://www.linkedin.com/in/lyell-curtis-936198232/">  lyell-curtis/ </a> </p>
        </li>

        <li>
          <a href="https://github.com/lcurtis0">
            <img
              alt="Github logo"
              className="logo"
              src="Assets/images/Github logo (png).png"
            />
          </a>

          <p>Github: <a href="https://github.com/lcurtis0">  lcurtis0/ </a> </p>
          </li>

          <li>
          <a href="https://stackoverflow.com/users/22790359/lyell-curtis">
            <img
              alt="stack overflow logo"
              className="logo"
              src="Assets/images/stack overflow logo.png"
            />
          </a>
          
          <p>Stack Overflow: <a href="https://stackoverflow.com/users/22790359/lyell-curtis">  lcurtis0/ </a> </p>
        </li>
      </ul>
      <div >
      </div>
    </div>
  );
}

export default Footer;
