import React from "react";


const ProfileCartSidebar = () => {
    return (
        <>

            <div>

                <div className="profile_sidebar">

                    <div className="sidebar1" >

                        <img src={require("../../assets/icons/Familyblack.svg")} />
                        <div className="sidebar_subhead">
                            <h5 className="profile">Personal Information</h5>
                            <img src={require("../../assets/icons/Arrow.svg")} />
                        </div>
                        <p>View, edit and change your personal
Information.</p>
                    </div>
                    <div className="sidebar1" >

                        <img src={require("../../assets/icons/cartblack.svg")} />
                        <div className="sidebar_subhead">
                            <h5 className="profile_active ">My Cart</h5>
                            <img src={require("../../assets/icons/Arrow.svg")} />
                        </div>
                        <p>View your wishlist, your cart and your
pending items</p>
                    </div>
                    <div className="sidebar1">


                        <img src={require("../../assets/icons/payment.svg")} />
                        <div className="sidebar_subhead">
                            <h5 className="profile ">Payment Options</h5>
                            <img src={require("../../assets/icons/Arrow.svg")} />
                        </div>
                        <p>View, edit your payment options.
View saved cards.</p>
                    </div>
                </div>
            </div>





        </>
    )
}

export default ProfileCartSidebar;