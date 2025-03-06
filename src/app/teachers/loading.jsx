import BeatLoader from "react-spinners/BeatLoader";

export default function LoadingHome() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <BeatLoader
                color="#9FBAAE"
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
