import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        //console.log("Portfolio container has rendered");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "Maxplanck", category: "Research", slug: "maxplanck" },
                { title: "UniStuttgart", category: "Physics", slug: "uni-stuttgart" },
                { title: "CICnanoGUNE", category: "Research", slug: "cicnangune" },
                { title: "Keysight", category: "Industry", slug: "keysight" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);

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
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
        })
    }

    // handlePageTitleupdate() {
    //     this.setState({
    //         pageTitle: "Some New Title"
    //     })
    // }
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Research")}>Research</button>
                <button onClick={() => this.handleFilter("Physics")}>Physics</button>
                <button onClick={() => this.handleFilter("Industry")}>Industry</button>



                {this.portfolioItems()}

                {/* <hr />
                <button onClick={this.handlePageTitleupdate}>Change Title</button> */}
            </div>
        );
    }
}