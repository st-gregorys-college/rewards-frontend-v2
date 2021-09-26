import React, { useState } from "react";

import Card from "./Card";

export default function SideNav({ heading, items, setSelectedComponent }) {
  const [sideNavItems, setSideNavItems] = useState(items);

  const itemClick = e => {
    if (e.active) return;

    const _items = [];

    items.map(item => {
      _items.push({
        title: item.title,
        component: item.component,
        active: item.title === e.title
      });
    });

    setSideNavItems(_items);
    setSelectedComponent(e.component);
  }

  return (
    <Card
      body={
        <div style={{padding: 12}}>
          <h6 className="fw-bold text-uppercase mb-2">{heading}</h6>
          <ul className="card-list list text-gray-700 mb-6">
            {
              sideNavItems.map(item => {
                return <li className={item.active ? 'list-item active' : 'list-item'} onClick={() => itemClick(item)}>
                  <div className="list-link text-reset">{item.title}</div>
                </li>
              })
            }
          </ul>
        </div>
      }
    />
  );
}