import { Bell, Lightbulb, Menu, Moon, Search, UserRound } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/states/themeSlice";

const HeaderNavbar = () => {
  const dispatch = useDispatch();

  const { mode } = useSelector((store) => store.theme);
  const { employee } = useSelector((store) => store.auth);

  const employeeName =
    employee?.fullName || employee?.name || employee?.email || "User";

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-700 bg-[var(--bg-card)] px-6">
      <div className="flex w-[35%] items-center gap-3 rounded-lg border border-gray-600 bg-[var(--bg-surface)] px-3 py-2">
        <Search size={22} className="text-[var(--text-secondary)]" />

        <input
          type="text"
          placeholder="Search workspace..."
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
        />
      </div>

      <div className="flex items-center gap-5">
        {mode === "light" ? (
          <Moon
            onClick={handleThemeChange}
            size={23}
            className="cursor-pointer text-[var(--text-primary)]"
          />
        ) : (
          <Lightbulb
            onClick={handleThemeChange}
            size={23}
            className="cursor-pointer text-[var(--text-primary)]"
          />
        )}

        <Bell
          size={23}
          className="cursor-pointer text-[var(--text-primary)]"
        />

        <Menu
          size={23}
          className="cursor-pointer text-[var(--text-primary)]"
        />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg-primary)] text-sm font-bold text-white">
            {employeeName ? employeeName.charAt(0).toUpperCase() : <UserRound size={18} />}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              {employeeName}
            </h3>

            <p className="text-xs capitalize text-[var(--text-secondary)]">
              {employee?.role || "member"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;