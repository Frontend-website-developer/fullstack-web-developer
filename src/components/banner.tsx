import ProfileCard from "./HangingCard/index";
import Introduction from "./introduction";

export default function Banner(){
    return(
        <div className="md:flex grid md:grid-cols-2 gap-[30px]">
            <div>
                <ProfileCard />
            </div>
            <div>
                <Introduction />
            </div>    
        </div>
    )
}