import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-lg">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        GitHub Profile Card Generator
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl font-medium">
                        Create beautiful profile cards for your GitHub users
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;
