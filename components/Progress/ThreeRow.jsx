import Circle from './circle';
import ConnectingLine from './ConnectingLine';

function ThreeRow({ data = [], delaystart }) {
    if (!Array.isArray(data)) {
        return "Invalid data format";
    }


    return (
        <div className="flex items-center">
            {data[0] && (
                <>
                    <Circle topval={data[0].presentage} level={data[0].level} desc={data[0].desc} />
                    {data[1] && <ConnectingLine delay={delaystart} />}
                </>
            )}

            {data[1] && (
                <>
                    <Circle topval={data[1].presentage} level={data[1].level} desc={data[1].desc} />
                    {data[2] && <ConnectingLine delay={delaystart + 1} />}
                </>
            )}

            {data[2] && (
                <Circle topval={data[2].presentage} level={data[2].level} desc={data[2].desc} />
            )}
        </div>
    );
}

export default ThreeRow;
