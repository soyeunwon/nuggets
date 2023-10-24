import { useEffect } from "react";
import { useStoreDarkmode } from "@/feature/darkmode/useStoreDarkmode";
import { bodyThemeColor } from "@/feature/darkmode/Module";

export const ComponentDarkmode = () => {
  const [isDarkmode, setIsDarkmode] = useStoreDarkmode((state) => [
    state.isDarkmode,
    state.setIsDarkmode,
  ]);

  const handleDarkmode = (event) => {
    const isChecked = event.target.checked;
    setIsDarkmode(isChecked);
    bodyThemeColor(isChecked);
  };

  useEffect(() => {
    const storage = localStorage.getItem("isDarkmode");
    const isStorageDarkmode = JSON.parse(storage) ?? false;

    setIsDarkmode(isStorageDarkmode);
    bodyThemeColor(isStorageDarkmode);
  }, []);

  return (
    <div className="margin-bottom">
      <h2 className="title">useDarkmode</h2>
      <p>Current theme: {isDarkmode ? "dark" : "light"}</p>

      <div className="mode-checkbox">
        <input
          className="checkbox"
          type="checkbox"
          id="darkmode"
          checked={isDarkmode}
          onChange={handleDarkmode}
        />
        <label htmlFor="darkmode" className="checkmark">
          Mode
        </label>
      </div>
    </div>
  );
};
