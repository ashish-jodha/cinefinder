function DateSelector({ activeDate, setActiveDate }) {
    const containerStyle = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-4 sm:mt-5 md:mt-6 flex justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 px-1";
    const activeBtn = "px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-indigo-600 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded-md sm:rounded-lg shadow-sm scale-100 transition-all border border-indigo-600";
    const inactiveBtn = "px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm md:text-base lg:text-lg rounded-md sm:rounded-lg shadow-sm transition-all border border-gray-200 cursor-pointer";

    return (
        <div className={containerStyle}>
            <button
                onClick={() => setActiveDate("Today")}
                className={activeDate === "Today" ? activeBtn : inactiveBtn}
            >
                Today
            </button>

            <button
                onClick={() => setActiveDate("Tomorrow")}
                className={activeDate === "Tomorrow" ? activeBtn : inactiveBtn}
            >
                Tomorrow
            </button>

            <button
                onClick={() => setActiveDate("Weekend")}
                className={activeDate === "Weekend" ? activeBtn : inactiveBtn}
            >
                This Weekend
            </button>
        </div>
    );
}

export default DateSelector;