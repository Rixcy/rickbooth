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

    <Footer />
  </div>
</template>

<script>
import About from '@/components/About'
import LeadTech from '@/components/jobs/LeadTech'
import Cpoms from '@/components/jobs/Cpoms'
import Meritec from '@/components/jobs/Meritec'
import KeighleyLabs from '@/components/jobs/KeighleyLabs'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    About,
    LeadTech,
    Cpoms,
    Meritec,
    KeighleyLabs,
    Projects,
    Footer
  }
}
</script>
