import { CloseIcon, SearchIcon } from '../../assets/icons';
import { DatePicker, Modal } from 'antd';
const { RangePicker } = DatePicker;
import './SearchBox.scss';
import { useState } from 'react';
import { Button } from 'antd/es/radio';
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function Search({ stays, cars, attractions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    if (stays) {
        return (
            <div className="home-search">
                <div className="home-search-text">
                    <h1 className="home-search-title">Tìm kiếm</h1>
                    <p className="home-search-desc">
                        Điểm đến, chỗ nghỉ, hay thậm chí là 1 địa chỉ
                    </p>
                </div>
                <form className="home-search-form">
                    <div className="home-search-form-container">
                        <div className="locate">
                            <span>
                                <SearchIcon
                                    fill="#bdbdbd"
                                    width="18"
                                    height="18"
                                />
                            </span>
                            <input
                                type="text"
                                placeholder="Xung quanh địa điểm hiện tại"
                            />
                            <span>
                                <CloseIcon
                                    fill="#bad4f7"
                                    width="18"
                                    height="18"
                                />
                            </span>
                        </div>
                        <div className="range-time">
                            <RangePicker
                                placeholder={[
                                    'Ngày nhận phòng',
                                    'Ngày trả phòng',
                                ]}
                                className="range-time"
                            />
                        </div>
                        <div className="product">
                            <label onClick={showModal} className="adult">
                                <p className="product-text">Người lớn</p>
                                <label className="product-text">2</label>
                            </label>
                            <label className="child">
                                <p className="product-text">Trẻ em</p>
                                <label className="product-text">2</label>
                            </label>
                            <label className="room">
                                <p className="product-text">Phòng</p>
                                <label className="product-text">2</label>
                            </label>
                        </div>
                        <div className="search-btn">
                            <Button className="btn">Tìm</Button>
                        </div>
                    </div>
                </form>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-container">
                            <div onClick={handleCancel} className="close-modal">
                                <div className="close-modal-btn">
                                    <CloseIcon fill="#bdbdbd" />
                                </div>
                            </div>
                            <div clasName="modal-input">
                                <label>Adults</label>
                                <div>
                                    <Button>-</Button>
                                    <span>2</span>
                                    <Button>+</Button>
                                </div>
                            </div>
                            <div className="modal-input">
                                <label>Children</label>
                                <div>
                                    <Button>-</Button>
                                    <span>2</span>
                                    <Button>+</Button>
                                </div>
                            </div>
                            <div className="modal-input">
                                <label>Rooms</label>
                                <div>
                                    <Button>-</Button>
                                    <span>2</span>
                                    <Button>+</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    } else if (cars) {
        return (
            <form className="cars-search">
                <div className=""></div>
            </form>
        );
    } else if (attractions) {
        return (
            <form className="attractions-search">
                <div className=""></div>
            </form>
        );
    }
}

export default Search;
