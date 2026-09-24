function PropsExample() {
    return (
        <>
            <h1>From parent</h1>

            <Son>
                <p> This was written in the Parent Component</p>
                <p> Passing information from parent to child component is </p>
            </Son>
            <Daughter>
                <p> This was written in the Parent Component</p>
                <p> Passing information from parent to child component is </p>
            </Daughter>

        </>
    )
}
export default PropsExample

function Son(props) {
    return (
        <>
            <p>i am son </p>
            {props.children}
        </>
    )
}

function Daughter(props) {
    return (
        <>
            <p>i am daughter </p>
            {props.children}
        </>
    )
}