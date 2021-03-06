import React, { Component } from 'react'
import CreditsPanel from './modal/CreditsPanel'
import T from 'i18n-react'
import styled from 'styled-components'

const FooterText = styled.div`
  textalign: 'center';
  ${props => (props.theme.light ? '' : 'color: #7193ae;')};
`

const FooterVersion = styled.div`
  ${props => (props.theme.light ? '' : 'color: #7193ae;')};
`

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(item) {
    return () => this.setState({ [item]: !this.state[item] })
  }

  render() {
    return (
      <div className="container footer">
        <CreditsPanel
          toggle={this.toggle('credits')}
          open={this.state.credits}
        />
        <div className="row">
          <FooterVersion className="col-md-8">
            {T.translate('footer.wallet')} v.0.0.3 (alpha)
          </FooterVersion>
          <FooterText className="col-md-2">
            {T.translate('footer.explorer')}
          </FooterText>
          <FooterText className="col-md-1">
            {T.translate('footer.donate')}
          </FooterText>
          <FooterText className="col-md-1" onClick={this.toggle('credits')}>
            {T.translate('footer.credits')}
          </FooterText>
        </div>
      </div>
    )
  }
}
