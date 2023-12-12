import Icon from '../assets/img/Icon.png';
import Gambar1 from '../assets/img/acara/kali1.jpg';
import MockEventData from '../data';

const Index = () => {
  return (
    <div className="w-screen max-w-full">
      {/* Hero Banner */}
      <div className="hero-bg">
        <div className="grid grid-cols-2 h-[90vh] pt-10">

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
      <div className="bg-[#242565] text-white mx-60 py-7 px-11 rounded-xl relative -top-14 shadow-2xl">
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

      {/* Upcoming Events */}
      <div className="mx-60 my-16">
        <div className="flex items-center justify-between mb-24">
          <p className="float-left text-4xl text-[#242565] w-max">Upcoming Events</p>
          <div className="float-right">
            <select id="weekdays" name="weekdays" className="combo-events">
              <option value="" selected>Weekdays</option>
            </select>
            <select id="event-type" name="event_type" className="combo-events">
              <option value="" selected>Event Type</option>
            </select>
            <select id="category" name="category" className="combo-events">
              <option value="" selected>Any Category</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {MockEventData.map((v, i) => <div key={i}>
            <div className="grid grid-cols-1">
              <img src={v.img} alt="gambar" className="aspect-video object-cover rounded-t-2xl" />
              <div className="grid grid-cols-6 py-5 px-6">
                <div className="text-center">
                  <p className="text-sm uppercase">{v.month}</p>
                  <p className="text-3xl">{v.date}</p>
                </div>
                <div className="col-span-5 pl-5">
                  <p className="font-bold text-lg">{v.title}</p>
                  <p className="my-2">{v.desc}</p>
                </div>
              </div>
            </div>
          </div>)}
        </div>


        <div className="w-full flex">
          <button className="btn-normal mt-10 mb-16 mx-auto">Load More</button>
        </div>
      </div>
      {/* Upcoming Events */}
    </div>
  )
};

export default Index;
