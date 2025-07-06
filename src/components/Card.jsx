import React from "react";

const Card = (props) => {
    console.log(props)

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <div className="flex items-center space-x-4">
                    <img 
                        src={props.avatar || "https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=U"} 
                        alt="Profile" 
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="text-white">
                        <h1 className="text-2xl font-bold">{props.name || "User Name"}</h1>
                        <h4 className="text-blue-100 font-medium">{props.username || "@username"}</h4>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Joined {props.joinedDate || "2023"}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">{props.repos || "0"}</div>
                            <div className="text-sm text-gray-500">Repositories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">{props.followers || "0"}</div>
                            <div className="text-sm text-gray-500">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">{props.following || "0"}</div>
                            <div className="text-sm text-gray-500">Following</div>
                        </div>
                    </div>
                    
                    {props.bio && (
                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm leading-relaxed">{props.bio}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card