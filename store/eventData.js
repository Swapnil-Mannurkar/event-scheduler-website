import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "1",
    image: "https://www.ticati.com/img/hotel/10276296s.jpg",
    title: "First meetup",
    date: "2023-09-22",
    time: "18:00",
    location: "UK27, Belgaum",
    description: "This is our first meet",
  },
  {
    id: "2",
    image:
      "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1482757335/Domestic%20Hotels/Hotels_Belgaum/Fairfield%20by%20Marriott%20Belagavi/Overview.jpg",
    title: "Second meetup",
    date: "2023-09-24",
    time: "18:00",
    location: "Fairfield Marriott, Belgaum",
    description: "This is our second meet",
  },
];

const eventData = createSlice({
  name: "eventData",
  initialState: data,
  reducers: {
    addItem(state, actions) {
      state.push(actions.payload);
    },
    deleteItem(state, actions) {
      return state.filter((event) => event.id !== actions.payload);
    },
    editItem(state, actions) {
      const updatedEvent = actions.payload;
      state.map((event) => {
        if (event.id === updatedEvent.id) {
          event.title = updatedEvent.title;
          event.image = updatedEvent.image;
          event.date = updatedEvent.date;
          event.time = updatedEvent.time;
          event.location = updatedEvent.location;
          event.description = updatedEvent.description;
        }
      });
    },
  },
});

export const eventActions = eventData.actions;
export default eventData.reducer;
