import Posts from "./posts";
import Stories from "./stories";

function Feed()
{
    return(
        <>
            <div>
                <Stories/>
            </div>
            <div>
                <Posts/>
            </div>
        </>
    )
}

export default Feed;

