import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/saikishore.kadali?mibextid=ZbWKwL', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sai_kishore_kadali?igsh=MTdlNXZpdmF5djZlaw==', label: 'Instagram' },
    { icon: Linkedin, href: 'www.linkedin.com/in/kadali-saikishore-6559a8290', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Kishorekadali', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Kishore Kadali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;