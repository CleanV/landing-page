import Icon from '../assets/img/Icon.png';

const Index = () => {
  return (
    <div className="w-screen max-w-full">
      {/* Hero Banner */}
      <div className="hero-bg">
        <div className="grid grid-cols-2 h-screen pt-10">

          <div className="flex">
            <img src={Icon} alt="hero" className="object-contain w-1/2 my-auto ml-auto mr-24" />
          </div>
          <div className="flex">
            <div className="my-auto mr-auto ml-24 w-1/2">
              <p className="text-4xl">Ayo Peduli Sekitar!</p>
              <p className="text-4xl my-1">Buat lingkunganmu bersih</p>
              <p className="text-lg mb-9 mt-3">Buat acara bersih-bersihmu sendiri di mana pun dan kapan pun!</p>
              <button className="btn-hero-primary">Get Ticket</button>
              <button className="btn-hero-secondary">Learn More</button>
            </div>
          </div>

        </div>
      </div>
      {/* Hero Banner */}

      {/* Search Bar */}
      <div className="bg-[#242565] text-white mx-60 py-7 px-11 rounded-xl relative -top-14">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <p>Search Event</p>
            <input type="text" name="search" id="searchbar-text" />
          </div>
          <div>
            <p>City</p>
            <input type="text" name="city" id="searchbar-text" />
          </div>
          <div>
            <p>Time</p>
            <select name="time" id="searchbar-text">
              <option value="" selected>Any time</option>
            </select>
          </div>
        </div>
      </div>
      {/* Search Bar */}
    </div>
  )
};

export default Index;