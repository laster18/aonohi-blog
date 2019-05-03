import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { mixin } from '../styles'

interface headerProps {
  title: string,
  location: any,
}

const Header: FC<headerProps> = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const tagPath = `${__PATH_PREFIX__}/tags/`
  const isRoot = location.pathname === rootPath
  const isTag = location.pathname === tagPath

  if (isRoot) {
    return (
      <Container>
        <Inner>
          <BlogTitleArea>
            <BlogTitle>{title}</BlogTitle>
          </BlogTitleArea>
          <Description>Web developer blog.</Description>
        </Inner>
      </Container>
    )
  } else if(isTag) {
    return (
      <Container>
        <Inner>
          <BlogTitleArea>
            <BlogTitle>{title}</BlogTitle>
          </BlogTitleArea>
          <Description>Tag page.</Description>
        </Inner>
      </Container>
    )
  } else {
    return null
  }
}

const Container = styled.header`
  color: white;
  height: 40vh;
  width: 100vw;
  background: #2980B9;
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
  background: linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9);
  ${mixin.flexColumnCenter}
`
const Inner = styled.div`
  animation: ${mixin.fadeInDown} .4s both .3s;
`
const BlogTitleArea = styled.div``
const BlogTitle = styled(Link)`
  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  box-shadow: none;
  :hover {
    opacity: 0.8;
  }
`
const Description = styled.small`
  font-size: 0.9rem;
`

export default Header