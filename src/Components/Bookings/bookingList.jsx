import React from "react";
import { Link } from 'react-router-dom'

const BookingList = ({bookings}) => {
    return (
        <div>
            { bookings && bookings.map(booking => {
                if (booking.userid === sessionStorage.getItem('uid') ) {
                    return (
                        <Link to={'/booking/' + booking.id } key={booking.id} >
                            <div className="mt-3" >
                                <h5>{booking.createdAt.toDate().toString().slice(0,15)}</h5>
                            </div>
                        </Link>
                    )
                }
                return null
            })}
        </div>
    )
}

export default BookingList;