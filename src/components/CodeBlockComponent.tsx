import {CodeBlock,} from "react-code-blocks";
import styled from "styled-components";
import "./codeBlockCss.css"

interface CodeBlockComponentProps {
    code: string
    language: string
    showLineNumbers?: boolean
}

export const CodeBlockComponent = ({code, language, showLineNumbers = false}:CodeBlockComponentProps) => {
    return (
        <Wrapper id={"aboutMeWrapper"}>
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
        />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`