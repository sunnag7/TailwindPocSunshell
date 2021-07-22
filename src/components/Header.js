import React from 'react';
import dailyInspirtations from '../images/banner-icons1.png';
import liveEvents from '../images/banner-icons2.png';
import ourStory from '../images/banner-icons3.png'

class Header extends React.Component {

  render () {
    return(
      <header>
          <div className="top-banner bg-red"></div>
          <nav className="sidebar-header">
            <ul>
              <li className="cursor-pointer top-banner bg-red mx-auto px-3 pt-8 pb-20 text-center">
                <a href="#"><i class="fa fa-search fa-lg text-white"></i></a>
              </li>
              <li className="border-t border-white-600 px-3 py-3 text-center active">
                <a href="#welcome" onClick={this.ToggleMenu} className="text-white hover:text-white-500"><span className="block text-2xl font-medium leading-none">home</span></a>
              </li>
              <li className="border-t border-white-600 px-3 py-3 text-center">
                <a href="#breath" className="text-white hover:text-white-500"><span className="block text-2xl font-medium leading-none">breath</span> <small className=" text-sm leading-none">medication</small></a>
              </li>
              <li className="border-t border-white-600 px-3 py-3 text-center">
                <a href="#bytes" className="text-white hover:text-white-500"><span className="block text-2xl font-medium leading-none">bytes</span> <small className=" text-sm leading-none">inspirtations for your day</small></a>
              </li>
              <li className="border-t border-white-600 px-3 py-3 text-center">
                <a href="#briefing" className="text-white hover:text-white-500"><span className="block text-2xl font-medium leading-none">brifing</span> <small className=" text-sm leading-none">background information</small></a>
              </li>
              <li className="border-t border-white-600 px-3 py-3 text-center">
                <a href="#contactUs" className="text-white hover:text-white-500"><span className="block text-2xl font-medium leading-none">contact us</span></a>
              </li>
              <li className="border-t border-white-600 pt-4">
                <div className="flex flex-col max-w-sm px-3 pb-1">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="mr-2">
                      <img src={dailyInspirtations} alt="daily inspirtations" width="56" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <a href="#" className="font-medium text-white text-xl leading-tight">daily <br/>inspirtations</a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col max-w-sm px-3 pb-1">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="mr-2">
                      <img src={liveEvents} alt="live events" width="44" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <a href="#" className="font-medium text-xl text-white">live events</a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col max-w-sm px-3 pb-1">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="mr-2">
                      <img src={ourStory} alt="our story" width="46" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <a href="#" className="font-medium text-xl text-white">our story</a>
                    </div>
                  </div>
                </div>
            
              </li>
            </ul>
          </nav>
      </header>
    )
  } 
// note: you have to create a ref inside the constructor:
divRef = React.createRef()
}

export default Header;
