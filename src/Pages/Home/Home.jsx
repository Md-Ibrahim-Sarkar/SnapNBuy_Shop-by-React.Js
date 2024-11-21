import LeftItem from "./Banner/LeftItem"
import RightItem from "./Banner/RightItem"
import FlashSales from "./FlashSales/FlashSales"
import Arrival from "./New_Arrival/Arrival"


function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 ">
        <LeftItem />
        <RightItem />
      </div>
      <FlashSales />
      <Arrival />
    </div>
  )
}

export default Home