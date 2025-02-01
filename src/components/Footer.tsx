"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground px-4 md:px-16 lg:px-32 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h2 className="font-bold mb-4 text-lg">LUXEWEAR</h2>
          <p className="text-sm">
            Exclusive fashion that defines your style. Designed for confidence
            and elegance.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4 text-lg">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Careers</li>
            <li>Works</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-4 text-lg">HELP</h2>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-4 text-lg">RESOURCES</h2>
          <ul className="space-y-2 text-sm">
            <li>Fashion Insights</li>
            <li>Style Guides</li>
            <li>How to Dress</li>
            <li>YouTube Tutorials</li>
          </ul>
        </div>
      </div>

      <Separator className="border-border my-4" />

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
        <div className="text-center md:text-left">
          <p className="mt-2">Luxewear © 2025, All Rights Reserved</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="flex space-x-4 mt-4">
            <FaTwitter size={20} className="hover:text-muted-foreground" />
            <FaFacebookF size={20} className="hover:text-muted-foreground" />
            <FaInstagram size={20} className="hover:text-muted-foreground" />
            <FaGithub size={20} className="hover:text-muted-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
