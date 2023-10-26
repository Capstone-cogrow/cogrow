import { useState } from "react";
import { Button } from "../Button/Button";

import {
  WrapperContainer,
  WebLogoContainer,
  ToggleBtn,
  MainLogoImg,
  UserContainer,
  UserName,
  MainMenubar,
  MainMenubarList,
} from "./style";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const [menu, setmenu] = useState(false); // reactHooks

  return (
    <WrapperContainer>
      <script type="module" src="./toggleEvent.ts" defer></script>
      <WebLogoContainer>        
        <a href="/"><MainLogoImg /></a>
      </WebLogoContainer>
      <MainMenubar menu={menu}>
        <MainMenubarList>
          <a href="/introduce">코그로우 소개</a>
        </MainMenubarList>
        <MainMenubarList>
          <a href="/disease">질병 진단</a>
        </MainMenubarList>
        <MainMenubarList>
          <a href="/crops">농작물 관리</a>
        </MainMenubarList>
        <MainMenubarList>
          <a href="/recipe">레시피 추천</a>
        </MainMenubarList>
      </MainMenubar>
      <UserContainer menu={menu}>
        {" "}
        {user ? (
          <>
            <UserName>
              &nbsp;<b>{user.name}</b> 님
            </UserName>
            <Button size="small" onClick={onLogout} label="로그아웃" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="로그인" />
          </>
        )}
      </UserContainer>
      <ToggleBtn
        href="#"
        onClick={() => {
          setmenu(!menu);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>{" "}
      </ToggleBtn>
    </WrapperContainer>
  );
};
