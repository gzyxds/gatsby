import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, Card, Section, Grid, GradientText } from '../styles/GlobalStyles';

const Hero = styled.section`
  padding: 8rem 0 6rem;
  text-align: center;
  background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const HeroCTA = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeatureCard = styled(Card)`
  text-align: center;
  height: 100%;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ModelTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 2rem;
  color: white;
  font-size: 1rem;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Hero>
        <div className="container">
          <HeroTitle>
            <GradientText>必定API</GradientText>
          </HeroTitle>
          <HeroSubtitle>
            一个接口，无限模型 - 一站式对接各种大模型，让开发更智能、更高效
          </HeroSubtitle>
          <HeroCTA>
            <Button variant="primary">立即开始使用</Button>
          </HeroCTA>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>核心特性</SectionTitle>
          <Grid>
            <FeatureCard>
              <h3>全覆盖模型支持</h3>
              <p>一键连接所有热门AI模型，ChatGPT、Claude、Gemini、DeepSeek和Qwen 等等，统一格式，随心调用。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>自由访问</h3>
              <p>打破OpenAI魔法禁锢，全球多节点部署，无区域访问限制，随时随地快速的自由接入。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>无缝集成</h3>
              <p>通用OpenAI接口，无需更改代码，只需更换模型名称，即可无缝对接多种不同厂商的模型。</p>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      <Section style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <SectionTitle>
              <GradientText>极速响应，让速度为您见证一切！</GradientText>
            </SectionTitle>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }}>
              使用标准的OpenAI接口协议访问100+模型，不限时间、按量计费、拒绝逆向、极速对话、明细透明，无隐藏消费，在线充值后即可使用所有模型。
            </p>
          </div>
          <Grid columns={4}>
            <FeatureCard>
              <h3>企业级可靠表现</h3>
            </FeatureCard>
            <FeatureCard>
              <h3>高性能基础架构</h3>
            </FeatureCard>
            <FeatureCard>
              <h3>稳定性远高于Azure中转</h3>
            </FeatureCard>
            <FeatureCard>
              <h3>生产环境验证</h3>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>我们的优势</SectionTitle>
          <Grid columns={4}>
            <FeatureCard>
              <h3>经验丰富</h3>
              <p>稳定运营两年多，拥有丰富的运营经验，已服务用户2万+，值得信赖。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>稳定运营</h3>
              <p>采用先进的技术架构，确保API服务的稳定性和高可用性，提供可持续高质量的服务。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>按量付费</h3>
              <p>用多少买多少，余额不过期，用完为止，可再充值，无隐藏消费，价格透明。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>应用支持</h3>
              <p>支持OpenAI官方库、99%的开源聊天应用皆可支持，便捷集成现有项目。</p>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      <Section style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <SectionTitle>支持的热门模型</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)' }}>一键接入100+热门AI模型</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', '更多模型'].map((model) => (
              <ModelTag key={model}>{model}</ModelTag>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>产品优势</SectionTitle>
          <Grid columns={4}>
            <FeatureCard>
              <h3>明细可查</h3>
              <p>统计每次请求消耗明细，价格透明，无隐藏消费，用的放心，随时查看使用状况。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>并发满足</h3>
              <p>默认并发满足大部分用户需求，超高并发需求请联系客服，为您提供定制化服务方案。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>稳定性高</h3>
              <p>日志公开每次模型请求速度，稳定性远高于Azure中转，确保您的应用流畅运行。</p>
            </FeatureCard>
            <FeatureCard>
              <h3>企业级可靠表现</h3>
              <p>高性能基础架构支撑，在多行业生产环境中经受考验，稳定可靠，为您的业务保驾护航。</p>
            </FeatureCard>
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
