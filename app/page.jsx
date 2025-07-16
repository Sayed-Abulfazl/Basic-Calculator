"use client"


import { IoSettingsOutline } from "react-icons/io5"
import { FcAbout } from "react-icons/fc"
import { BsBackspace } from "react-icons/bs"

import { useState } from "react"

import { useTheme } from './hooks/useTheme'


import Modal from './components/Modal'
import Settings from './components/Settings'

export default function Home() {


  const [lastClick, setLastClick] = useState("");
  const [allClicks, setAllClicks] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [showSetAnim, setShowSetAnim] = useState(false);

  const getLastClick = (inputLN) => {
    setLastClick(inputLN);
    setAllClicks((preClicks) => [...preClicks, inputLN])
  }

  const printResult = () => {
    const result = allClicks
      .join("")
      .split(/(\D)/g)
      .map((n) => (n.match(/(\d)/g) ? parseInt(n, 0) : n))
      .reduce((prevValue, currenValue, index, array) => {
        switch (currenValue) {
          case "+":
            return prevValue = prevValue + array[index + 1];
          case "-":
            return prevValue = prevValue - array[index + 1];
          case "×":
            return prevValue = prevValue * array[index + 1];
          case "÷":
            return prevValue = prevValue / array[index + 1];
          default:
            return prevValue;
        }
      }
      )
    setAllClicks([result]);
    setLastClick('');
  }

  const clearData = () => {
    setAllClicks([]);
    setLastClick("");
  }

  const RemoveData = () => {
    setAllClicks((preClicks) => {
      return preClicks.slice(0, -1);
    })
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const hideSettings = () => {
    setShowSettings(false);
    setShowSetAnim(false)
  }
  const openSettings = () => {
    setShowSetAnim(true)
    setTimeout(() => {
      setShowSettings(true)
    }, 500)
  }

  const { color, mode, language } = useTheme();

  return (
    <div style={{ background: color }} className="transition-all duration-700 flex justify-center items-center py-8 h-screen sm:h-full">

      {showModal &&
        <Modal hidingModal={hideModal} />
      }
      {showSettings &&
        <Settings hidingSettings={hideSettings} />
      }

      <div className="bg-[rgba(255,255,255,0.5)] px-5 py-3 lg:w-[40%] sm:w-[60%] w-[80%] text-center shadow-2xl">
        <div className="flex justify-between">
          <div>
            <p
              onClick={() => setShowModal(true)}
              className="cursor-pointer text-2xl">
              <FcAbout />
            </p>
          </div>
          <div>
            <p
              className={`set ${mode === "dark" ? "text-black" : "text-white"} cursor-pointer text-2xl ${showSetAnim ? "settingSpin" : ""}`}
              onClick={() => openSettings()}
            >
              <IoSettingsOutline />

            </p>
          </div>
        </div>
        <h1 className={`text-[24px] text-white sm:text-[30px] lg:text-[40px] my-1 mode-text ${mode}`}>
          {language === "English" &&
            <span>My Calculator</span>
          }
          {language === "Persian" &&
            <span>ماشــــین حســــاب </span>
          }
        </h1>
        <div className="">
          <p className="text-2xl sm:text-3xl border-b-1 sm:border-b--2 border-white text-white h-[40px]">
            {allClicks}
          </p>
          <p className="sm:text-xl mt-2 h-[32px]">
            {lastClick}
          </p>
        </div>
        <div className={`grid grid-cols-4 px-8 gap-2 my-3 m0 bg-white ${mode} mode py-6 shadow-2xl rounded-2xl`}>
          <div className="col-start-1 grid grid-cols-3 col-end-4 gap-6">
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-red-700 cursor-pointer active:text-white text-red-600" onClick={() => clearData()}>C</button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:border-green-500 cursor-pointer text-blue-700 border-blue-400 border-1" onClick={() => getLastClick("/")}>÷</button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:border-green-500 cursor-pointer text-blue-700 border-blue-400 border-1" onClick={() => getLastClick("*")}>×</button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(7)}>
              {language === "English" &&
                <span>7</span>
              }
              {language === "Persian" &&
                <span>۷</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(8)}>
              {language === "English" &&
                <span>8</span>
              }
              {language === "Persian" &&
                <span>۸</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(9)}>
              {language === "English" &&
                <span>9</span>
              }
              {language === "Persian" &&
                <span>۹</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(4)}>
              {language === "English" &&
                <span>4</span>
              }
              {language === "Persian" &&
                <span>۴</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(5)}>
              {language === "English" &&
                <span>5</span>
              }
              {language === "Persian" &&
                <span>۵</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(6)}>
              {language === "English" &&
                <span>6</span>
              }
              {language === "Persian" &&
                <span>۶</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(1)}>
              {language === "English" &&
                <span>1</span>
              }
              {language === "Persian" &&
                <span>۱</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(2)}>
              {language === "English" &&
                <span>2</span>
              }
              {language === "Persian" &&
                <span>۲</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(3)}>
              {language === "English" &&
                <span>3</span>
              }
              {language === "Persian" &&
                <span>۳</span>
              }
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick(0)}>
              {language === "English" &&
                <span>0</span>
              }
              {language === "Persian" &&
                <span>۰</span>
              }
            </button>
            <button className="col-start-2 col-end-4 transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:bg-green-500 cursor-pointer" onClick={() => getLastClick("00")}>
              {language === "English" &&
                <span>00</span>
              }
              {language === "Persian" &&
                <span>۰۰</span>
              }
            </button>
          </div>
          <div className="grid grid-rows-5 gap-6">
            <button className={`transition duration-200 text-3xl sm:text-3xl font-semibold lg:text-4xl active:text-red-700 cursor-pointer  m-auto ${mode === 'dark' ? "text-white" : "text-black"}`} onClick={() => RemoveData()}>
              <BsBackspace />
            </button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:border-green-500 cursor-pointer text-blue-700 border-blue-400 border-1" onClick={() => getLastClick("-")}>–</button>
            <button className="transition duration-200 ease-linear text-2xl sm:text-3xl font-semibold lg:text-4xl py-1 rounded-2xl active:border-green-500 cursor-pointer text-blue-700 border-blue-400 border-1" onClick={() => getLastClick("+")}>+</button>
            <button className="row-start-4 row-end-6 transition duration-200 ease-linear text-4xl sm:text-3xl font-semibold  bg-[#0f4] lg:text-4xl p-1 rounded-2xl active:bg-green-500 cursor-pointer text-blue-700" onClick={() => printResult()}>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}
