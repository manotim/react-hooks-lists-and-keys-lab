import React from 'react'

function NavBar() {
  const links = ['home', 'about', 'projects']

  const anchorLists = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>
        {link}
      </a>
    )
  })

  return <nav>{anchorLists}</nav>
}

export default NavBar
