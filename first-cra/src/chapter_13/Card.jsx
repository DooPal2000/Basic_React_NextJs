function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div style={{
            backgroundColor: backgroundColor || "white",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}
export default Card;