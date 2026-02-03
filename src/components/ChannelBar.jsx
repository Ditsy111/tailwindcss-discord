import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

/* =========================
   DATA (just plain arrays)
   ========================= */

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

/* =========================
   MAIN COMPONENT
   ========================= */

function ChannelBar() {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />

      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
      </div>
    </div>
  );
}

/* =========================
   DROPDOWN COMPONENT
   ========================= */

function Dropdown(props) {
  const header = props.header;
  const selections = props.selections;

  // React state
  const [expanded, setExpanded] = useState(true);

  function toggleDropdown() {
    setExpanded(!expanded);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <ChevronIcon expanded={expanded} />

        <h5
          className={
            expanded
              ? 'dropdown-header-text-selected'
              : 'dropdown-header-text'
          }
        >
          {header}
        </h5>

        <FaPlus size={12} className="text-accent text-opacity-80 my-auto ml-auto" />
      </div>

      {expanded &&
        selections.map((item) => (
          <TopicSelection key={item} selection={item} />
        ))}
    </div>
  );
}

/* =========================
   CHEVRON ICON
   ========================= */

function ChevronIcon(props) {
  const expanded = props.expanded;
  const className = 'text-accent text-opacity-80 my-auto mr-1';

  if (expanded) {
    return <FaChevronDown size={14} className={className} />;
  } else {
    return <FaChevronRight size={14} className={className} />;
  }
}

/* =========================
   SINGLE TOPIC ROW
   ========================= */

function TopicSelection(props) {
  return (
    <div className="dropdown-selection">
      <BsHash size={24} className="text-gray-400" />
      <h5 className="dropdown-selection-text">
        {props.selection}
      </h5>
    </div>
  );
}

/* =========================
   CHANNEL TITLE
   ========================= */

function ChannelBlock() {
  return (
    <div className="channel-block">
      <h5 className="channel-block-text">Channels</h5>
    </div>
  );
}

export default ChannelBar;
