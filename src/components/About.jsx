import React from "react";

const About = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">About This Portfolio Project</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <p>
            This project is a full React-based application built as part of the
            <strong> CSCI 6333 – Modern Full-Stack Development </strong> coursework. 
            It demonstrates the core concepts of front-end engineering using 
            React, React Router, Redux, Axios, and Bootstrap.
          </p>

          <h4 className="mt-4">Key Features</h4>
          <ul>
            <li>
              <strong>React Router:</strong> Implements multi-page navigation including Home, About, Redux Demo, CRUD Operations, and Photo Gallery.
            </li>
            <li>
              <strong>Global State with Redux Toolkit:</strong> A To-Do application where users can add, delete, and complete tasks using global state management.
            </li>
            <li>
              <strong>CRUD Operations with Axios:</strong> Demonstrates Create, Read, Update, and Delete actions using the JSONPlaceholder REST API.
            </li>
            <li>
              <strong>Form Handling + Validation:</strong> A Contact form with validation for required fields, valid email, and date selection that restricts past dates.
            </li>
            <li>
              <strong>Photo Gallery with Pagination:</strong> Fetches photos from a public API and implements pagination, lazy loading, and loading/error handling.
            </li>
            <li>
              <strong>Bootstrap Styling:</strong> Entire layout uses Bootstrap for responsive design and clean UI components.
            </li>
          </ul>

          <h4 className="mt-4">Technologies Used</h4>
          <ul>
            <li>React (Create-React-App)</li>
            <li>React Router</li>
            <li>Redux Toolkit & React-Redux</li>
            <li>Axios</li>
            <li>Bootstrap</li>
            <li>JavaScript ES6+</li>
          </ul>

          <p className="mt-4">
            This project demonstrates a complete understanding of modern React development
            workflows including routing, state management, API communication, UI frameworks,
            and component-driven architecture.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
