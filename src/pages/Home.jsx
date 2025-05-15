import React from "react";
import { FileText } from "lucide-react";
import { skills } from "../data/Skills";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="w-full h-full mb-10">
      <div className=" text-textPrimary mx-auto text-center pl-10 pr-10 pt-40 ">
        <div className="mb-10 ">
          <h1 className=" text-3xl  md:text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight drop-shadow-xl mb-4">
            Welcome to My Web Dev Journey!
          </h1>

          <h2 className="subHeading">
            Crafting clean, functional, and user-first websites. Every project
            is a step toward mastering my craft, and I'm excited to share my
            work with you.
          </h2>
        </div>

        {/* BUTTON */}
        <div className="space-x-4">
          <NavLink to="/projects">
            <button className="mt-6 px-6 py-3 bg-bgCTA text-textPrimary font-semibold rounded-lg shadow-md hover:bg-bgColorSecondary transition-all duration-300">
              View My Work
            </button>
          </NavLink>
          <button
            onClick={() =>
              window.open(
                "https://ukwi2uoynz.ufs.sh/f/n61QCrGyY4FXbwMaU9j0TSiF5yjcHeX3NCQngaz6xfAOoWYV",
                "_blank"
              )
            }
            className="mt-6 px-6 py-3 hover:bg-[#E94460] text-white font-semibold rounded-lg shadow-md bg-bgColorSecondary transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <FileText size={15} />
              View Resume
            </span>
          </button>
        </div>
        {/* SKILLS */}
        <div className="mt-40 flex justify-center items-center">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
              <p className="subHeading">
                A comprehensive toolkit that enables me to build complete,
                scalable solutions
              </p>
            </div>

            <div className="container flex items-center justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
                {skills.map((skill, index) => (
                  <div key={index} className="cardStyle p-6 max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                      {skill.icon}
                      <h3 className="text-xl font-semibold">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
