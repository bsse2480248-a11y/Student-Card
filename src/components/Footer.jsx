
function Footer() {
  return (
    <footer className="directory-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h2>Links</h2>
            <a href="#home">Home</a>
            <a href="#computer-science">Computer Science</a>
            <a href="#courses">Courses</a>
            <a href="#reports">Reports</a>
          </div>

          <div className="col-12 col-md-6">
            <h2>Contact Info</h2>
            <p>Contact Us</p>
            <p>+1 123 456 7890</p>
            <p>trm@studentportal.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 StudentPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
