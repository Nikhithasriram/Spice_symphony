import React, { useState } from 'react';
import axios from 'axios';

const CreateDishPage = () => {
    const [dishName, setDishName] = useState('');
    const [category, setCategory] = useState('');
    const [isVeg, setIsVeg] = useState(false);
    const [isSpicy, setIsSpicy] = useState(false);
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Constructing the dish object to send to the API
        const newDish = {
            name: dishName,
            type: category,         // Updated to "type" as per your request
            description: description,
            price: parseFloat(cost), // Convert to float for price
            vegetarian: isVeg,       // Boolean for vegetarian
            spicy: isSpicy,          // Boolean for spicy
            image: image             // Assuming the image path is directly provided
        };

        try {
            // Making a POST request to the API endpoint
            const response = await axios.post('http://localhost:5000/api/menu/add-dish', newDish);
            console.log('Dish added successfully:', response.data);
            // You can add additional logic here, e.g., redirecting or displaying a success message
        } catch (error) {
            console.error('Error adding dish:', error);
            // Optionally handle the error, e.g., providing feedback to the user
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white"
        style={{
            backgroundImage: "url('/menu_bg.jpg')", // Replace with your actual image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1,
        }}
        >
            <h2 className="text-4xl font-bold mb-8">Create New Dish</h2>
            
            <div className="flex items-center space-x-8 bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Image Section */}
                <div className="flex items-center justify-center w-48 h-48 border-2 border-yellow-400 rounded-lg">
                    <img 
                        src={image || "/pasta.jpg"}  // Placeholder for dish image
                        alt="Dish Preview"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    {/* Category Input */}
                    <input 
                        type="text" 
                        placeholder="Type" 
                        className="p-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />

                    <input 
                        type="text" 
                        placeholder="Dish Name" 
                        className="p-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={dishName}
                        onChange={(e) => setDishName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className="p-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        required
                    />
                    <div className="flex justify-between items-center">
                        <label className="flex items-center mr-4">
                            <input 
                                type="checkbox" 
                                checked={isVeg} 
                                onChange={() => setIsVeg(!isVeg)} 
                            />
                            <span className="ml-2">Vegetarian</span>
                        </label>
                        <label className="flex items-center">
                            <input 
                                type="checkbox" 
                                checked={isSpicy} 
                                onChange={() => setIsSpicy(!isSpicy)} 
                            />
                            <span className="ml-2">Spicy</span>
                        </label>
                        <input 
                            type="number" 
                            placeholder="Price" 
                            className="p-2 bg-gray-700 text-white border border-gray-600 rounded w-1/3"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            required
                        />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Image Path" 
                        className="p-2 bg-gray-700 text-white border border-gray-600 rounded"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400 transition duration-300"
                    >
                        ADD TO MENU
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDishPage;