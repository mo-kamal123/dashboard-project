// This component is used to create a card for authentication purposes, such as login or forget-pass or reset-pass.
const AuthCard = ({ children, title, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 p-5 h-full w-full rounded-2xl bg-white">
      <div className="bg-main w-full py-10 text-center text-3xl font-bold rounded-2xl text-white ">
        <h1>{title}</h1>
      </div>
      {/* Form for authentication */}
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-full">
        {children}
      </form>
    </div>
  );
};

export default AuthCard;
