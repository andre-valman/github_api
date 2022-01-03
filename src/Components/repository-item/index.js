import React from "react";
import * as S from "./styled";

function RepositoryItem({name, linkToRepo, fullName}) {
    return(
        <S.Wrapper>
            <h2>{name}</h2>
            <h4>full name:</h4>
            <S.WrapperLink href={linkToRepo} target="_blank" rel='noreferrer'>
                {fullName}
            </S.WrapperLink>
        </S.Wrapper>
    )

}

export default RepositoryItem;