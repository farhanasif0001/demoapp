<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">
            <img src="~/assets/logo.png" class="logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/dashboard"><img src="~/assets/dashboard.png" width="14px"> &nbsp;&nbsp;Dashboard</b-nav-item>
              <b-nav-item href="#"><img src="~/assets/profile.png" width="14px">  &nbsp;&nbsp;Suivi des collaborateurs</b-nav-item>
              <b-nav-item href="#"><img src="~/assets/schedule.png" width="14px">  &nbsp;&nbsp;Suivi des biens</b-nav-item>
              <b-nav-item href="#"><img src="~/assets/plans.png" width="14px">  &nbsp;&nbsp;Outils marketing</b-nav-item>
            </b-navbar-nav>
         

            <b-navbar-nav class="ml-auto">
              <b-nav-item>{{userdata.username}}</b-nav-item>
              <img 
                src="~/assets/userimg.png"
                width="40px"
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
    .navbar{
      padding: .5rem 3rem;
      background-color: #7582f6!important;
      font-style: normal;
      font-weight: 500;
    }
    .navbar-dark .navbar-nav .nav-link {
      font-size: 12px;
      color: #FFFFFF!important;
    }
    .logo {
      margin-top: -10px;
      width: 112.16px;
    }
</style>

<script>
export default {
  data() {
    return {
      userdata: {
        username: 'Mon compte'
      }
    }
  }
}
</script>
