import Carousel from "./Carousel";
import Header from "./Header";
import ArrowIcon from "../../assets/forward-option_15990240.png"
import WebsiteIcon from "../../assets/m_3572799.png"

export default function ImageSide() {
  return (
    <div>
      <Header icon={ArrowIcon} WebsiteIcon={WebsiteIcon}/>
      <Carousel />
    </div>
  );
}
