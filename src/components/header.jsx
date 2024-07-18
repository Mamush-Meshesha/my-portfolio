const Header = () => {
    
    return (
      <div className="h-16 py-5 fixed w-[94%] bg-[#0F172A] z-50">
        <div className="flex justify-between items-center text-white">
          <h1>My Portfolio</h1>
          <div className="flex gap-4">
            <button>Home</button>
            <button>About</button>
            <button>Works</button>
            <button>Contact</button>
          </div>
          <div>
            <button>Resume</button>
          </div>
        </div>
      </div>
    );
}

export default Header