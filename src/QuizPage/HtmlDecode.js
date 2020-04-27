const htmlDecode = (input) => {
    return input.replace(/&#039;/g, "'")
                .replace(/&quot;/g, "\"")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">");
}

export default htmlDecode;