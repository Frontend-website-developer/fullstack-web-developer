const Facts = () => {
    return(
        <div className="mt-[80px]">
            <h2 className="text-center text-[32px] font-semibold mb-2">My Achievements</h2>
            <div className="grid md:grid-cols-4 border items-center rounded-[12px] text-[#fff] my-5 bg-gradient-to-r from-[#038980] to-[#04a399] border-[#038980]">
                <div className="p-6">
                    <h3 className="text-[30px] font-[600]">12+</h3>
                    <p className="text-[18px]">Years Of Experience</p>
                </div>
                <div className="p-6 border-l border-l-[#fff]">
                    <h3 className="text-[30px] font-[600]">10+</h3>
                    <p className="text-[18px]">Clients</p>
                </div>
                <div className="p-6 border-l border-l-[#fff]">
                    <h3 className="text-[30px] font-[600]">100+</h3>
                    <p className="text-[18px]">Completed Projects</p>
                </div>
                <div className="p-6 border-l border-l-[#fff]">
                    <h3 className="text-[30px] font-[600]">20+</h3>
                    <p className="text-[18px]">Achievements</p>
                </div>

            </div>
        </div>
    )
}

export default Facts;