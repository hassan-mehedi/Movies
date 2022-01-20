import React from "react";
import "./list.style.scss";

export default function List({ listData }) {
    return (
        <div className="list">
            {listData.map((item, index) => {
                return (
                    <a
                        href={`/movie/${item.id}`}
                        className="list-item"
                        key={index}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="list-item-image"
                        />
                        <div className="list-item-description">
                            <h4 className="list-item-description-title">
                                {item.title}
                            </h4>
                            <p className="list-item-description-year">
                                {item.description}
                            </p>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
