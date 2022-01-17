import React from "react";
import "./list.style.scss";

export default function List({ listData }) {
    return (
        <div className="list">
            {listData.map((item, index) => {
                return (
                    <a
                        href={`/movie/${item.l}/${item.id}`}
                        className="list-item"
                        key={index}
                    >
                        <img
                            src={
                                item.hasOwnProperty("i")
                                    ? item.i.imageUrl
                                    : "/no_image.jpg"
                            }
                            alt={item.l}
                            className="list-item-image"
                        />
                        <div className="list-item-description">
                            <h4 className="list-item-description-title">
                                {item.l}
                            </h4>
                            <p className="list-item-description-year">
                                {item.y}
                            </p>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
