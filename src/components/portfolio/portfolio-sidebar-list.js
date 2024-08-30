import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PortfolioSidebarList = props => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-item-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <div className="text-content">
                    <div className="title">{portfolioItem.name}</div>
                    <div className="actions">
                        <a className="action-icon" onClick={() => props.handleEditClick(portfolioItem)}>
                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                        </a>
                        <a className="action-icon" onClick={() => props.hanleDeleteClick(portfolioItem)}>
                            <FontAwesomeIcon icon="trash" />
                        </a>
                    </div>

                </div>
            </div>
        );
    });

    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
