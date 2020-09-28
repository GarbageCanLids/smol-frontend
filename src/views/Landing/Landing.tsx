import React from 'react'
import styled from 'styled-components'
import smol from '../../assets/img/smol.png'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

const Landing: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={smol} height={120} />}
        title="big tings. smol pkg"
        subtitle="- smol ting 2020 "
      />
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>WebApp Coming Soon!</b><br></br> Stay posted in our telgram for updates.
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
          color: "#5a3444"
        }}
      >
        <Button text="Telegram" onClick={() => window.open("https://t.me/smolpub")} variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Landing;