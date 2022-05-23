import React, { FC } from 'react'

type LinkPropsType = { href: string | null; src: string }

export const Link: FC<LinkPropsType> = ({ src, href }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <img alt="social link" src={src} />
      </a>
    )
  }

  return null
}
