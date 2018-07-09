<template>
  <div>
    <section id="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center text-uppercase pt-3 pb-3">Contact Me</h3>
          </div>

          <div class="col-md-12 col-sm-12 col-12 bg-contact">

            <h3 class="text-light text-center"><em>Feel Free to Drop A Line Below!</em></h3>
            <br>

            <form action="" method="post" id="regFrom">
              <div class="input-group mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="nameSpan"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" placeholder="Enter your name! ex: aaa" class="form-control" id="name" required="">
              </div>

              <div class="input-group mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="emailSpan"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" placeholder="Your valid email! ex: a@gmail.co" id="email" class="form-control" required="">
              </div>

              <div class="input-group mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="mobileSpan"><i class="fa fa-mobile"></i></span>
                </div>
                <input type="text" placeholder="Your mobile number! ex : +880-1XXXXXXXXX!" id="mobile" class="form-control" required="">
              </div>

              <div class="mb-2">
                <textarea placeholder="Query" class="form-control form-control-lg" id="textFileld" required="" style="height: 200px;"></textarea>
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-success mb-2 pr-3 btn_move">Submit <i class="fa fa-arrow-right"></i></button>
                <!--<button type="reset" class="btn btn-dark">Reset</button>-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
