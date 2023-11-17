function FormContent() {
  return (
    <>
      <div class="col-md-6 mt-md">
        <form id="form" class="form">
          <h2>Daftar</h2>
          <div class="form-group mt-5">
            <input
              type="text"
              name="username"
              class="form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>

          <div class="form-group mt-5">
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div class="form-group mt-5">
            <div class="input-group">
              <input
                type="password"
                name="password"
                class="form-control"
                id="password"
                placeholder="Password"
                minlength="8"
                maxlength="16"
                required
              />
              <div class="input-group-append">
                <span class="input-group-text bg-light" id="toggle-password">
                  <i class="fa fa-eye" id="toggle-icon"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="form-group mt-5">
            <div class="input-group">
              <input
                type="password"
                class="form-control"
                name="confirmed"
                id="confirmed"
                placeholder="Konfirmasi Password"
                minlength="8"
                maxlength="16"
                required
              />
              <div class="input-group-append">
                <span
                  class="input-group-text bg-light"
                  id="toggle-password-confirm"
                >
                  <i class="fa fa-eye" id="toggle-icon-confirm"></i>
                </span>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block mt-5">
            Daftar
          </button>
        </form>
        <div class="icon-wrapper mt-5 text-center">
          <p class="mt-2 text-center">lanjutkan menggunakan</p>
          <a href="#">
            <svg
              class="mb-5"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <ellipse
                cx="20.7287"
                cy="19.0703"
                rx="18.1376"
                ry="18.1376"
                fill="url(#paint0_linear_1_41)"
              />
              <path
                d="M27.4832 26.2756L28.2889 21.1563H23.2488V17.8357C23.2488 16.4348 23.9515 15.0685 26.209 15.0685H28.5019V10.7102C28.5019 10.7102 26.4219 10.3643 24.4342 10.3643C20.2815 10.3643 17.5697 12.8167 17.5697 17.2546V21.1563H12.9554V26.2756H17.5697V38.6518C18.4961 38.7936 19.4438 38.8662 20.4092 38.8662C21.3747 38.8662 22.3224 38.7936 23.2488 38.6518V26.2756H27.4832Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_41"
                  x1="20.7287"
                  y1="0.932785"
                  x2="20.7287"
                  y2="37.1003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18ACFE" />
                  <stop offset="1" stop-color="#0163E0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              class="mb-5"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M39.3253 21.1316C39.3253 19.6403 39.2018 18.552 38.9346 17.4235H21.5579V24.1544H31.7576C31.5521 25.8272 30.4416 28.3463 27.9739 30.039L27.9393 30.2644L33.4335 34.4355L33.8141 34.4728C37.31 31.3087 39.3253 26.6534 39.3253 21.1316"
                fill="#4285F4"
              />
              <path
                d="M21.5568 38.8663C26.5538 38.8663 30.7488 37.254 33.8129 34.4729L27.9727 30.0392C26.4099 31.1073 24.3123 31.8529 21.5568 31.8529C16.6626 31.8529 12.5086 28.689 11.0279 24.3158L10.8108 24.3339L5.09793 28.6668L5.02322 28.8703C8.06667 34.7953 14.3182 38.8663 21.5568 38.8663Z"
                fill="#34A853"
              />
              <path
                d="M11.029 24.3159C10.6383 23.1874 10.4121 21.9781 10.4121 20.7287C10.4121 19.4791 10.6383 18.27 11.0084 17.1415L10.9981 16.9011L5.21354 12.4986L5.02428 12.5869C3.76992 15.0455 3.05017 17.8065 3.05017 20.7287C3.05017 23.6508 3.76992 26.4117 5.02428 28.8704L11.029 24.3159"
                fill="#FBBC05"
              />
              <path
                d="M21.5569 9.60431C25.0321 9.60431 27.3764 11.0755 28.7131 12.3049L33.9364 7.30694C30.7285 4.38478 26.5539 2.59117 21.5569 2.59117C14.3182 2.59117 8.06669 6.66201 5.02322 12.5869L11.0074 17.1415C12.5087 12.7684 16.6626 9.60431 21.5569 9.60431"
                fill="#EB4335"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default FormContent;
