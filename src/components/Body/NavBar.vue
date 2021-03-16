<template>
  <div class="">
    <nav id="banner"
      class="navbar navbar navbar-expand-lg navbar-light bg-light"
      :style="{ 
        'background-image' : 'url(' + require('../../assets/' + basic_data.others.navbar_banner) + ')'
      }"
    >
      <div class="container justify-content-center">
        <ul class="nav pr-4">
          <li class="nav-item">
            <!-- Profile Image -->
            <BaseImage
              className="avatar rounded-circle"
              img_alt="Profile Image"
              img_width="120"
              img_height="130"
              :img="basic_data.personal_details.profile_image"
            />
          </li>
        </ul>
        <h4 class="nav p-2 text-white">
          <span v-html="basic_data.greetings"></span>
        </h4>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom pb-1 pt-1">
      <div class="container">
        <!-- Dropdown visible on Mobile View -->
        <div class="menu dropdown">
          <a class="navbar-toggler" type="button" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="text-info fas fa-bars"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item text-primary" href="#abtme">
              <span class="fas fa-info-circle"></span>
              About Me
            </a>
            <a class="dropdown-item text-primary" href="#services">
              <span class="fas fa-info-circle"></span>
              Services
            </a>

            <a class="dropdown-item text-primary" href="#projects">
              <span class="fas fa-code-branch"></span>
              Projects
            </a>

            <a class="dropdown-item text-primary" href="#find-me">
              <span class="fas fa-at"></span>
              Find Me
            </a>

            <a class="dropdown-item text-primary" href="#">
              <i class="fab fa-blogger"></i>
              My Blogs
            </a>

            <div class="dropdown-divider"></div>

            <a class="dropdown-item text-primary" href="#">
              <i class="fas fa-donate"></i>
              Support Me
            </a>
            <a class="dropdown-item text-primary" href="mailto:gdkimaiyo@gmail.com" target="_blank">
                <i class="fas fa-mail-bulk"></i>
                Contact Me
            </a>
          </div>
        </div>
        
        <!-- Navbar visible on Desktop View -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav navbar-right mr-auto">
            <li class="nav-item">
              <a class="nav-link text-primary" href="#abtme">
                <span class="fas fa-info-circle"></span>
                About Me
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-primary" href="#services">
                <span class="fas fa-info-circle"></span>
                Services
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-primary" href="#projects">
                <span class="fas fa-code-branch"></span>
                Projects
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-primary" href="#find-me">
                <span class="fas fa-at"></span>
                Find Me
              </a>
            </li>

            <li class="nav-item">
              <a id="my-blogs" class="nav-link text-primary" href="#">
                <i class="fab fa-blogger"></i>
                My Blogs
              </a>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-primary" href="#">
                <i class="fas fa-donate"></i>
                Support Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="mailto:gdkimaiyo@gmail.com" target="_blank">
                <i class="fas fa-mail-bulk"></i>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import BaseImage from "../Base/BaseImage.vue";

import jsonData from "../../mixins/jsonData.js";

export default {
  name: "NavBar",
  mixins: [jsonData],

  components: {
    BaseImage
  }
};
</script>

<style>
  .avatar {
    border: 3px solid #fff;
  }
  
  .navbar-toggler {
    border: none;
  }
</style>
