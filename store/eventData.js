import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    image: "https://www.ticati.com/img/hotel/10276296s.jpg",
    title: "First meetup",
    date: "21/09/2023",
    time: "06:00 PM",
    location: "UK27, Belgaum",
    description: "This is our first meet",
  },
  {
    image: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1482757335/Domestic%20Hotels/Hotels_Belgaum/Fairfield%20by%20Marriott%20Belagavi/Overview.jpg",
    title: "Second meetup",
    date: "25/09/2023",
    time: "06:00 PM",
    location: "Fairfield Marriott, Belgaum",
    description: "This is our second meet",
  },
];

const eventData = createSlice({
  name: "eventData",
  initialState: data,
  reducers: {
    addItem(state, actions) {
      state.data.push(actions.payload);
    },
  },
});

export const eventActions = eventData.actions;
export default eventData.reducer;
