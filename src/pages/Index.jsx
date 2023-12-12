import Icon from '../assets/img/Icon.png';
import Konsul from '../assets/img/konsul.png';
import Brand from '../assets/img/brand.png';
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
          <button className="btn-normal mt-10 mx-auto">Load More</button>
        </div>
      </div>
      {/* Upcoming Events */}

      {/* Make your own Event */}
      <div className="mt-16 grid grid-cols-2 gap-7 bg-[#25CC22] bg-opacity-50">
        <div className='flex'>
          <img src={Konsul} alt="konsul" className='w-1/2 ml-auto' />
        </div>
        <div className='py-6 flex'>
          <div className="my-auto">
            <p className='text-3xl font-bold'>Make your own Event</p>
            <p className='text-lg mt-2 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn-hero-primary">Create Events</button>
          </div>
        </div>
      </div>
      {/* Make your own Event */}

      {/* Brands */}
      <div className="mx-60 my-20 text-center">
        <p className='text-4xl text-[#242565] mb-7'>Join these brands</p>
        <p>We&apos;ve had the pleasure of working with industry-defining brands. These<br/>are just some of them</p>
        <img src={Brand} alt="brand" className='mt-20' />
      </div>
      {/* Brands */}

      {/* Blog */}
      <div className="mx-60 my-28 text-center">
        <p className='text-4xl text-[#242565] mb-7'>Blog</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="grid grid-cols-3 gap-10 mt-14">
          {MockEventData.slice(0,3).map((v, i) => <div key={i}>
            <div className="grid grid-cols-1 gap-6">
              <img src={v.img} alt="gambar" className="aspect-video object-cover rounded-2xl" />
              <div className='text-left'>
                <p className='text-[#242565] text-xl font-bold'>{v.title}</p>
                <p className='my-4'>{v.desc}</p>
                <p className='text-sm text-[#A5A5A5]'>{v.date} <span className='uppercase'>{v.month}</span> - John Doe</p>
              </div>
            </div>
          </div>)}
        </div>

        <div className="w-full flex">
          <button className="btn-normal mt-10 mx-auto">Load More</button>
        </div>
      </div>
      {/* Blog */}
    </div>
  )
};

export default Index;
