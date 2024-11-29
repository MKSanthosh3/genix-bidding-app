import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { toggleTaskStatus } from "../redux/features/tasksSlice";
import { useDispatch } from "react-redux";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filters } = useSelector((state) => state.tasks);

  // Apply shift filtering
  const filteredTasks = tasks.filter((task) =>
    filters.shift === "All" ? true : task.shift === filters.shift
  );

  // Apply sorting
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (filters.sort === "Priority") {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (filters.sort === "Status") {
      return a.status.localeCompare(b.status); // "Completed" > "Pending"
    }
    return 0;
  });

  return (
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
  );
};

export default TaskList;
