export const handleServerError = (res) => {
  return res.status(500).json({ message: "Internal Server Error" });
};

export const handleClientError = (res, status, message) => {
  return res.status(status).json({ message });
};
