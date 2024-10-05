const SignUpSection = () => {
    return (
        <div className="flex max-w-full h-screen"> {/* Full height of the viewport */}
            <div className="w-1/2 h-full"> {/* Image section */}
                <img
                    src="https://via.placeholder.com/600" // Replace with your image URL
                    alt="Description of the image"
                    className="w-full h-full object-cover" // Cover the entire div
                />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center p-6"> {/* Text section */}
                <h2 className="text-3xl font-bold mb-4">Your Heading Here</h2>
                <p className="text-lg text-gray-700">
                    This is the text that describes the image on the left. You can add
                    more content here, such as details about the image or a related
                    topic. Make sure to keep it engaging and informative.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Call to Action
                </button>
            </div>
        </div>
    );
};

export default SignUpSection;
