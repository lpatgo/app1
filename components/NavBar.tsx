

const NavBar = () => {
    return (
      <div className="navzone fixed w-full top-0 h-20 z-10 border-b shadow-lg flex items-center px-5 bg-background text-foreground-primary">
        <div className="logo bg-cover bg-no-repeat bg-center h-14 w-16" style={{ backgroundImage: "url('/pusher-atlas-globe-colors1.gif')" }}>
        </div>
        <h1 className="title mt-2 ml-7 text-xl font-semibold uppercase text-left ">Survivor Salta</h1>
        <div className="navbox fixed top-0 right-5 mr-0 z-11 mt-4 w-10 h-12 bg-contain bg-no-repeat" style={{ backgroundImage: "url('/hamburger-4slice.svg')" }}>
          <a href="#" className="icon block h-full w-full">
            {/* This empty anchor tag ensures the entire div is clickable */}
          </a>
        </div>
      </div>
    );
  };

  export default NavBar;
