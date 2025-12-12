import GlowLine from "../ui/GlowLine";
import FooterMenu from "./FooterMenu";
import SocialLink from "./SocialLink";

const Footer = () => {
  const socialMedia = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-rabbi-dev",
      image: "/images/linkedin1.webp",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/muhammadrabbi.dev/",
      image: "/images/instagram.webp",
    },
    {
      name: "Github",
      url: "https://github.com/rafiqwe",
      image: "/images/github.webp",
    },
  ];

  const menu = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "About",
      url: "about",
    },
    {
      name: "Skills",
      url: "skill",
    },
    {
      name: "Projects",
      url: "projects",
    },
    {
      name: "Contact",
      url: "contact",
    },
  ];

  return (
    <footer className="bg-black relative text-white p-5 h-full md:h-[80vh] md:p-10">
      <div className="absolute top-0 left-0 w-full h-full ">
        <GlowLine orientation="horizontal" position="0" color="blue" />
      </div>
      <div className="max-w-7xl relative mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row pt-20 max-w-5xl gap-10 justify-between">
          <div className="w-full ">
            <div className="border-b-3 border-white/20 pb-2">
              <h1 className="font-corporatus text-2xl ">Menu</h1>
            </div>
            <ul className="flex flex-col gap-6 mt-5 w-full md:items-start items-center font-corporatus text-center cursor-pointer text-lg">
              {menu.map((item) => (
                <FooterMenu key={item.name} item={item} />
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full md:p-0 text-center md:text-left pb-10">
            <div>
              <div className="border-b-3 border-white/20 pb-2">
                <h1 className="font-corporatus text-2xl ">Social Media</h1>
              </div>
              <ul className="flex flex-col gap-6 mt-5 md:items-start items-center font-mono text-lg">
                {socialMedia.map((item) => (
                  <SocialLink key={item.name} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
