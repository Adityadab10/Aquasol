import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: "your-contribution",
      href: "yourcontribution.html",
      icon: "📊",
      title: "Your Contribution",
    },
    {
      id: "leaderboard",
      href: "leaderboard.html",
      icon: "🏆",
      title: "Leaderboard",
    },
    {
      id: "prizes",
      href: "prizes.html",
      icon: "🎁",
      title: "Prizes",
    },
    {
      id: "cleanup-drives",
      href: "cleanup.html",
      icon: "🧹",
      title: "Cleanup Drives",
    },
  ];

  return (
    <div className="relative">
      {/* Updated sidebar background color to match theme */}
      <div className="fixed top-16 left-0 h-[calc(100vh-64px)] w-16 bg-[#0c5585] rounded-r-md shadow-lg overflow-hidden transition-all duration-300 group hover:w-64 z-40">
        {/* Updated text colors to be more visible on darker background */}
        <div className="flex flex-col items-center justify-start h-full py-6 text-white space-y-6">
          {/* Updated dashboard title color */}
          <h2 className="text-white font-bold text-xl hidden group-hover:block mb-6 pt-4">
            Dashboard
          </h2>

          {/* Updated sidebar items styling */}
          {sidebarItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="w-full flex items-center space-x-4 px-4 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition duration-300"
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="hidden group-hover:block">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
