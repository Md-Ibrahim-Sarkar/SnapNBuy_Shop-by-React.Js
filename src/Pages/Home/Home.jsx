import Category from "./category/Category"
import LeftItem from "./Banner/LeftItem"
import RightItem from "./Banner/RightItem"
import FlashSales from "./FlashSales/FlashSales"
import Arrival from "./New_Arrival/Arrival"
import BestSelling from "./best_Selling/BestSelling"
import MusicExperience from "./musicExperience/MusicExperience"
import OurProducts from "./our_Products/OurProducts"
import Support from "./support/Support"


function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 ">
        <LeftItem />
        <RightItem />
      </div>
      <FlashSales />
      <Category />
      <hr />
      <BestSelling />
      <MusicExperience />
      <OurProducts />
      <Arrival />
      <Support />
    </div>
  )
}

export default Home