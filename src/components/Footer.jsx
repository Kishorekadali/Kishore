import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/saikishore.kadali?mibextid=ZbWKwL', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sai_kishore_kadali?igsh=MTdlNXZpdmF5djZlaw==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kadali-saikishore-6559a8290/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Kishorekadali/', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kishore Kadali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;