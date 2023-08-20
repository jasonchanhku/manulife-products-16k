import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the ManuCentury product?",
        value: "What is the ManuCentury product?"
    },
    { text: "Help me summarize the key benefits of ManuCentury.", value: "Help me summarize the key benefits of ManuCentury." },
    { text: "Recommend me some Manulife products for a 30 year old working professional.", value: "Recommend me some Manulife products for a 30 year old working professional." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
