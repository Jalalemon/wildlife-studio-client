const { useEffect } = require("react")

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}- Wildlise Studio`;

    },[title])
}
export default UseTitle;