
function CopyButton({ text }) {
    const handleCopy = () => {
        const copyText = typeof text === "string" ? text : JSON.stringify(text, null, 2);
        navigator.clipboard.writeText(copyText)
            .then(() => alert("Copied to clipboard!"))
            .catch((err) => alert("Failed to copy: " + err.message));
    };

    return (
        <button
            onClick={handleCopy}
            style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Copy to Clipboard
        </button>
    );
}

export default CopyButton;
