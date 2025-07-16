"use client"

import { IoCloseCircle } from "react-icons/io5"

import ThemeSelector from './ThemeSelector';

import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

export default function Settings({ hidingSettings }) {

  const { mode, language, changeLanguage } = useTheme();
  
  const [animatingOut , setAnimatingOut] = useState(false);

  const closeSetModal = () => {
    setAnimatingOut(true)
    setTimeout(() => hidingSettings(), 700)    
  }

  return (
    <div className="fixed top-0 w-full flex justify-end items-start h-full bg-[rgba(0,0,0,0.8)] " onClick={closeSetModal}>
      <div className={`modalSet mode transition-all duration-700 animate-modal1 
      ${animatingOut ? "translate-y-[-300px]" : ""} w-[80%] sm:w-[420px] pb-5 bg-white p-3 ${mode} rounded-b-xl`} 
        onClick={(e) => e.stopPropagation() }>
        <div className={`flex justify-end  ${language === "Persian" ? "reverse" : ""}`}>
          <IoCloseCircle onClick={closeSetModal} className='text-red-400 text-3xl  cursor-pointer' />
        </div>

        <div>
          <ThemeSelector />
        </div>

        <div>
        </div>

        <div className={`flex gap-4 ${language === "Persian" ? "reverse" : ""} my-4`}>
          {language === "English" &&
            <span>Select Language: </span>
          }
          {language === "Persian" &&
            <span>:انتخاب زبان</span>
          }
          { language === "English" &&
          <label className="flex gap-1" onClick={() => changeLanguage("Persian")}>
            <input type="radio" name="lan" id="per" />
            {language === "English" &&
              <span>Persian</span>
            }
            {language === "Persian" &&
              <span>فارسی</span>
            }
          </label>
          }
          { language === "Persian" &&
          <label className="flex gap-1" onClick={() => changeLanguage("Persian")}>
            <input type="radio" name="lan" defaultChecked id="per" />
            {language === "English" &&
              <span>Persian</span>
            }
            {language === "Persian" &&
              <span>فارسی</span>
            }
          </label>
          }

          { language === "English" &&
          <label className="flex gap-1" onClick={() => changeLanguage("English")}>
            <input type="radio" name="lan" defaultChecked id="eng" />
            {language === "English" &&
              <span>English</span>
            }
            {language === "Persian" &&
              <span>انگلیسی</span>
            }
          </label>
          }
          { language === "Persian" &&
          <label className="flex gap-1" onClick={() => changeLanguage("English")}>
            <input type="radio" name="lan" id="eng" />
            {language === "English" &&
              <span>English</span>
            }
            {language === "Persian" &&
              <span>انگلیسی</span>
            }
          </label>
          }

        </div>
      </div>
    </div>
  )
}
