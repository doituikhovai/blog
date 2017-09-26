import React from 'react';
import Logo from '../../../assets/images/logo.ico';
import HomeIcon from '../../../assets/images/home_icon.svg';
import BestPostIcon from '../../../assets/images/best_post.svg';
import CodeIcon from '../../../assets/images/code_icon.svg';
import CareerIcon from '../../../assets/images/career_icon.svg';
import CatIcon from '../../../assets/images/cat_icon.svg';
import BlaIcon from '../../../assets/images/bla_icon.svg';
import SearchIcon from '../../../assets/images/search_icon.svg';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            <div className="row align-items-center">
              <a href="#" className="navbar-brand col-md-1"><img src={Logo} alt="Nam's blog"/></a>
              <div className="collapse navbar-collapse col-md-8">
                <ul className="navbar-nav row justify-content-between">
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-start">
                      <img src={HomeIcon} alt="Home" className="mr-2"/>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-start">
                      <img src={BestPostIcon} alt="best post icon" className="mr-2"/>
                      The Best Post
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-start">
                      <img src={CodeIcon} alt="Code" className="mr-2"/>
                      Code
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-start">
                      <img src={CareerIcon} alt="Career" className="mr-2"/>
                      Career
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-start">
                      <img src={BlaIcon} alt="bla bla bla" className="mr-2"/>
                      Bla bla bla
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link d-flex align-items-sm-center">
                      <img src={CatIcon} alt="Cat" className="mr-2"/>
                      About me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 wrapper_search d-flex align-items-center">
                <img className="mr-3" src={SearchIcon} alt="search blog"/>
                <input type="text"/>
              </div>
            </div>
        </div>
      </nav>
    );
  }
};
export default Menu;