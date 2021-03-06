import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	height: 75px;
`

const Name = styled.div`
	color: #476b84;
	font-size: 18px;
	font-weight: 400;
	line-height: 62px;
	font-family: 'AvenirNextLTW01Regular';
`

const Key = styled.div`
	font-family: 'AvenirNextLTW01Regular';
	color: #647e90;
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
`

const Description = styled.div`
	color: #647e90;
	font-size: 15px;
	font-style: italic;
	line-height: 23px;
	font-family: 'AvenirNextLTW01Italic';
`

export default ({ name, keyName, usage }) => (
	<Row className="row">
		<Name className="col-md-4">{name}</Name>
		<Key className="col-md-2">{keyName}</Key>
		<Description className="col-md-6">{usage}</Description>
	</Row>
)
