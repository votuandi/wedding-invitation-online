<template>
  <div class="navbar">
    <div class="h-px w-screen bg-slate-100"></div>
    <div class="navibg" v-show="mobileNav" @click="onHideNavMobile()"></div>
    <header :class="{ 'scrolled-nav': scrollNav }">
      <nav>
        <ul v-show="!mobile" class="navigation">
          <li v-for="item in navigationItems" :key="item.id" class="text-[#b58887] w-full">
            <a class="nav-link" :href="`#${item.id}`" @click.prevent="navigate(item.id)">{{ item.label }}</a>
          </li>
        </ul>
        <div class="icon">
          <button
            type="button"
            class="menu-toggle"
            @click="toggleMobileNav"
            v-show="mobile"
            :class="{ 'icon-active': mobileNav }"
            :aria-expanded="mobileNav"
            aria-controls="mobile-navigation"
            aria-label="Mở hoặc đóng menu điều hướng"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <transition>
          <ul v-show="mobileNav" id="mobile-navigation" class="dropdown-nav">
            <li v-for="item in navigationItems" :key="item.id" class="text-[#b58887] w-full p-4">
              <a class="nav-link" :href="`#${item.id}`" @click.prevent="navigate(item.id, true)">{{ item.label }}</a>
            </li>
          </ul>
        </transition>
      </nav>
    </header>
  </div>
</template>
   
<script>
import { navigationItems } from "@/features/invitation/data/invitationConfig";

export default {
  name: "CpnNavigation",
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScaroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
    window.removeEventListener("scroll", this.updateScaroll);
  },
  data() {
    return {
      lastScrollY: 0,
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      navigationItems,
    };
  },
  methods: {
    navigate(id, closeMenu = false) { this.$emit("rollTo", id); if (closeMenu) this.onHideNavMobile(); },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    onHideNavMobile() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScaroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition - this.lastScrollY < 0 && scrollPosition > 140) {
        this.scrollNav = true;
        this.lastScrollY = scrollPosition;
        return;
      }
      this.scrollNav = false;
      this.lastScrollY = scrollPosition;
    },
  },
};
</script>
  
<style scoped>
.navbar {
  font-family: "Itim", cursive;
}
.navbar .navibg {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
}
.navbar header {
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  position: relative;
  transition: 0.5s ease all;
  color: #b58887;
  z-index: 999;
}
.navbar header nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 1080px) {
  .navbar header nav {
    max-width: 1140px;
  }
}
.navbar header nav ul,
.navbar header nav .nav-link {
  z-index: 3;
  color: #000;
  list-style: none;
  text-decoration: none;
}
.navbar header nav li {
  z-index: 1;
  text-transform: uppercase;
  /* padding: 16px; */
  margin-left: 30px;
}
.navbar header nav .nav-link {
  font-size: 18px;
  transition: 0.5 ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.navbar header nav .nav-link:hover {
  color: #dba4a3;
  border-color: #dba4a3;
  font-weight: 800;
  transition: 1s ease all;
}
.navbar header nav .branding {
  display: flex;
  align-items: center;
}
.navbar header nav .navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}
.navbar header nav .icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
.navbar header nav .icon .menu-toggle {
  cursor: pointer;
  transition: 0.8s ease all;
  color: #fff;
  background-color: #eebbb9;
  padding: 0.25rem;
  border: 0;
  line-height: 0;
}
.navbar header nav .icon .menu-toggle svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 2;
}
.navbar header nav .icon-active {
  transform: rotate(180deg);
}
.navbar header nav .dropdown-nav {
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
}
.navbar header nav .dropdown-nav li {
  margin-left: 0;
}
.navbar header nav .dropdown-nav li .nav-link {
  color: #b58887;
}
.navbar header nav .mobile-nav-enter-active,
.navbar header nav .mobile-nav-leave-active {
  transition: 1s ease all;
}
.navbar header nav .mobile-nav-enter-from,
.navbar header nav .mobile-nav-leave-to {
  transform: translateX(-250px);
}
.navbar header nav .mobile-nav-enter-to {
  transform: translateX(0);
}
.navbar header .dropdown-menu {
  position: relative;
  top: -25px;
  z-index: 2;
  transition: 1s ease all;
}
.navbar .scrolled-nav {
  position: fixed;
  top: 0;

  background-color: #fff;
  @media (max-width: 1080px) {
    background-color: rgba(0, 0, 0, 0);
  }
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.navbar .scrolled-nav nav {
  padding: 8px 0;
}
.navbar .scrolled-nav nav .branding ima {
  width: 80px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
