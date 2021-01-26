import React from "react";

export const Footer = () => {
  return (
    <div className="container">
      <footer className="bg-light text-center text-lg-start">
        <div className="row">
          <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
            <h6 className="text-uppercase">Footer Content</h6>
            <p className="text-left pl-4">
              You can use rows and columns here to organize your footer content.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h6 className="text-uppercase">Links</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center p-3">
          <div className="container">
            © 2021 Copyright Text
            <a className="text-dark ml-3" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
