import Circle from './circle';
import ConnectingLine from './ConnectingLine';

function ThreeRow({ data = [], delaystart }) {
    if (!Array.isArray(data)) {
        return "Invalid data format";
    }
    // // Helper function to validate a single data object
    // const isValidData = (item) => {
    //     return (
    //         item &&
    //         typeof item === "object" &&
    //         "presentage" in item &&
    //         "level" in item &&
    //         "desc" in item &&
    //         "status" in item &&
    //         !isNaN(Number(item.presentage)) // Ensure presentage is a number or numeric string
    //     );
    // };

    // // Check if all data items are valid
    // const allValid = data.every(isValidData);

    // if (!allValid) {
    //     return <div>Invalid data provided</div>;
    // }

    return (
        <div className="flex items-center">
            {data[0] && (
                <>
                    <Circle
                        topval={data[0].presentage}
                        level={data[0].level}
                        desc={data[0].desc}
                        type={
                            data[0].status === "Locked"
                                ? "Locked"
                                : parseInt(data[0].presentage) === 100
                                    ? "Complete"
                                    : parseInt(data[0].presentage) < 100
                                        ? "In-Complete"
                                        : ""
                        }
                    />
                    {data[1] && <ConnectingLine delay={delaystart} />}
                </>
            )}

            {data[1] && (
                <>
                    <Circle
                        topval={data[1].presentage}
                        level={data[1].level}
                        desc={data[1].desc}
                        type={
                            data[1].status === "Locked"
                                ? "Locked"
                                : parseInt(data[1].presentage) === 100
                                    ? "Complete"
                                    : parseInt(data[1].presentage) < 100
                                        ? "In-Complete"
                                        : ""
                        }
                    />
                    {data[2] && <ConnectingLine delay={delaystart + 1} />}
                </>
            )}

            {data[2] && (
                <Circle
                    topval={data[2].presentage}
                    level={data[2].level}
                    desc={data[2].desc}
                    type={
                        data[2].status === "Locked"
                            ? "Locked"
                            : parseInt(data[2].presentage) === 100
                                ? "Complete"
                                : parseInt(data[2].presentage) < 100
                                    ? "In-Complete"
                                    : ""
                    }
                />
            )}
        </div>
    );
}

export default ThreeRow;
