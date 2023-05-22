import { CloseIcon, SearchIcon } from '../../assets/icons';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import './SearchBox.scss';
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function Search({ stays, cars, attractions }) {
    if (stays) {
        return (
            <form className="home-search">
                <div className="home-search-container">
                    <div className="locate">
                        <span>
                            <SearchIcon fill="#bdbdbd" width="18" height="18" />
                        </span>
                        <input
                            type="text"
                            placeholder="Xung quanh địa điểm hiện tại"
                        />
                        <span>
                            <CloseIcon fill="#bad4f7" width="18" height="18" />
                        </span>
                    </div>
                    <div className="range-time">
                        {/* <div className="time-checkin-box">
                            <label className="time-range-lable">
                                Ngày nhận phòng
                            </label>
                            <input type="text" placeholder="time in" />
                        </div>
                        <div className="time-checkout-box">
                            <label className="time-range-lable">
                                Ngày trả phòng
                            </label>
                            <input type="text" placeholder="time out" />
                        </div> */}
                        <RangePicker
                            placeholder={['Ngày nhận phòng', 'Ngày trả phòng']}
                            className="range-time"
                        />
                    </div>
                </div>
            </form>
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
