const config = {
  baseUrl: 'http://apistaging.ticketsimply.com​',
  apikey: 'TSAPIWAYBUS*20',
  login: 'auth/serviceLoginAuth',
  createProfile:'auth/createUser',
  profileByUserId: 'auth/',
  updateProfile:'auth/update/',
  resetPassword: 'auth/resetpassword',
  logOut: 'auth/logout',
  allCityList: '/gds/api/cities.json',
  scheduleBusList: 'bus/route',
  scheduleTrip: 'bus/trip',
  bookTikcet:'ticket/bookTickets',
  ticketBookingList:'ticket/',
  ticketCancelList:'ticket/cancel/',
  cancelTicket:'ticket/cancelTickets/'
}

export default config;
