import Icon from '../assets/img/Icon.png';
import Konsul from '../assets/img/konsul.png';
import Brand from '../assets/img/brand.png';
import MockEventData from '../data';

const Index = () => {
  return (
    <div className="w-screen max-w-full">
      {/* Hero Banner */}
      <div className="hero-bg">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[90vh] h-screen pt-10">

          <div className="flex">
            <img src={Icon} alt="hero" className="object-contain w-1/2 my-auto ml-auto mr-24" />
          </div>
          <div className="flex">
            <div className="my-auto mr-auto lg:ml-24 m-auto lg:px-0 px-2 w-1/2 lg:text-left text-center">
              <p className="lg:text-4xl text-lg font-bold">Ayo Peduli Sekitar!</p>
              <p className="lg:text-4xl text-base font-bold my-1">Buat lingkunganmu bersih</p>
              <p className="lg:text-lg text-base mb-9 mt-3">Buat acara bersih-bersihmu sendiri di mana pun dan kapan pun!</p>
              <button className="btn-hero-primary lg:mr-6 lg:mb-0 mb-3">Get Ticket</button>
              <button className="btn-hero-secondary">Learn More</button>
            </div>
          </div>

        </div>
      </div>
      {/* Hero Banner */}

      {/* Search Bar */}
      <div className="bg-[#242565] text-white lg:mx-60 mx-5 py-7 lg:px-11 rounded-xl relative lg:-top-14 top-5 shadow-2xl">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:text-left text-center">
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
      <div className="lg:mx-60 mx-5 my-16">
        <div className="lg:flex block lg:items-center lg:justify-between mb-24">
          <p className="lg:float-left lg:text-4xl text-2xl lg:text-left text-center text-[#242565] !lg:w-screen !lg:max-w-full">Upcoming Events</p>
          <div className="lg:flex hidden float-right">
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
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
      <div className="mt-16 grid lg:grid-cols-2 grid-cols-1 gap-7 bg-[#25CC22] bg-opacity-50">
        <div className='lg:flex hidden'>
          <img src={Konsul} alt="konsul" className='w-1/2 ml-auto' />
        </div>
        <div className='py-6 lg:px-0 px-6 flex lg:text-left text-center'>
          <div className="my-auto">
            <p className='text-3xl font-bold'>Make your own Event</p>
            <p className='text-lg mt-2 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn-hero-primary">Create Events</button>
          </div>
        </div>
      </div>
      {/* Make your own Event */}

      {/* Brands */}
      <div className="lg:mx-60 mx-5 my-16 text-center">
        <p className='text-4xl text-[#242565] mb-7'>Join these brands</p>
        <p>We&apos;ve had the pleasure of working with industry-defining brands. These<br/>are just some of them</p>
        <img src={Brand} alt="brand" className='mt-20' />
      </div>
      {/* Brands */}

      {/* Blog */}
      <div className="lg:mx-60 mx-5 my-16 text-center">
        <p className='text-4xl text-[#242565] mb-7'>Blog</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-14">
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
