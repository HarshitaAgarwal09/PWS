import React, { useState } from "react";
import { Slider } from "antd";
import "./Sidebar.css";
import { Rate } from "antd";
import { Icon } from "antd";

function Sidebar() {
  const [pricerange, setPriceRange] = useState([200, 500]);
  const [ratevalue, setRateValue] = useState(3);

  function onChange(value) {}

  function onAfterChange(value) {
    setPriceRange(value);
  }

  function handleChangeRate(value) {
    setRateValue(value);
  }

  const [toggle, setToggle] = useState(true);

  function handleChangeAmmenities() {}
  const pricemarks = {
    0: "0",
    500: "500",
    1000: "1000",
    1500: "1500",
    2000: "2000"
  };
  const rates = ["terrible", "bad", "normal", "good", "wonderful"];

  function togglebutton() {
    setToggle(!toggle);
  }

  return (
    <div>
      <div className="ToggleBtn">
        <Icon
          type="unordered-list"
          className="ToogleBtnIcon"
          onClick={togglebutton}
          style={{ fontSize: 28 }}
        />
        <p>Apply Filters</p>
      </div>
      <div className={toggle ? "dis-block" : "dis-block"}>
        <div className="SidebarContainer ">
          <h2>Apply some Filters</h2>

          <div>
            <div className="SidebarFilter Slider-nav">
              <div className="Slider">
                <span>
                  <span className="SidebarTitle">Price Range</span>
                </span>
                <Slider
                  range
                  marks={pricemarks}
                  step={100}
                  defaultValue={pricerange}
                  onChange={onChange}
                  onAfterChange={onAfterChange}
                  max={2000}
                  min={0}
                />
              </div>
              <div className="Ratings  Slider-nav">
                <span className="SidebarTitle">
                  <span>Ratings</span>
                </span>
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  tooltips={rates}
                  onChange={handleChangeRate}
                  value={ratevalue}
                />
              </div>
              <div className="Ammenities  Slider-nav">
                <span className="SidebarTitle">
                  <span>Ammenities</span>
                </span>
                <div className="VCOpt">
                  <label>
                    <input
                      type="checkbox"
                      name="ammenities"
                      value="AC"
                      onChange={handleChangeAmmenities}
                    />
                    AC
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="ammenities"
                      value="Eating facility"
                      onChange={handleChangeAmmenities}
                      defaultChecked
                    />
                    Eating facility
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="ammenities"
                      value="Washroom"
                      onChange={handleChangeAmmenities}
                    />
                    Attach Washroom
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="ammenities"
                      value="Wifi"
                      onChange={handleChangeAmmenities}
                      defaultChecked
                    />
                    Wifi
                  </label>
                  <br />
                </div>
                <div className="Distance  Slider-nav">
                  <span className="SidebarTitle">
                    <span>Sort By Distance</span>
                  </span>
                  <button className="DistanceBtn">5 km</button>
                </div>
                <div className="Place  Slider-nav">
                  <span className="SidebarTitle">
                    <span>Sort By Place</span>
                  </span>
                  <input type="text" />
                </div>
                <div className="Map  Slider-nav">
                  <span className="SidebarTitle">
                    <span>Map view (search nearby)</span>
                    <Icon type="caret-down" theme="filled" />
                  </span>
                </div>
              </div>
              <button className="FilterBtn"> Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
