export const Notification = ({ successMessage, errorMessage }) => {
  return successMessage != null || errorMessage != null ? (
    <div className={successMessage ? "success" : "error"}>
      {successMessage || errorMessage}
    </div>
  ) : null;
};
