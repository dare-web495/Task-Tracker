export default function Header(props) {
    return (
        <div className="header-title">
            <h1>Welcome { props.name }</h1>
        </div>
    );
}