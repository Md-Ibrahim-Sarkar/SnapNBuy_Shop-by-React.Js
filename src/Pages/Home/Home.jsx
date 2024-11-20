import LeftItem from "./Banner/LeftItem"
import RightItem from "./Banner/RightItem"
import FlashSales from "./FlashSales/FlashSales"


function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 ">
        <LeftItem />
        <RightItem />
      </div>
      <FlashSales />
    </div>
  )
}

export default Home