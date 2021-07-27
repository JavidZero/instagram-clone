import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

export const UserAvatar = styled(Avatar)`
    width: ${({size})=>size}px !important;
    height: ${({size}) => size}px !important;
    cursor: pointer;
`;

export const BlueButton = styled.button`
    background-color: transparent;
    color: rgb(0, 149, 246);
    border: none;
    outline: none;
    padding: 2px 4px;
    font-weight: 600;
    font-size: 14px;
`;

export const BlackButton = styled.button`
    background-color: transparent;
    color: rgba(0, 0, 0, .9);
    border: none;
    outline: none;
    padding: 2px 4px;
    font-weight: 600;
    font-size: 14px;
`
;