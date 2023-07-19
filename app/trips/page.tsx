import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="please Login" />;
  }

  const reservation = await getReservations({
    userId: currentUser.id,
  });

  if (reservation.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips"
      />
    );
  }
  return <TripsClient reservation={reservation} currentUser={currentUser} />;
};

export default TripsPage;
