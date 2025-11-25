import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const ThemeSelector = ({ showLabel = true }) => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <label className="form-control w-full max-w-xs">
      {showLabel && (
        <span className="label-text text-xs uppercase tracking-[0.3em] text-primary/70">
          Theme
        </span>
      )}
      <select
        className="select select-bordered theme-controller"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        aria-label="Select color theme"
      >
        {themes.map((option) => (
          <option key={option} value={option} data-set-theme={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ThemeSelector;


