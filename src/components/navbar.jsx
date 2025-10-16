import { Search } from "lucide-react";
import { useState } from "react";

export default function Navbar({ tasks, searchTask, setSearchTask }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbarr">
        <h1>ToDoList</h1>
      </div>
      {tasks.length > 5 && (
        <div className="navbar-search">
          <Search
            size={20}
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              className="search-input-navbar"
              placeholder="Search tasks..."
              value={searchTask}
              onChange={(e) => setSearchTask(e.target.value)}
            />
          )}
        </div>
      )}
    </nav>
  );
}
