import styled from "styled-components";
import Link from "next/link";
import { NormalHoverText } from "../../../../styles/title";
import { SecondaryInput } from "../../../../styles/search";
import { SocialButton } from "../../../../styles/button";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <span className="close">
        <i class="fas fa-times"></i>
      </span>
      <div className="content">
        <h1 className="Logo">
          <Link href="/">Junior</Link>
        </h1>

        <ul className="menuItems">
          <li className="menuItem">
            <Link href="/">
              <NormalHoverText>Features</NormalHoverText>
            </Link>
          </li>

          <li className="menuItem">
            <Link href="/">
              <NormalHoverText>Tutorials</NormalHoverText>
            </Link>
            <span className="dropIcon"></span>
          </li>

          <li className="menuItem">
            <Link href="/">
              <NormalHoverText>Blogs</NormalHoverText>
            </Link>
          </li>

          <li className="menuItem">
            <Link href="/">
              <NormalHoverText>Courses</NormalHoverText>
            </Link>
            <span className="dropIcon"></span>
          </li>

          <li className="menuItem">
            <Link href="/">
              <NormalHoverText>About</NormalHoverText>
            </Link>
          </li>
        </ul>

        <SecondaryInput style={{ margin: "3rem 0" }}>
          <form>
            <input type="text" placeholder="Search and press Enter" />
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </SecondaryInput>

        <div className="social">
          <SocialButton style={{ backgroundColor: "#1DA1F2" }}>
            <i class="fab fa-twitter"></i>
            Twitter
          </SocialButton>

          <SocialButton style={{ backgroundColor: "#4267B2" }}>
            <i class="fab fa-facebook-f"></i>
            Facebook
          </SocialButton>

          <SocialButton style={{ backgroundColor: "#E1306C" }}>
            <i class="fab fa-instagram"></i>
            Instagram
          </SocialButton>

          <SocialButton style={{ backgroundColor: "#FF0000" }}>
            <i class="fab fa-youtube"></i>
            Youtube
          </SocialButton>
        </div>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  height: 100vh;
  width: 30%;
  padding: 3rem 2rem 1rem 2rem;
  overflow-y: scroll;
  overflow-x: hidden;

  .close {
    position: absolute;
    top: 4rem;
    right: 2rem;
    font-size: 1.8rem;
    color: #999;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #333;
      transform: scale(1.2);
    }
  }

  .content {
    text-align: center;
    height: 100%;
    width: 100%;
    padding: 4rem 0 4rem 0;
  }

  .Logo {
    font-weight: 900;
    font-size: 5rem;
    text-transform: lowercase;
    letter-spacing: 1px;
  }

  .menuItems {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1rem auto;
  }

  .menuItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.2rem 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .dropIcon {
      position: relative;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        top: -1.9rem;
        right: 2rem;
        width: 1px;
        height: 3.8rem;
        background-color: rgba(153, 153, 153, 0.3);
      }

      &::after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f0d7";
        position: absolute;
        top: -0.5rem;
        right: 0;
        font-size: 1.3rem;
        color: #999;
      }
    }

    p {
      padding: 0;
    }
  }

  .social {
    width: 90%;
    margin: 0 auto 2rem auto;
    display: flex;
    flex-direction: column;
  }
`;
