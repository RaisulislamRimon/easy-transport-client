import React from 'react';
import { FaArchive, FaCreditCard, FaRegHourglass } from "react-icons/fa";
const LeaveModal = ({ onChildData }) => {

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        onChildData(date, time)
    }
    return (
        <div>
            <input type="checkbox" id="leaveModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="leaveModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-black">When do you want to be picked up?</h3>
                    <form onSubmit={handleForm}>
                        <input type="date" name="date" className="input input-bordered w-full  mt-4" />
                        <div className="form-control w-full  mt-5">
                            <select name='time' className="select select-bordered">
                                <option disabled selected>Select One</option>
                                <option>08.00 AM</option>
                                <option>08.30 AM</option>
                                <option>09.00 AM</option>
                                <option>09.30 AM</option>
                                <option>10.00 AM</option>
                                <option>10.30 AM</option>
                                <option>11.00 AM</option>
                                <option>11.30 AM</option>
                                <option>3.00 PM</option>
                                <option>3.30 PM</option>
                                <option>4.30 PM</option>
                                <option>5.30 PM</option>
                                <option>6.30 PM</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div>
                                <span><FaArchive></FaArchive></span>
                            </div>
                            <div>
                                <p className=' font-semibold text-black'>Choose your pickup time up to 30 days in advance</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div>
                                <FaRegHourglass></FaRegHourglass>

                            </div>
                            <div>
                                <p className='font-semibold text-black'>Extra wait time included to meet your ride</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mt-4'>
                            <div>
                                <span><FaCreditCard></FaCreditCard></span>
                            </div>
                            <div>
                                <p className=' font-semibold text-black'>Cancel at no charge up to 60 minutes in advance</p>
                            </div>
                        </div>
                        <input type="submit" className='btn btn-accent  w-full  mt-5' value="Confirm" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default LeaveModal;