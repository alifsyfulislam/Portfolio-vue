<template>
  <div>
    <header class="bg-pic">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="main-menu">
              <nav class="navbar navbar-expand-md navbar-dark" id="menuBar">
                <div class="container-fluid">
                  <a href="index.html" class="navbar-brand">SYFUL ISLAM</a>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="myMenu">
                    <div class="ml-auto">
                      <ul class="navbar-nav">
                        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="/#/about" class="nav-link">About</a></li>
                        <!--<li class="nav-item"><a href="certi.html" class="nav-link">Certification</a></li>-->
                        <!--<li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>-->
                        <li class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Life Event</a>
                          <ul class="dropdown-menu">
                            <li><a href="#skills" class="dropdown-item">Skills</a></li>
                            <li><a href="#portfolio" class="dropdown-item">Portfolio</a></li>
                            <li><a href="#experience" class="dropdown-item">Experience</a></li>
                            <li><a href="#education" class="dropdown-item">Education</a></li>
                            <li><a href="#training" class="dropdown-item">Training</a></li>
                          </ul>
                        </li>
                        <li class="nav-item"><a href="/#/certi" class="nav-link">Certification</a></li>
                        <li class="nav-item"><a href="/#/contact" class="nav-link">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <index-header></index-header>

    </header>
  </div>
</template>

<script>
  import SubHeader from './innerHeader/SubHeader'

  export default{
    components:{
      'index-header': SubHeader,
    }
  }
</script>

<style>

</style>
