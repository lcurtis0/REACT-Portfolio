function Resume() {

    return (
        <ul className="list-group">
            <h1> My Resume</h1>
            <hr></hr>
            <li>
                <a href="./Assets/images/Resume of Lyell Curtis (2).pdf">
                    <img
                        alt="Resume of Lyell Curtis"
                        className="Resume"
                        src="./Assets/images/Resume.png"
                        href="./Assets/images/Resume of Lyell Curtis (2).pdf"
                    />
                </a>

                <br></br>
                
                <br></br>

                <img
                    alt="Sea shell"
                    className="image"
                    src="Assets/images/shell-2.png"
                />

                <h2>EDUCATION</h2>

                <h3>Certificate in Full Stack Web Development</h3>
                <p> UPENN LPS Full Stack Development Bootcamp- Certificate- Full Stack
                    Subjects learned: Git, Github,  HTML, CSS, JavaScript, jQuery, CSS frameworks such as Bootstrap, and Node.js</p>

                <br></br>

                <h3> Bachelor of Arts in Art & Design	 Frostburg, MD</h3>				 
                <p>  Frostburg State University, 101 Braddock Rd, Frostburg , MD 21532 - Bachelors - Art & Design
                    Adobe photoshop, illustrator, Indesign, Dreamweaver, and  Procreate
                    Minor in Computer information Systems + Art History
                    Learned HTML, CSS, Javascript, and SQL
                </p>
            </li>
        </ul>
    )
}

export default Resume;
