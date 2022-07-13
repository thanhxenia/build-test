export const HeaderComponent = (props: HeaderProps) => {
    const body = (
        <div className="o-header">
            <h1>{props.title}</h1>
        </div>
    );

    return body;
};

interface HeaderProps {
	title: string;
}