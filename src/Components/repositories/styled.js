import styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 12px;
    width:50%;
`;
WrapperTabs.tabsRole = "Tabs";

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;

`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;

    &:focus{
        outline: none;
    }
    &.is-selected{
        box-shadow: 3px 3px 3px black;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    
    padding: 8px;
    border: 1px solid "#ccc";
    display: none;

    &.is-selected{
        display:block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 200px;
    height: 100px;

`;