<template>
  <div class="home">
    <header id="header">
      <div class="logo"><a href="#">Rick Booth</a></div>
    </header>

    <section id="main">
      <div class="inner">
        <About />
        <section class="wrapper">
          <LeadTech />
          <Cpoms />
          <Meritec />
          <KeighleyLabs />
        </section>

        <!-- <Projects /> -->
      </div>
    </section>

    <footer id="footer">
      <div class="container">
        <ul class="icons">
          <li><a href="mailto:admin@rickbooth.me" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
          <li><a href="https://github.com/Rixcy" class="icon fa-github"><span class="label">Email</span></a></li>
          <li><a href="https://www.linkedin.com/in/richard-booth-480677119/" class="icon fa-linkedin"><span class="label">Email</span></a></li>
        </ul>
      </div>
      <div class="copyright">
        &copy; Rixcy 2018. All rights reserved. Images <a href="https://unsplash.com">Unsplash</a> Design <a href="https://rickbooth.me">Rick Booth</a>
      </div>
    </footer>
  </div>
</template>

<script>
import About from '@/components/About'
import LeadTech from '@/components/jobs/LeadTech'
import Cpoms from '@/components/jobs/Cpoms'
import Meritec from '@/components/jobs/Meritec'
import KeighleyLabs from '@/components/jobs/KeighleyLabs'
import Projects from '@/components/Projects'

export default {
  name: 'home',
  components: {
    About,
    LeadTech,
    Cpoms,
    Meritec,
    KeighleyLabs,
    Projects
  }
}
</script>
