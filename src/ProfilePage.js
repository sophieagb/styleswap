// ProfilePage.js
import React from 'react';
import Footer from './Main/Footer';
import './ProfilePage.css'; 

const ProfilePage = () => {
  return (
    <div>
        <div className="profile-container">
            <div className="top-section">
                {/* Profile Picture and Username */}
                <div className="profile-container">
                    <img src="images/profile_image.png" alt="Profile Picture" className="profile-pic" />
                    <p className="username">@styleswap_user009</p>
                </div>

                {/* Cart Icon */}
                <div className="cart-icon">
                <img src="/images/shop.png" alt="Cart Icon" className="icon" />
                </div>
            </div>

                

            <div className="content">

            <div className="listings">
                    <p><strong>Active Listings</strong><img src="/images/add.png" alt="Plus Icon" className="plus-icon" /></p>
                </div>
                <div class="box1">
                    <p>You haven’t listed anything for sale yet. </p>
                    <p>Tap + above to get started.</p>
                </div>
                
                <div className="likes">
                    <p><strong>Liked Items</strong></p>
                </div>
                <div class="box2">
                <div className="image-grid">
                        <img src="/images/image1.png" alt="Item 1" className="item-image" />
                        <img src="/images/image2.png" alt="Item 2" className="item-image" />
                        <img src="/images/image3.png" alt="Item 3" className="item-image" />
                        <img src="/images/image4.png" alt="Item 4" className="item-image" />
                        <img src="/images/image5.png" alt="Item 5" className="item-image" />
                        <img src="/images/image6.png" alt="Item 6" className="item-image" />
                        <img src="/images/image7.png" alt="Item 7" className="item-image" />
                        <img src="/images/image8.png" alt="Item 8" className="item-image" />
                    </div>
                </div>
                <div className="scroll-area">
                <img src="/images/Scroll.png" alt="Scroll" className="scroll-image" />
                </div>
                
            </div>
        </div>



        <Footer />
    </div>
  );
};

export default ProfilePage;