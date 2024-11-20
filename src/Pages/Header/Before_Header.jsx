

function Before_Header() {
  return (
    <div className=" text-white py-1 text-xs bg-black  ">
      <div className="flex items-center container mx-auto">
      <div className="w-full flex justify-center gap-2 ">
      <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
      <a href="#" className="underline inline-block font-semibold ">ShopNow</a>
      </div>
      <div className="flex justify-end w-11 ">
        <select className="bg-black focus:outline-none">
          <option >English</option>
          <option >Bangla</option>
        </select>
      </div>
      </div>
    </div>
  )
}

export default Before_Header