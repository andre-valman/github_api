import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        margin-right: 8px;
        padding: 8px;
        font-weight: 500px;
    }

    button{
        background-color: #91e0ff;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            background-color: #86cbe0;
            box-shadow: 3px 2px 10px #0028cc;
        }
    }

    span{
        font-weight: bold;
        color: #fff;
    }

    
`;