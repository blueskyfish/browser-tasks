import './ContentBox.css';

export type ContentBoxProps = {
    label: string;
    content: string;
};

export default function ContentBox({label, content}: ContentBoxProps) {
    const html = content.split('\n').join('<br/>');
    return (
        <div className="content-box">
            <p className="label">{label}</p>
            <p className="text" dangerouslySetInnerHTML={{ __html: html}}></p>
        </div>
    );
}