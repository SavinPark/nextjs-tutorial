import { Menu } from 'semantic-ui-react';
import { useRouter } from "next/router";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/empty") {
    activeItem = "empty";
  }

  function goLink(e, data) {
    if (data.name === 'home') {
      router.push("/");
      // location.href = "/";
    } else if (data.name === 'about') {
      router.push("/about");
      // location.href = "/about";
    } else if (data.name === 'empty') {
      router.push("/empty");
    } else if (data.name === 'admin') {
      router.push("/admin");
    }
  }
    return (
        <Menu inverted>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={goLink}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={goLink}
          />
          <Menu.Item
            name='empty'
            active={activeItem === 'empty'}
            onClick={goLink}
          />
          <Menu.Item
            name='admin'
            active={activeItem === 'admin'}
            onClick={goLink}
          />
        </Menu>
    );
}



