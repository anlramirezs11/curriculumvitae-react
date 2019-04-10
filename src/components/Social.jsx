import React from 'react';
import Styled, {ThemeProvider} from'styled-components';

const SocialStyle = Styled.div`
    margin: 0 auto;
    display: block;    
`;

const SocilaUl = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding:0;
`;

const SocilaLi = Styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = Styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 2em;
`;

const SocialIcon = Styled.i`
    color: ${props => props.theme.color};
    
`;

const colors ={
    facebook:'#3B5998',
    twitter: "#38A1F3",
    linkedin:"#0E76A8",
    github: "#333",
    default: "#000000"
}

const getColor=(name =>{
    return {color: colors[name]|| colors.default }
})

const Social= props =>(
    <SocialStyle>
        {props.social &&
            <SocilaUl>
                {props.social.map((item, index)=>(
                    <SocilaLi key={`Social-${index}`}>
                        <SocialAnchor href={item.url} target="_blank">
                            <ThemeProvider theme={getColor(item.name)}>
                                <SocialIcon className={`fab fa-${item.name}`}/>
                            </ThemeProvider>                            
                        </SocialAnchor>
                    </SocilaLi>
                ))}
            </SocilaUl>

        }
    </SocialStyle>    
);

export default Social;