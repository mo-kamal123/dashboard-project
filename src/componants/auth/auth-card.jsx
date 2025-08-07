const AuthCard = ({ children, title, handleSubmit }) => {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center gap-5 w-full max-w-md sm:w-full md:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl bg-white shadow-xl">
        
        {/* Header */}
        <header className="bg-main w-full py-4 sm:py-6 text-center rounded-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{title}</h1>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 sm:gap-5"
          aria-label={`${title} form`}
        >
          {children}
        </form>
      </div>
    </section>
  );
};

export default AuthCard;
