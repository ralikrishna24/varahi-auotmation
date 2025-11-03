import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import varahiLogo from "@/assets/varahi-logo.png";
import WhatsAppButton from "@/components/whatsappbutton";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={varahiLogo} alt="Varahi Automations Logo" className="h-20 w-20 bg-white  rounded" />
              <span className="font-bold text-xl">Varahi Automations</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Leading automation training institute dedicated to building successful careers in industrial automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span> 3/962 2b2,1st floor <br />
                          G.v.p colony 
                           Tadipatri City
                           District ANANTHAPUR
                            Pin 515411
                          <br />
                          ANDHRA PRADESH State</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 text-accent" />
                <span>+91 9392476382</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 text-accent" />
                <span>sivalingmaiah786@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Varahi Automations Training Institute. All rights reserved.
          </p>
        </div>
        <WhatsAppButton />
      </div>
    </footer>
  );
};

export default Footer;
