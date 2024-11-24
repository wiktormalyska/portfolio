import styled from "styled-components";

export const IconLinkToProfile = (className: string, redirectLink: string, name:string) => {
    return (
        <IconsWrapper>
            <Icon className={"bi "+ className}></Icon>
            <a href={redirectLink}>{name}</a>
        </IconsWrapper>
    )

}

const IconsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.25rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
`

const Icon = styled.i`
    font-size: 1.5rem;
`