import { IconContext } from "react-icons"
import { FaPlusCircle } from "react-icons/fa"

<IconContext.Provider
    value={{
        color: "darkcyan",
        style: {fontSize: "20px", color: "#ff0000"},
        className: "submit-icon",
    }}
    >
        <button className="input-submit">
            <FaPlusCircle />
            <FaPlusCircle />
            <FaPlusCircle />
        </button>
    </IconContext.Provider>