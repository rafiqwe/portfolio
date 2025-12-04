import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 h-screen md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="font-corporatus text-5xl">Menu</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="font-corporatus text-5xl">Contact</h1>
              <p>Feel free to reach out or follow me!</p>
            </div>
            <div>
              <h1>Social Media</h1>
              <ul>
                <li>Linkedin</li>
                <li>Instagram</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
