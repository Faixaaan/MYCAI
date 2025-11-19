// src/Components/StatsModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { axiosInstance } from "../../api/axios/axios";
import { endpoints } from "../../api/endpoints/endpoints";
import { toast } from "react-toastify";

const StatsModal = ({ 
  open, 
  onClose, 
  title, 
  type,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // ✅ Retrieve data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setUserId(parsed.user_id || "");
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  // Fetch data when modal opens and userId is available
  useEffect(() => {
    if (open && userId) {
      fetchData();
    }
  }, [open, userId]); // Added userId as dependency

  const fetchData = async () => {
    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    setLoading(true);
    try {
      let endpoint = "";
      
      switch (type) {
        case "applied":
          endpoint = `${endpoints.jobs.applied_job}/${userId}`;
          break;
        case "saved":
          endpoint = `${endpoints.jobs.saved_jobs}/${userId}`;
          break;
        case "shortlisted":
          endpoint = `${endpoints.jobs.shortlisted_jobs}/${userId}`;
          break;
        default:
          return;
      }

      const response = await axiosInstance.get(endpoint);

     
      setData(response.data.data || []);
      
    } catch (error) {
      console.error(`Error fetching ${type} jobs:`, error);
      toast.error(`Failed to load ${type} jobs`);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
      case "shortlisted":
        return "success";
      case "pending":
        return "warning";
      case "rejected":
        return "error";
      default:
        return "default";
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" py={4}>
          <CircularProgress />
        </Box>
      );
    }

    if (!data || data.length === 0) {
      return (
        <Box textAlign="center" py={4}>
          <Typography color="textSecondary">
            No {title.toLowerCase()} found
          </Typography>
        </Box>
      );
    }

    return (
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Job Title</strong></TableCell>
              
              <TableCell><strong>Date</strong></TableCell>
              {type === "applied" && <TableCell><strong>Status</strong></TableCell>}
              {type === "shortlisted" && <TableCell><strong>Interview Date</strong></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((job, index) => (
              <TableRow key={job.id || index}>
                <TableCell>{job.title || job.job_title || "N/A"}</TableCell>
               
                <TableCell>
                  {job.applied_date || job.created_at || job.saved_date ? 
                    new Date(job.applied_date || job.created_at || job.saved_date).toLocaleDateString() 
                    : "N/A"}
                </TableCell>
                {type === "applied" && (
                  <TableCell>
                    <Chip 
                      label={job.status || "Pending"} 
                      color={getStatusColor(job.status)}
                      size="small"
                    />
                  </TableCell>
                )}
                {type === "shortlisted" && (
                  <TableCell>
                    {job.interview_date ? 
                      new Date(job.interview_date).toLocaleDateString() 
                      : "Not Scheduled"}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default StatsModal;