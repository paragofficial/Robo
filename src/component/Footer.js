import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-5">
        <footer className="text-center text-lg-start" style={{ backgroundColor: "	#595959"}}>
          <div className="container d-flex justify-content-center py-5">
            <a className="btn btn-primary mx-2" target="_blank" style={{ backgroundColor: "#0082ca" }} href="https://www.instagram.com/anushkasharma/?hl=en" role="button"
            ><i className="bi bi-linkedin"></i></a>

            <a className="btn btn-primary mx-2" target="_blank" style={{ backgroundColor: "#ac2bac" }} href="https://www.instagram.com/virat.kohli/?hl=en" role="button"
            ><i className="bi bi-instagram"></i></a>
          </div>
          {/* Copyright */}
          <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://www.linkedin.com/in/parag-bhasme/?originalSubdomain=in/"> gcekroboclub.com</a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  )
}
