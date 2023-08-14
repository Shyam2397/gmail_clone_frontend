import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  return (
    <div
      style={openDrawer ? { marginLeft: 250, width: "75%" } : { width: "100%" }}
    >
      ViewEmail
    </div>
  );
};

export default ViewEmail;
