
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SELECTEDPAGE } from "../types/selectedPageEnums";

type Props = {
  page: string;
  selectedPage: SELECTEDPAGE;
  setSelectedPage: (value: SELECTEDPAGE) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SELECTEDPAGE;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;