import React from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between">
      <div className="lg:w-[20%]">
        <Logo />
      </div>
      {/* <div className="hidden w-[60%] items-center justify-center gap-7 lg:flex">
        {navLinks.map((navLink) => (
          <NavigationItem
            className="hover:text-button-primary"
            menuItem={navLink}
            key={navLink.id}
          />
        ))}
      </div> */}
      <div className="flex items-center justify-end lg:w-[20%]">
        <ButtonPrimary
          href="tel:+917999714860"
          sizeClass="px-6 py-4"
          className="self-center lg:block"
        >
          Contact: +91-7999714860
        </ButtonPrimary>
        {/* <div className="lg:hidden">
          <MenuBar />
        </div> */}
      </div>
    </div>
  );
};

export default MainNav;
