import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* HELP */}
        <div>
          <h4 className="uppercase text-xs font-semibold tracking-wider mb-4">Help</h4>
          <p className="mb-2">A Client Advisor is available at <span className="underline">1000 000 0000</span>.</p>
          <p className="mb-4">
            You can also <span className="underline cursor-pointer">chat</span> or <span className="underline cursor-pointer">email us</span>.
          </p>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Product Care</li>
            <li className="hover:underline cursor-pointer">Stores</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="uppercase text-xs font-semibold tracking-wider mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Repairs</li>
            <li className="hover:underline cursor-pointer">Personalisation</li>
            <li className="hover:underline cursor-pointer">Art of Gifting</li>
            <li className="hover:underline cursor-pointer">Download our Apps</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h4 className="uppercase text-xs font-semibold tracking-wider mb-4">About LaVitrine</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Fashion Shows</li>
            <li className="hover:underline cursor-pointer">Arts & Culture</li>
            <li className="hover:underline cursor-pointer">La Maison</li>
            <li className="hover:underline cursor-pointer">Sustainability</li>
            <li className="hover:underline cursor-pointer">Latest News</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Foundation LaVitrine</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="uppercase text-xs font-semibold tracking-wider mb-4">Connect</h4>
          <p className="mb-4">
            <span className="underline cursor-pointer">Sign up</span> for LaVitrine emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
          </p>
          <p className="hover:underline cursor-pointer">Follow Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
