import React from 'react'
import './WhatsInTheBox.css'

const WhatsInTheBox = () => {
    return (
        <div className="whatsInTheBox">
            <h1 className="margin-bottom-1">What's in the box?</h1>
            <h2 className="pale">A personalized mix of unique products and a whole lot of bang for your buck</h2>

            <div className="row centered-horizontally">
                <img className="image" src="/images/whatsInTheBox/d-imageGallery1@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery2@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery3@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery7@2x.jpg" alt="" />
            </div>

            <div className="row centered-horizontally">
                <img className="image" src="/images/whatsInTheBox/d-imageGallery4@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery5@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery3@2x.jpg" alt="" />
                <img className="image" src="/images/whatsInTheBox/d-imageGallery8@2x.jpg" alt="" />
            </div>

            <p className="notify">
                We partner with under-the-radar brands so you can discover the coziest selection of bedding and sleep products.
                And to help out during the Covid-19 crisis, we’ve committed to buying $1,000,000 of products just from small businesses.
            </p>
        </div>
    )
}

export default WhatsInTheBox
