import { Toaster } from "react-hot-toast";

const Natification = ({ children }) => {
  return (
    <>
      <Toaster
        position="top-right" // Set position to top-right
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 9999999,
            marginTop: '150px', // Add top margin for 150px offset
          },
        }}
      />
      {children}
    </>
  );
};

export default Natification;

