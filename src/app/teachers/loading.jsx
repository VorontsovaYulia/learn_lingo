import BeatLoader from "react-spinners/BeatLoader";

const override = {
    display: "block",
    margin: "0 auto",
};

export default function LoadingTeachers() {
    return <BeatLoader
            color='#9FBAAE'
            size={15}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
    />
};