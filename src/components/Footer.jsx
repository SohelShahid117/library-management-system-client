import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="text-center bg-gray-50 p-4">
          Copyright © {new Date().getFullYear()} - All right reserved by
          BookClub Library Management System
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
