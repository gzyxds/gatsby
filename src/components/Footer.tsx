import React from 'react';
import styled from 'styled-components';
import { GradientText } from '../styles/GlobalStyles';

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 0 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        transition: color 0.2s ease;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(102, 126, 234, 0.3);
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3><GradientText>必定API</GradientText></h3>
            <p>
              一个接口，无限模型 - 一站式对接各种大模型，让开发更智能、更高效。
            </p>
            <SocialLinks>
              {/* Social links placeholders */}
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>产品</h3>
            <ul>
              <li><a href="#">价格</a></li>
              <li><a href="#">文档</a></li>
              <li><a href="#">模型列表</a></li>
              <li><a href="#">系统状态</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>支持</h3>
            <ul>
              <li><a href="#">联系客服</a></li>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">社区</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>法律</h3>
            <ul>
              <li><a href="#">隐私政策</a></li>
              <li><a href="#">服务条款</a></li>
            </ul>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} 必定API. All rights reserved.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
