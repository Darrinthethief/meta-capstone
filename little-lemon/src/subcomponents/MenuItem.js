import "../assets/menuItem.css";
import { menuData } from "../subcomponents/menuData";

const MenuItem = () => {
    return (
        <div className="menu-container">
            {menuData.map((item) => (
                <div className="menu-card" key={item.menuId}>
                    <div className="menu-item">
                        <div className="menu-photo">
                            <img
                                src={item.menuPhoto}
                                alt={item.menuTitle}
                                id="menu-photo"
                            />
                        </div>
                        <div className="menu">
                            <div className="menu-title">
                                <p className="title">{item.menuTitle}</p>
                                <p className="price">{item.menuPrice}</p>
                            </div>
                            <div className="menu-description">
                                <p className="description">{item.menuDescription}</p>
                                <p className="delivery-fee">{item.menuDeliverFee}</p>
                            </div>
                        </div>
                    </div>
                 </div>
            ))}
        </div>
    );
};

export default MenuItem;