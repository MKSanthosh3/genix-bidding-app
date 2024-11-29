import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskStatus } from "../redux/features/tasksSlice";

const TaskDashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    source: "",
    shift: "",
    status: "Pending",
    priority: "",
  });

  const [filters, setFilters] = useState({
    shift: "All",
    sort: "Priority",
  });

  const [open, setOpen] = useState(false);

  // Handle popup open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a task
  const handleFormSubmit = () => {
    if (
      formData.title &&
      formData.details &&
      formData.source &&
      formData.shift &&
      formData.priority
    ) {
      dispatch(
        addTask({
          ...formData,
          id: Date.now(),
        })
      );
      setFormData({
        title: "",
        details: "",
        source: "",
        shift: "",
        status: "Pending",
        priority: "",
      });
      handleClose();
    } else {
      alert("Please fill all fields!");
    }
  };

  // Handle filter and sort changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters
  const filteredTasks = tasks.filter((task) =>
    filters.shift === "All" ? true : task.shift === filters.shift
  );

  // Apply sorting
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (filters.sort === "Priority") {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (filters.sort === "Status") {
      return a.status.localeCompare(b.status); // Sort by status
    }
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Task Dashboard
      </Typography>

      {/* Filters Section */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="shift-filter-label">Shift</InputLabel>
          <Select
            labelId="shift-filter-label"
            name="shift"
            value={filters.shift}
            onChange={handleFilterChange}
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
            name="sort"
            value={filters.sort}
            onChange={handleFilterChange}
          >
            <MenuItem value="Priority">Priority</MenuItem>
            <MenuItem value="Status">Status</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Add Task Button */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Task
      </Button>

      {/* Task List */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h6">{task.title}</Typography>
                <Typography>Details: {task.details}</Typography>
                <Typography>Source: {task.source}</Typography>
                <Typography>Shift: {task.shift}</Typography>
                <Typography>Status: {task.status}</Typography>
                <Typography>Priority: {task.priority}</Typography>
                <Button
                  variant="outlined"
                  color={task.status === "Pending" ? "secondary" : "success"}
                  onClick={() => dispatch(toggleTaskStatus(task.id))}
                  style={{ marginTop: "10px" }}
                >
                  Mark as {task.status === "Pending" ? "Completed" : "Pending"}
                </Button>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" style={{ width: "100%" }}>
            No tasks found.
          </Typography>
        )}
      </Grid>

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Source"
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="shift-select-label">Shift</InputLabel>
            <Select
              labelId="shift-select-label"
              name="shift"
              value={formData.shift}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="Morning">Morning</MenuItem>
              <MenuItem value="Afternoon">Afternoon</MenuItem>
              <MenuItem value="Night">Night</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="priority-select-label">Priority</InputLabel>
            <Select
              labelId="priority-select-label"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskDashboard;
