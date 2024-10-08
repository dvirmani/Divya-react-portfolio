import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        //console.log("Portfolio container has rendered");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
        // this.getPortfolioItems = this.getPortfolioItems.bind(this);

        // this.handlePageTitleupdate = this.handlePageTitleupdate.bind(this);
    }
    // when to use class based component, when you have the following, if you need to react to changes otherwise functional components work fine
    //State
    // Lifecycle hooks

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    getPortfolioItems() {
        axios.get("https://dvirmani.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                // handle success
                // console.log("response data", response);
                this.setState({
                    data: response.data.portfolio_items
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;
        })
    }

    // handlePageTitleupdate() {
    //     this.setState({
    //         pageTitle: "Some New Title"
    //     })
    // }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }


        return (


            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("Technology")}>Technology</button>
                <button className="btn" onClick={() => this.handleFilter("Social Media")}>Social Media</button>
                <button className="btn" onClick={() => this.handleFilter("Learning")}>Learning</button>
                {this.portfolioItems()}


            </div>

        );
    }
}