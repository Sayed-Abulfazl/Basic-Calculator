"use client"
import './style2.css';

import { GrFastForward } from 'react-icons/gr';

import { useTheme } from '../hooks/useTheme'
import { useState } from 'react';
const colors = ['blue', 'green', 'cadetblue']
const colors2 = ['yellow', 'lightgreen', 'red', 'purple', 'violet', 'orangered', 'orange',
  'cyan', 'gold', 'brown', 'forestgreen', 'silver']

export default function ThemeSelector() {
  const { changeColor, mode, changeMode, language } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light")
  }

  const [moreColors, setMoreColors] = useState(false);

  const showMoreColors = () => {
    setMoreColors(true)
  }
  const hideMoreColors = () => {
    setMoreColors(false)
  }

  return (
    <div>
      {
        language === "English" &&
        <div className='flex flex-col gap-3'>

          <div className='flex flex-col gap-2'>
            <span > Dark Mode </span>

            <div className='modeMotion flex justify-around'>
              <label >
                <input onClick={toggleMode} type="checkbox" />
                <p>Off</p>
                <p>On</p>
                <span className="angle"></span>
              </label>
            </div>
          </div>

          <div className='flex gap-3 justify-start flex-col my-3'>
            <div className='flex justify-start'>
              <span>Background Color</span>
            </div>
            {
              !moreColors &&
              <div className='flex items-center gap-2 justify-center '>
                {colors.map((everyColor) => (
                  <div
                    className="w-[24px] h-[24px] rounded-full cursor-pointer"
                    key={everyColor}
                    style={{ background: everyColor }}
                    onClick={() => changeColor(everyColor)}
                  />
                ))}
                <span className='cursor-pointer text-green-600 animate-forward' onClick={showMoreColors}>
                  <GrFastForward />
                </span>
              </div>
            }
            {
              moreColors &&
              <div className='flex gap-2 items-center justify-center flex-wrap'>
                {colors2.map((everyColor) => (
                  <div
                    className="w-[24px] h-[24px] rounded-full cursor-pointer"
                    key={everyColor}
                    style={{ background: everyColor }}
                    onClick={() => changeColor(everyColor)}
                  />
                ))}
                <span className='cursor-pointer text-red-600 animate-backward' onClick={hideMoreColors}>
                  <GrFastForward className='rotate-[180deg] translate-x-[10px] ' />
                </span>
              </div>
            }
          </div>

        </div>
      }
      {
        language === "Persian" &&
        <div className='flex flex-col gap-3'>

          <div className='flex flex-col items-end gap-2'>
            <span > حالت شبانه </span>

            <div className='modeMotion flex mx-auto'>
              <label >
                <input onClick={toggleMode} type="checkbox" />
                <p className='persian size-font'>خاموش</p>
                <p className='persian size-font'>روشن</p>
                <span className="angle"></span>
              </label>
            </div>
          </div>

          <div className='flex gap-3 justify-start flex-col my-3'>
            <div className='flex justify-end'>
              <span>رنگ پس زمینه</span>
            </div>
            {
              !moreColors &&
              <div className='flex items-center gap-2 justify-center '>
                {colors.map((everyColor) => (
                  <div
                    className="w-[24px] h-[24px] rounded-full cursor-pointer"
                    key={everyColor}
                    style={{ background: everyColor }}
                    onClick={() => changeColor(everyColor)}
                  />
                ))}
                <span className='cursor-pointer text-green-600 animate-forward' onClick={showMoreColors}>
                  <GrFastForward />
                </span>
              </div>
            }
            {
              moreColors &&
              <div className='flex gap-2 items-center justify-center flex-wrap'>
                {colors2.map((everyColor) => (
                  <div
                    className="w-[24px] h-[24px] rounded-full cursor-pointer"
                    key={everyColor}
                    style={{ background: everyColor }}
                    onClick={() => changeColor(everyColor)}
                  />
                ))}
                <span className='cursor-pointer text-red-600 animate-backward' onClick={hideMoreColors}>
                  <GrFastForward className='rotate-[180deg] translate-x-[10px] ' />
                </span>
              </div>
            }
          </div>

        </div>
      }
    </div>
  )
}
