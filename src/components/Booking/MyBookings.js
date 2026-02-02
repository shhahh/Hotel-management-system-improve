import React, { useState, useEffect } from "react"; 
import { onValue, ref, remove } from "firebase/database";
import { Table, Container, Row, Col, Card } from "react-bootstrap"; 
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../../config/firebase-config";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import styled from "styled-components";

// Styled component for status colors
const StatusTD = styled.td`
  font-weight: bold;
  color: ${(props) => {
    if (props.type === "Pending") return "#007bff"; 
    if (props.type === "Accepted") return "#28a745"; 
    if (props.type === "Rejected") return "#dc3545"; 
    return "inherit";
  }};
`;

  const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useUserAuth();

  // Data Fetching Logic
  useEffect(() => {
    if (!user?.email) return;

    const bookingRef = ref(db, "/bookings/");
    const unsubscribe = onValue(bookingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Object ko array mein convert karke filter kar rahe hain
        const filteredBookings = Object.values(data).filter(
          (item) => item.refID === user.email
        );
        setBookings(filteredBookings);
      } else {
        setBookings([]);
      }
    });

    return () => unsubscribe(); 
  }, [user?.email]);

  // Delete Function (Jo aapke code mein miss ho gaya tha)
  const deleteBooking = (booking) => {
    if(window.confirm("Are you sure you want to delete this booking?")) {
        // Firebase path: bookings/CNIC_NUMBER (Aapne cnic ko ID mana hai)
        remove(ref(db, `/bookings/${booking.cnic}`));
    }
  };

  // Main UI Rendering
  return (
    <Container style={{ marginTop: "100px" }}>
      <h2 className="mb-4 text-center">My Reservations</h2>
      
      {bookings.length > 0 ? (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="bg-dark text-white">
            <tr>
              <th>Room Type</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Guests</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="text-capitalize">{booking.type}</td>
                <td>{booking.startDate}</td>
                <td>{booking.endDate}</td>
                <td>{booking.persons}</td>
                <td>₹{booking.totalPrice}</td>
                <StatusTD type={booking.status}>{booking.status}</StatusTD>
                <td className="text-center">
                  <AiOutlineDelete
                    color="red"
                    size={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteBooking(booking)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Row>
          <Col md={6} className="mx-auto text-center">
            <Card className="p-5 shadow border-0">
              <h3>No Bookings Found</h3>
              <p className="text-muted">You haven't made any reservations yet.</p>
              <Link to="/rooms" className="btn btn-primary mt-3">
                Book a Room Now
              </Link>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MyBookings;