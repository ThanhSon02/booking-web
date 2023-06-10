import { CloseIcon, SearchIcon } from '../../assets/icons';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import './SearchBox.scss';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd/es/radio';
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function Search({ stays, cars, attractions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);

    const modalRef = useRef();

    useEffect(() => {
        if(modalRef.current && !modalRef.current.contains(event.target)) {
            alert("You clicked outside of me!");
        }
    }, [modalRef])
    

    const IncreaseAdults = () => {
        setAdults(adults + 1);
    }

    const IncreaseChildren = () => {
        setChildren(children + 1);
    }
    
    const IncreaseRooms = () => {
        setRooms(rooms + 1);
    }

    const DecreaseAdults = () => {
        setAdults(adults - 1);
    }

    const DecreaseChildren = () => {
        setChildren(children - 1);
    }

    const DecreaseRooms = () => {
        setRooms(rooms - 1);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    if (stays) {
        return (
            <div className="home-search">
                <div className="home-search-text mobile">
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
                                <label className="product-text">{adults}</label>
                            </label>
                            <label onClick={showModal} className="child">
                                <p className="product-text">Trẻ em</p>
                                <label className="product-text">{children}</label>
                            </label>
                            <label onClick={showModal} className="room">
                                <p className="product-text">Phòng</p>
                                <label className="product-text">{rooms}</label>
                            </label>
                        </div>
                        <div className="search-btn">
                            <Button className="btn">Tìm</Button>
                        </div>
                    </div>
                </form>
                {isModalOpen && (
                    <div ref={modalRef} className="modal">
                        <div className="modal-container">
                            <div onClick={handleCancel} className="close-modal">
                                <div className="close-modal-btn">
                                    <CloseIcon fill="#bdbdbd" />
                                </div>
                            </div>
                            <div className="modal-input">
                                <label>Adults</label>
                                <div className='modal-btn-container'>
                                    <Button onClick={DecreaseAdults} disabled={adults === 0}>-</Button>
                                    <span>{adults}</span>
                                    <Button onClick={IncreaseAdults}>+</Button>
                                </div>
                            </div>
                            <div className="modal-input">
                                <label>Children</label>
                                <div className='modal-btn-container'>
                                    <Button onClick={DecreaseChildren} disabled={children === 0}>-</Button>
                                    <span>{children}</span>
                                    <Button onClick={IncreaseChildren}>+</Button>
                                </div>
                            </div>
                            <div className="modal-input">
                                <label>Rooms</label>
                                <div className='modal-btn-container'>
                                    <Button onClick={DecreaseRooms} disabled={rooms === 0}>-</Button>
                                    <span>{rooms}</span>
                                    <Button onClick={IncreaseRooms}>+</Button>
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
