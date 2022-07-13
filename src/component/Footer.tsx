export const FooterComponent = (props: FooterProps) => {
    const body = (
        <div className="o-footer">
            <h1>{props.title}</h1>
            <p>{props.copyright}</p>
        </div>
    );

    return body;
};

interface FooterProps {
	title: string;
    copyright: string;
}