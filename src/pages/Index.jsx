import Icon from '../assets/img/Icon.png';
import Konsul from '../assets/img/konsul.png';
import Brand from '../assets/img/brand.png';
import MockEventData from '../data';
import { useEffect, useState } from 'react';
import axios from "axios";
import {DateTime} from "luxon";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  async function getEvent() {
    setIsLoading(true);
    const event = await axios.get('https://cleanv-api.netlify.app/event/explore', {
      params: {
        limit: 6
      }
    });
    console.log(event.data.data);
    setEvents(event.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getEvent();
  }, []);

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

              <div className='flex'>
                <button className="btn-hero-primary">Get Ticket</button>&emsp;
                <button className="btn-hero-secondary">Learn More</button>
              </div>
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
            <select name="time" id="searchbar-text" defaultValue={'1'}>
              <option value="1">Any time</option>
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
            <select defaultValue={'1'} id="weekdays" name="weekdays" className="combo-events">
              <option value="1">Weekdays</option>
            </select>
            <select defaultValue={'1'} id="event-type" name="event_type" className="combo-events">
              <option value="1">Event Type</option>
            </select>
            <select defaultValue={'1'} id="category" name="category" className="combo-events">
              <option value="1">Any Category</option>
            </select>
          </div>
        </div>

        {
          isLoading && <div className='my-20'>
            <center>
              <svg aria-hidden="true" className="w-14 h-14 animate-spin text-gray-200 fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
            </center>
          </div>
        }

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {
            !isLoading && events.map((v, i) => <a key={i} className='block' href={`https://cleanv.netlify.app/event/${v._id}`}>
              <div className="grid grid-cols-1 shadow-lg h-full rounded-lg">
                <img src={v.thumbnail} alt="gambar" className="aspect-video object-cover rounded-t-2xl" />
                <div className="grid grid-cols-6 py-5 px-6">
                  <div className="text-center">
                    <p className="text-sm text-blue-400 uppercase">{DateTime.fromISO(v.time, {zone: 'utc'}).monthShort}</p>
                    <p className="text-3xl">{DateTime.fromISO(v.time, {zone: 'utc'}).toFormat('dd')}</p>
                  </div>
                  <div className="col-span-5 pl-5">
                    <p className="font-bold text-lg">{v.title}</p>
                    <p className="my-2">{v.description}</p>
                  </div>
                </div>
              </div>
            </a>)
          }
        </div>

        <div className="w-full flex">
          <a className="btn-normal mt-10 mx-auto" href='https://cleanv.netlify.app/'>Load More</a>
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
