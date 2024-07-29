import React, { Context, createContext } from 'react'

type DarkModeContextValue={
    isDarkMode:boolean;
    setIsDarkMode:(prev:boolean) =>void;
    useDeviceSettings: boolean;
    setUseDeviceSettings:(prev:boolean) =>void;
};

const DarkMode: Context<DarkModeContextValue> = createContext<DarkModeContextValue> ({
  isDarkMode: false,
  setIsDarkMode: () => {},
  setUseDeviceSettings: () => {},
  useDeviceSettings: false
})

export default DarkMode;