import {CodeBlock,} from "react-code-blocks";
import "./codeBlockCss.css"

interface CodeBlockComponentProps {
    code: string
    language: string
    showLineNumbers?: boolean
}

export const CodeBlockComponent = ({code, language, showLineNumbers = false}:CodeBlockComponentProps) => {
    return (

        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
        />

    )
}

