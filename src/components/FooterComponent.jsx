const FooterComponent = () => {
  return (
    <div className="w-screen bg-[#25CC22] max-w-full text-white">
      <div className="grid grid-cols-6 gap-9">
        <div className="col-span-2 py-12 px-32">
          <p className="text-3xl font-bold mb-5">CleanV</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="py-12 px-14">
          <p className="font-bold mb-6">Plan Events</p>
          <p>Create and Set Up</p>
          <p>Sell Tickets</p>
          <p>Online RSVP</p>
          <p>Online Events</p>
        </div>
        <div className="py-12 px-14">
          <p className="font-bold mb-6">CleanV</p>
          <p>About Us</p>
          <p>Press</p>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>How It Works</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="col-span-2 py-12 px-32">
          <p className="text-3xl font-bold mb-5">Stay In The Loop</p>
          <p>Join our mailing list to stay in the loop with our newest for Event.</p>
          <button className="btn-hero-secondary mt-5">Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
