"use client";

const Error = ({
  error,
  reset,
}: {
  error: {
    message: string;
  };
  reset: () => void;
}) => {
  return (
    <div>
      <h1>Error</h1>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Thử lại</button>
    </div>
  );
};

export default Error;
