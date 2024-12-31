import { Link } from "react-router-dom";
import ROUTES from "../../../../types/routes";

const NAV_DATA = [
  {
    title: "Home",
    link: ROUTES.HOME,
  },
  {
    title: "Contact",
    link: ROUTES.CONTACT,
  },
  {
    title: "About",
    link: ROUTES.ABOUT,
  },
  {
    title: "Sign Up",
    link: ROUTES.RESGISTER,
  },
];

const NavHeader = () => {
  return (
    <div className="flex  justify-between py-2">
      <span className="font-primary font-bold text-2xl">Exclusive</span>
      <div className="space-x-12">
        {NAV_DATA?.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="font-primary text-base font-semibold hover:opacity-70"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavHeader;
