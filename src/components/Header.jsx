import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WifiIcon from '@mui/icons-material/Wifi';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

import "./Header.scss"

export default function Header () {
  return (
    <div className="header">
      <div className="left-header">
        <KeyboardArrowUpIcon className="icon" />
        <KeyboardArrowDownIcon className="icon" />
      </div>
      <div className="right-header">
        <div className="inner-right caps">
          <span>
            Activity
          </span>
          <div className="icons">
            <WifiIcon className="icon"/>
            <ViewColumnIcon className="icon"/>
          </div>
        </div>
      </div>


    </div>
  )
}
