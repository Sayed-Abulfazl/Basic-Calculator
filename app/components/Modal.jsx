"use client"

import { useTheme } from '../hooks/useTheme';
import './style1.css'
import './style3.css'

import { useState } from "react"

import { RiCloseLargeFill } from "react-icons/ri";
import { BiErrorCircle } from 'react-icons/bi';

export default function Modal({ hidingModal }) {

    const [animatingOut, setAnimatingOut] = useState(false);

    const [formData, setFormData] = useState({ name: "", message: "" });

    const [status, setStatus] = useState("");

    const [checkInputName, setCheckInputName] = useState(true);
    const [checkInputMessage, setCheckInputMessage] = useState(true);

    const clearFeedback = (e) => {
        e.preventDefault();
        setFormData({ name: "", message: "" });
    }

    const closeModal = () => {
        setAnimatingOut(true);
        setTimeout(() => hidingModal(), 700)
    }
    const { mode, language } = useTheme();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            if (!formData.name) {
                setCheckInputName(false);
            }
            if (!formData.message) {
                setCheckInputMessage(false);
            }
            setTimeout(() => {
                setCheckInputName(true)
                setCheckInputMessage(true)
            }, 3000)
        } else {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ formData })
            });
            const data = await res.json();
            setStatus(data.success ? 'نظر فرستاده شد!' : 'ارسال نشد');
            setFormData({name : "", message : ""});
            alert(status)
        }
    };

    return (
        <div className="fixed w-[100%] inset-0 h-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.7)]"
            onClick={closeModal}
        >

            <div className={`transition-all duration-700 w-[85%] sm:w-[70%] lg:w-[50%] ${animatingOut ? "opacity-0 scale-0" : "opacity-100"} animate-modal2 `}
            >
                <div className={`box ${mode === "dark" ? "after:bg-black text-white" : "after:bg-white"} relative w-[100%]`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={`p-6 pt-8`}>
                        <div className={`absolute top-5 text-xl lg:text-2xl ${language === "Persian" ? "left-5" : "right-5"}`}>
                            <span
                                className={`cursor-pointer active:text-red-600`}
                                onClick={closeModal}
                            >
                                < RiCloseLargeFill />
                            </span>
                        </div>

                        {language === "English" &&
                            <section>

                                <div className="text-justify">
                                    <p className='font-bold sm:text-2xl mb-4 flex  items-end'>Hi dear, My name is Sayed
                                        <span className={`font-light text-3xl sm:text-4xl lg:text-5xl ml-2 wholetext ${mode === "dark" ? " wholetext2 text-[#111]" : "text-[#eee] wholetext1 "}`}>
                                            <span>A</span>
                                            <span>b</span>
                                            <span>u</span>
                                            <span>l</span>
                                            <span>f</span>
                                            <span>a</span>
                                            <span>z</span>
                                            <span>l</span>
                                        </span></p>
                                    <p>I've been working in the field of web development for around 6 months up to now. I'd love to hear your feedback!</p>
                                </div>
                                <form action="" className="py-2" onSubmit={handleSubmit}>
                                    <div className='relative'>

                                        <label className="grid grid-cols-4 my-2">
                                            <span className="">Your Email: </span>
                                            <input
                                                type="text"
                                                className={`rounded-xl focus:outline-green-500 lg:border-2 border col-start-2 col-end-5 px-3 py-1  ${mode === "dark" ? "bg-[#555] border-[#555]" : "bg-slate-100 border-slate-100"} ${!checkInputName ? "border-red-600" : ""}`}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </label>
                                        <span className={`${!checkInputName ? "block" : 'hidden'} text-red-600 absolute top-2.5 right-2`}> <BiErrorCircle /> </span>
                                    </div>

                                    <div className='relative'>
                                        <textarea
                                            className={`w-full resize-y h-[100px] max-h-[200px] min-h-[50px] border lg:border-2 rounded-xl px-3 py-1 shadow-2xl focus:outline-green-500 ${mode === "dark" ? "shadow-slate-700 bg-[#555] border-[#555]" : "bg-slate-100 shadow-slate-300 border-slate-100"} ${!checkInputMessage ? "border-red-600" : ""}`}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Enter Your Comment..."
                                            maxLength={200}
                                        >
                                        </textarea>
                                        <span className={`${!checkInputMessage ? "block" : "hidden"} text-red-600 absolute top-2 right-2`}> <BiErrorCircle /> </span>
                                    </div>

                                    <div className='flex items-end justify-between sm:px-2 lg:px-6'>
                                        <div className=''>
                                            <p className='text-[10px] italic text-red-600 font-bold'>Version 1.0 --- 1404-04-20</p>
                                        </div>

                                        <div className="flex gap-3 mt-3 pr-3 items-center ">
                                            <button
                                                className="bg-red-600 text-white px-3 py-1 font-bold rounded-xl cursor-pointer active:bg-red-800"
                                                onClick={(e) => clearFeedback(e)}
                                            >
                                                Clear
                                            </button>
                                            <button
                                                className=" bg-green-500   text-white  px-3 py-1  font-bold rounded-xl cursor-pointer active:bg-green-800">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        }
                        {language === "Persian" &&
                            <section className='direction'>
                                <div className="text-justify">
                                    <p className='font-bold sm:text-2xl mb-4 flex items-center gap-2'>سلام، من
                                        <span className={`font-light text-3xl sm:text-4xl lg:text-5xl wholetextP ${mode === "dark" ? " wholetextP2 text-[#111]" : "text-[#eee] wholetextP1"}`}>
                                            <span>سید</span>
                                            <span> ابوالفضل</span>
                                            <span>حسینی</span>
                                        </span>هستم.</p>
                                    <p>من در حوزه توسعه وب حدود 6 ماه است که فعالیت می کنم، خوشحال میشوم که نظر شما را ببینم !
                                    </p>
                                </div>


                                <form onSubmit={handleSubmit} action="" className="py-2 right">
                                    <div className='relative'>
                                        <label className="grid grid-cols-4 my-2 direction">
                                            <span className="">ایمیل شما: </span>
                                            <input
                                                type="text"
                                                className={`rounded-xl focus:outline-green-500 lg:border-2 border col-start-2 col-end-5 px-3 py-1  ${mode === "dark" ? "bg-[#555] border-[#555]" : "bg-slate-100 border-slate-100"} ${!checkInputName ? "border-red-600" : ""}`}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </label>
                                        <span className={`${!checkInputName ? "block" : 'hidden'} text-red-600 absolute top-2.5 left-2`}> <BiErrorCircle /> </span>
                                    </div>
                                    <div className='relative'>
                                        <textarea
                                            className={`w-full resize-y h-[100px] max-h-[200px] min-h-[50px] border lg:border-2 rounded-xl px-3 py-1 shadow-2xl ${mode === "dark" ? "shadow-slate-700 bg-[#555] border-[#555]" : "bg-slate-100 shadow-slate-300 border-slate-100"} ${!checkInputMessage ? "border-red-600" : ""} focus:outline-green-500`}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="نظر خود را واردکنید..."
                                            maxLength={200}
                                        >
                                        </textarea>
                                        <span className={`${!checkInputMessage ? "block" : "hidden"} text-red-600 absolute top-2 left-2`}> <BiErrorCircle /> </span>
                                    </div>

                                    <div className='flex items-end justify-between sm:px-2 lg:px-6'>
                                        <div className=''>
                                            <p className='text-[10px] italic text-red-600 font-bold'>نسخه ۱.۰ --- ۱۴۰۴/۰۴/۲۰</p>
                                        </div>

                                        <div className="flex gap-3 mt-3 pr-3 items-center ">
                                            <button
                                                className="bg-red-600 text-white px-3 py-1 font-bold rounded-xl cursor-pointer active:bg-red-800"
                                                onClick={(e) => clearFeedback(e)}
                                            >
                                                حذف
                                            </button>
                                            <button
                                                className=" bg-green-500 text-white px-3 py-1 font-bold rounded-xl cursor-pointer active:bg-green-800">
                                                ارسال
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
