// import { Booking } from "../db/bookingModel.js";
// import { Bus } from "../db/bus.js";
// import { sequelize } from "../db/dbConnectionsModel.js"; // Adjust path as per your project structure
// import { getDateTimeFromDate, getDayFromDate } from "../datetime.js";

// export const getUserBookings = async (req, res, next) => {
//   try {
//     const bookings = await Booking.findAll({
//       where: { registerId: req.user.id },
//       include: [{ model: Bus, as: 'bus' }],
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const getBusBookings = async (req, res, next) => {
//   try {
//     const { busId } = req.params;

//     const bookings = await Booking.findAll({
//       where: { busId },
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const search = async (req, res, next) => {
//   try {
//     const { from, to, date } = req.body;
//     const day = getDayFromDate(date);

//     let buses = await Bus.findAll({
//       where: {
//         runsOnDays: sequelize.literal(`ARRAY['${day}']::varchar[] && "Bus"."runsOnDays"`),
//         [sequelize.and]: [
//           sequelize.literal(`ARRAY['${from}']::varchar[] <@ "Bus"."busRoute"`),
//           sequelize.literal(`ARRAY['${to}']::varchar[] <@ "Bus"."busRoute"`),
//         ],
//       },
//       order: [['fare', 'ASC']],
//     });

//     // Filter buses that have the from before to in route
//     buses = buses.filter((bus) => {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);
//       return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
//     });

//     for (let bus of buses) {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);

//       bus.from = bus.busRoute[fromIndex];
//       bus.to = bus.busRoute[toIndex];
//       bus.departure = bus.busRouteTimes[fromIndex];
//       bus.arrival = bus.busRouteTimes[toIndex];
//       bus.fare = bus.busRouteFares[toIndex] - bus.busRouteFares[fromIndex];

//       const bookings = await Booking.findAll({
//         where: {
//           busId: bus.busId,
//           date: getDateTimeFromDate(date),
//         },
//       });

//       bus.bookings = bookings;
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Buses fetched successfully.",
//       data: {
//         buses,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const create = async (req, res, next) => {
//   try {
//     const { busId, from, to, date, seatNumbers, fare } = req.body;

//     const newBooking = await Booking.create({
//       registerId: req.user.id,
//       busId,
//       from,
//       to,
//       date: getDateTimeFromDate(date),
//       seatNumbers,
//       fare,
//     });

//     // Update bus with new booking
//     const bus = await Bus.findByPk(busId);
//     if (!bus) {
//       throw new Error(`Bus with id ${busId} not found`);
//     }
//     await bus.addBooking(newBooking);

//     return res.status(200).json({
//       success: true,
//       message: "Booking created successfully.",
//       data: {
//         booking: newBooking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const cancel = async (req, res, next) => {
//   try {
//     const { bookingId } = req.params;

//     const booking = await Booking.findByPk(bookingId);
//     if (!booking) {
//       return res.status(404).json({ error: "Booking not found" });
//     }

//     booking.cancelled = true;
//     await booking.save();

//     return res.status(200).json({
//       success: true,
//       message: "Booking cancelled successfully.",
//       data: {
//         booking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// import { Booking } from "../db/bookingModel.js";
// import { Bus } from "../db/bus.js";
// import { sequelize } from "../db/dbConnectionsModel.js"; // Adjust path as per your project structure
// import { getDateTimeFromDate, getDayFromDate } from "../utils/datetime.js";

// export const getUserBookings = async (req, res, next) => {
//   try {
//     const bookings = await Booking.findAll({
//       where: { registerId: req.user.id },
//       include: [{ model: Bus, as: 'bus' }],
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const getBusBookings = async (req, res, next) => {
//   try {
//     const { busId } = req.params;

//     const bookings = await Booking.findAll({
//       where: { busId },
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const search = async (req, res, next) => {
//   try {
//     const { from, to, date } = req.body;
//     const day = getDayFromDate(date);

//     let buses = await Bus.findAll({
//       where: {
//         runsOnDays: sequelize.literal(`ARRAY['${day}']::varchar[] && "Bus"."runsOnDays"`),
//         [sequelize.and]: [
//           sequelize.literal(`ARRAY['${from}']::varchar[] <@ "Bus"."busRoute"`),
//           sequelize.literal(`ARRAY['${to}']::varchar[] <@ "Bus"."busRoute"`),
//         ],
//       },
//       order: [['fare', 'ASC']],
//     });

//     // Filter buses that have the from before to in route
//     buses = buses.filter((bus) => {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);
//       return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
//     });

//     for (let bus of buses) {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);

//       bus.from = bus.busRoute[fromIndex];
//       bus.to = bus.busRoute[toIndex];
//       bus.departure = bus.busRouteTimes[fromIndex];
//       bus.arrival = bus.busRouteTimes[toIndex];
//       bus.fare = bus.busRouteFares[toIndex] - bus.busRouteFares[fromIndex];

//       const bookings = await Booking.findAll({
//         where: {
//           busId: bus.busId,
//           date: getDateTimeFromDate(date),
//         },
//       });

//       bus.bookings = bookings;
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Buses fetched successfully.",
//       data: {
//         buses,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const create = async (req, res, next) => {
//   try {
//     const { busId, from, to, date, seatNumbers, fare } = req.body;

//     const newBooking = await Booking.create({
//       registerId: req.user.id,
//       busId,
//       from,
//       to,
//       date: getDateTimeFromDate(date),
//       seatNumbers,
//       fare,
//     });

//     // Update bus with new booking
//     const bus = await Bus.findByPk(busId);
//     if (!bus) {
//       throw new Error(`Bus with id ${busId} not found`);
//     }
//     await bus.addBooking(newBooking);

//     return res.status(200).json({
//       success: true,
//       message: "Booking created successfully.",
//       data: {
//         booking: newBooking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// export const cancel = async (req, res, next) => {
//   try {
//     const { bookingId } = req.params;

//     const booking = await Booking.findByPk(bookingId);
//     if (!booking) {
//       return res.status(404).json({ error: "Booking not found" });
//     }

//     booking.cancelled = true;
//     await booking.save();

//     return res.status(200).json({
//       success: true,
//       message: "Booking cancelled successfully.",
//       data: {
//         booking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };


// const { Booking } = require('../db/bookingModel.js');
// const { Bus } = require('../db/bus.js');
// const { sequelize } = require('../db/dbConnectionsModel.js'); // Adjust path as per your project structure
// const { getDateTimeFromDate, getDayFromDate } = require('../datetime');

// const getUserBookings = async (req, res, next) => {
//   try {
//     const bookings = await Booking.findAll({
//       where: { registerId: req.user.id },
//       include: [{ model: Bus, as: 'bus' }],
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const getBusBookings = async (req, res, next) => {
//   try {
//     const { busId } = req.params;

//     const bookings = await Booking.findAll({
//       where: { busId },
//       order: [['createdAt', 'DESC']],
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Bookings fetched successfully.",
//       data: {
//         bookings,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const search = async (req, res, next) => {
//   try {
//     const { from, to, date } = req.body;
//     const day = getDayFromDate(date);

//     let buses = await Bus.findAll({
//       where: {
//         runsOnDays: sequelize.literal(`ARRAY['${day}']::varchar[] && "Bus"."runsOnDays"`),
//         [sequelize.and]: [
//           sequelize.literal(`ARRAY['${from}']::varchar[] <@ "Bus"."busRoute"`),
//           sequelize.literal(`ARRAY['${to}']::varchar[] <@ "Bus"."busRoute"`),
//         ],
//       },
//       order: [['fare', 'ASC']],
//     });

//     // Filter buses that have the from before to in route
//     buses = buses.filter((bus) => {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);
//       return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
//     });

//     for (let bus of buses) {
//       const fromIndex = bus.busRoute.indexOf(from);
//       const toIndex = bus.busRoute.indexOf(to);

//       bus.from = bus.busRoute[fromIndex];
//       bus.to = bus.busRoute[toIndex];
//       bus.departure = bus.busRouteTimes[fromIndex];
//       bus.arrival = bus.busRouteTimes[toIndex];
//       bus.fare = bus.busRouteFares[toIndex] - bus.busRouteFares[fromIndex];

//       const bookings = await Booking.findAll({
//         where: {
//           busId: bus.busId,
//           date: getDateTimeFromDate(date),
//         },
//       });

//       bus.bookings = bookings;
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Buses fetched successfully.",
//       data: {
//         buses,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const create = async (req, res, next) => {
//   try {
//     const { busId, from, to, date, seatNumbers, fare } = req.body;

//     const newBooking = await Booking.create({
//       registerId: req.user.id,
//       busId,
//       from,
//       to,
//       date: getDateTimeFromDate(date),
//       seatNumbers,
//       fare,
//     });

//     // Update bus with new booking
//     const bus = await Bus.findByPk(busId);
//     if (!bus) {
//       throw new Error(`Bus with id ${busId} not found`);
//     }
//     await bus.addBooking(newBooking);

//     return res.status(200).json({
//       success: true,
//       message: "Booking created successfully.",
//       data: {
//         booking: newBooking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const cancel = async (req, res, next) => {
//   try {
//     const { bookingId } = req.params;

//     const booking = await Booking.findByPk(bookingId);
//     if (!booking) {
//       return res.status(404).json({ error: "Booking not found" });
//     }

//     booking.cancelled = true;
//     await booking.save();

//     return res.status(200).json({
//       success: true,
//       message: "Booking cancelled successfully.",
//       data: {
//         booking,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = {
//   getUserBookings,
//   getBusBookings,
//   search,
//   create,
//   cancel,
// };


const { Booking } = require('../db/bookingModel');
const { Op } = require('sequelize');

// Create a new booking
const createBooking = async (req, res) => {
  const {
    customer_name,
    phone_number,
    email,
    address,
    bus_id,
    selected_seats,
    passenger_details,
    discount_amount,
    gst,
    cart_total,
    route,
    bus_type
  } = req.body;

  try {
    // Create the booking record
    const newBooking = await Booking.create({
      customer_name,
      phone_number,
      email,
      address,
      bus_id,
      selected_seats,
      passenger_details,
      discount_amount,
      gst,
      cart_total,
      route,
      bus_type
    });

    // Send success response with the created booking
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Get all bookings or search by query parameters
const getAllBookings = async (req, res) => {
  try {
    let bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById
};
