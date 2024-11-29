import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShiftFilter, setSortOrder } from "../redux/features/tasksSlice";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const TaskFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.tasks);

  const handleShiftFilterChange = (event) => {
    dispatch(setShiftFilter(event.target.value));
  };

  const handleSortOrderChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="shift-filter-label">Shift</InputLabel>
        <Select
          labelId="shift-filter-label"
          value={filters.shift}
          onChange={handleShiftFilterChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Morning">Morning</MenuItem>
          <MenuItem value="Afternoon">Afternoon</MenuItem>
          <MenuItem value="Night">Night</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="sort-order-label">Sort By</InputLabel>
        <Select
          labelId="sort-order-label"
          value={filters.sort}
          onChange={handleSortOrderChange}
        >
          <MenuItem value="Priority">Priority</MenuItem>
          <MenuItem value="Status">Status</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskFilters;
