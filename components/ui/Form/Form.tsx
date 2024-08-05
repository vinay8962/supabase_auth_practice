'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";

const Form = () => {
    const [questions, setQuestions] = useState<string[]>(['']);
    const [rating, setRating] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [reviewText, setReviewText] = useState<string>("");

    const handleAddQuestion = () => {
        setQuestions([...questions, '']);
    };

    const handleRemoveQuestion = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleStarClick = (index: number) => {
        setRating(index + 1);
    };

    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    return (
        <div className="w-full flex p-4 space-y-4 bg-black rounded-lg max-sm:flex-col max-sm:p-1">
            <div className="w-1/2 p-2 max-sm:w-full max-sm:p-1">
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-white">{title || "Title Custom Own Accoding"}</h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="text1" className="block mb-1 text-white">{reviewText || "Your custom message goes here..."}</label>
                    <textarea id="text1" placeholder="Text" className="w-full p-2 border bg-transparent text-white rounded focus:border-violet-700 focus:outline-none" />
                </div>
                <div>
                    <h1 className='text-white'>Question</h1>
                    {questions.map((question, index) => (
                        <div key={index} className="mb-4 flex items-center">
                            <label htmlFor={`checkbox${index}`} className="block mb-1 mr-2 text-white">{question || "Your custom Question goes here..."}</label>
                            <input type="checkbox" id={`checkbox${index}`} className="p-2 bg-transparent border rounded size-5" />
                        </div>
                    ))}

                </div>

                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-2 text-white">Rating</h1>
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                size={24}
                                className="cursor-pointer"
                                color={index < rating ? "#FFD700" : "#DDDDDD"}
                                onClick={() => handleStarClick(index)}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <button className="w-20 border flex justify-center items-center text-white border-gray-50 p-2 rounded-xl hover:text-black hover:bg-lime-500">
                        Share <RiShareForwardLine />
                    </button>
                </div>

            </div>
            <div className="w-1/2 p-2 max-sm:w-full">
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-1 text-white">Header title </label>
                    <input type="text" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className="w-full p-2 border bg-transparent text-white rounded focus:border-violet-700 focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label htmlFor="text2" className="block mb-1 text-white">Your custom message</label>
                    <input type="text" id="text2" placeholder="Text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="w-full p-2 border rounded bg-transparent text-white focus:border-violet-700 focus:outline-none" />
                </div>

                {questions.map((question, index) => (
                    <div key={index} className="mb-4 items-center">
                        <label htmlFor={`dynamicQuestion${index}`} className="block mb-1 text-white">Question {index + 1}</label>
                        <div className='flex'>
                            <input
                                type="text"
                                id={`dynamicQuestion${index}`}
                                value={question}
                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                placeholder="Text"
                                className="w-full p-2 border bg-transparent text-white rounded focus:border-violet-700 focus:outline-none"
                            />
                            <button
                                onClick={() => handleRemoveQuestion(index)}
                                className="ml-2 px-4 py-2    text-white rounded hover:text-red-600 transition-colors"
                            >
                                <RiDeleteBin5Line className='size-6' />
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    onClick={handleAddQuestion}
                    className="px-4 py-2 bg-blue-500 flex items-center text-white rounded hover:bg-blue-700  transition-colors"
                >
                    Add Question < IoIosAdd />
                </button>
            </div>
        </div>
    );
}

export default Form;
