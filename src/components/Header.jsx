export default function Header(props) {
    return (
        <div className="header-title">
            <h1 className="header-name">Welcome { props.name }</h1>
        </div>
    );
}