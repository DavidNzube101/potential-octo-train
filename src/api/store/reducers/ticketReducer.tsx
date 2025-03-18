import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  departmentDataGet,
  priorityDataGet,
  ticketDataGet,
  addTicket,
  messageDataGet,
} from "../action/ticketAction";
import { TicketInterface } from "../../interface/ticketInterface";

const initialState: TicketInterface = {
  ticketData: [],
  priorityData: [],
  departmentData: [],
  messageData: [],
  loading: false,
  success: false,
  statusCode: null,
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get ticketData
    builder.addCase(ticketDataGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      ticketDataGet.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.ticketData = action.payload;
        state.statusCode = action.payload.status; 
        state.success = true;
      }
    );
    builder.addCase(ticketDataGet.rejected, (state) => {
      state.statusCode = action.payload?.status || 500; 
      state.loading = false;
      state.success = false;
    });

    //get messageData
    builder.addCase(messageDataGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      messageDataGet.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.messageData = action.payload;
        state.success = true;
      }
    );
    builder.addCase(messageDataGet.rejected, (state) => {
      state.loading = false;
      state.success = false;
    });

    //get priority
    builder.addCase(priorityDataGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      priorityDataGet.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.priorityData = action.payload;
        state.success = true;
      }
    );
    builder.addCase(priorityDataGet.rejected, (state) => {
      state.loading = false;
      state.success = false;
    });

    //get Department
    builder.addCase(departmentDataGet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      departmentDataGet.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.departmentData = action.payload;
        state.success = true;
      }
    );

    //get messgae
    builder.addCase(addTicket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addTicket.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.success = true;
      }
    );
  },
});

export default ticketSlice.reducer;
