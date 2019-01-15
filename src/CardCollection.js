import React, { Component } from 'react';

class CardCollection extends Component {
    constructor(props){
        super(props);
        this.data = {
            "page":1,
            "totalPages": 119,
            "totalResults": 2841,
            "sort":"All",
            "cards":[
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                },
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                },
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                },
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                },
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                },
                {
                    "icon": "https://d2i0awu7puyonj.cloudfront.net/0/13165/372926c3-f251-4aa8-9b79-a9fe02e041d0.png",
                    "heading": "Cloth Texture Generator",
                    "subheading": "Adobe Research Imagination Lab",
                    "adobe_related_product_icon": [ "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png", "https://cdn.iconscout.com/icon/free/png-256/adobe-photoshop-4-569303.png"],
                    "description": "Realistic Cloth Texture Generator",
                    "stars": 4.5,
                    "price": "Free"
                }
            ],
            "tags": {}
        };
    }

    render() {
        return <div>{ this.props.render(this.data.cards, this.props.store.getState().currentPage) } </div>

    }
}

export default CardCollection;