import "./home.css";
import "devicon/devicon.min.css";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home">
        <div className="name-container">
          <h1 className="name">Anurag Singh</h1>
          <h2 className="title">Web Developer</h2>
        </div>
        <div className="brief-about">
          <p>
            Welcome to my portfolio website! Here, you will discover the journey
            of my skills, experiences, and projects. Explore through to get a
            glimpse of my passion for web development and technology. Feel free
            to navigate around and learn more about me and my work. Thank you
            for visiting!
          </p>
        </div>
      </div>
      <Skill />
    </section>
  );
};

const Skill = () => {
  return (
    <div className="skill-container">
      <h2 id="skill-title">Skills</h2>

      <div className="container">
        <div className="container1">
          <div className="icon-container frontend-icon">
            <h2>Frontend :</h2>
            <span className="icon" name="HTML">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#E14E1D" rx="60" />
                <path
                  fill="#fff"
                  d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"
                />
                <path
                  fill="#EBEBEB"
                  d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"
                />
                <path
                  fill="#EBEBEB"
                  d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"
                />
              </svg>
            </span>

            <span className="icon">
              <svg
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="256" height="256" rx="60" fill="#0277BD" />
                <path
                  d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z"
                  fill="#EBEBEB"
                />
                <path
                  d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z"
                  fill="white"
                />
              </svg>
            </span>

            <span className="icon">
              <svg
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="256" height="256" rx="60" fill="#F0DB4F" />
                <path
                  d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93"
                  fill="#323330"
                />
                <path
                  d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354"
                  fill="#323330"
                />
              </svg>
            </span>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#00D8FF"
                  d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"
                />
                <path
                  fillRule="evenodd"
                  stroke="#00D8FF"
                  strokeWidth="8.911"
                  d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  stroke="#00D8FF"
                  strokeWidth="8.911"
                  d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  stroke="#00D8FF"
                  strokeWidth="8.911"
                  d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="backend-icon icon-container">
            <h2>Backend :</h2>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#81CD39"
                  d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"
                />
                <path
                  fill="#81CD39"
                  d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"
                />
              </svg>
            </span>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#fff"
                  d="M228 182.937C225.089 184.04 221.875 184.037 218.965 182.931C216.056 181.824 213.652 179.69 212.209 176.932C203.146 163.365 193.138 150.41 183.519 137.177L179.348 131.617C167.894 146.963 156.44 161.697 145.987 176.988C144.625 179.624 142.352 181.675 139.59 182.759C136.828 183.844 133.766 183.887 130.975 182.882L173.955 125.223L133.977 73.1236C136.855 72.0845 140.003 72.0702 142.89 73.0832C145.777 74.0962 148.226 76.0744 149.824 78.6838C159.109 92.2506 169.396 105.206 179.626 118.94C189.913 105.317 200.088 92.3062 209.596 78.8506C210.965 76.2574 213.24 74.258 215.988 73.2328C218.735 72.2076 221.764 72.2281 224.497 73.2904L208.984 93.8631C202.034 103.037 195.195 112.267 187.967 121.219C187.384 121.741 186.918 122.379 186.599 123.093C186.28 123.807 186.115 124.58 186.115 125.362C186.115 126.143 186.28 126.916 186.599 127.63C186.918 128.344 187.384 128.982 187.967 129.504C201.256 147.13 214.433 164.811 228 182.937V182.937Z"
                />
                <path
                  fill="#fff"
                  d="M28 124.5C29.1676 118.94 29.8905 112.879 31.5029 107.208C41.122 73.0129 80.3214 58.7788 107.288 79.9632C123.079 92.3624 127.027 109.933 126.249 129.727H37.2855C35.8399 165.09 61.3611 186.441 93.9994 175.543C99.2938 173.649 104.033 170.467 107.79 166.283C111.547 162.099 114.202 157.045 115.517 151.578C117.241 146.018 120.021 145.073 125.303 146.685C124.433 153.454 122.04 159.938 118.303 165.649C114.567 171.36 109.584 176.149 103.73 179.657C94.0573 184.947 82.96 187.042 72.0247 185.644C61.0894 184.246 50.8763 179.426 42.8457 171.873C34.9011 162.94 30.0973 151.654 29.1676 139.735C29.1676 137.845 28.4448 135.954 28.0556 134.175C28.0185 130.876 28 127.651 28 124.5ZM37.3967 122.109H117.853C117.352 96.4769 101.172 78.2951 79.5986 78.1283C55.5785 77.7947 38.3976 95.5873 37.3411 121.998L37.3967 122.109Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="container2">
          <div className="database-icon icon-container">
            <h2>Database :</h2>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <g clipPath="url(#clip0_7_147)">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M203.801 178.21C194.011 177.938 186.416 178.941 180.051 181.619C178.218 182.355 175.277 182.355 175.035 184.662C176.015 185.63 176.133 187.214 176.992 188.556C178.459 190.991 181.033 194.271 183.357 195.973L191.191 201.571C195.965 204.488 201.351 206.193 206.002 209.113C208.696 210.817 211.388 213.007 214.082 214.834C215.454 215.807 216.285 217.392 218 217.997V217.629C217.144 216.538 216.897 214.957 216.044 213.735L212.367 210.209C208.82 205.465 204.41 201.325 199.636 197.922C195.718 195.245 187.152 191.596 185.56 187.097L185.319 186.824C188.008 186.552 191.191 185.605 193.764 184.875C197.929 183.784 201.721 184.024 206.002 182.93L211.882 181.226V180.135C209.678 177.946 208.087 175.025 205.763 172.959C199.521 167.606 192.661 162.373 185.56 157.994C181.766 155.562 176.868 153.977 172.829 151.913C171.356 151.182 168.911 150.817 168.055 149.601C165.846 146.929 164.625 143.397 163.034 140.232L152.997 119.064C150.794 114.319 149.444 109.574 146.755 105.195C134.144 84.5124 120.431 71.9828 99.375 59.6932C94.8477 57.1382 89.4616 56.0393 83.7353 54.7032L74.5546 54.2124C72.5928 53.3616 70.6364 51.0493 68.9216 49.9531C61.9441 45.5739 43.9475 36.0847 38.8029 48.5897C35.4966 56.4974 43.7006 64.2824 46.4855 68.299C48.5708 71.0966 51.2597 74.2597 52.7332 77.4228C53.5563 79.4897 53.8307 81.682 54.6895 83.8717C56.6458 89.2243 58.4842 95.1878 61.0551 100.178C62.427 102.733 63.8675 105.413 65.5824 107.723C66.5619 109.086 68.2768 109.67 68.6417 111.859C66.9268 114.294 66.8089 117.94 65.8293 120.986C61.42 134.734 63.1349 151.766 69.377 161.888C71.3389 164.928 75.9622 171.622 82.2345 169.065C87.744 166.875 86.5148 159.941 88.1062 153.857C88.4766 152.399 88.2297 151.425 88.9623 150.449V150.722L93.9834 160.819C97.7781 166.78 104.391 172.986 109.897 177.125C112.833 179.315 115.16 183.089 118.831 184.425V184.057H118.59C117.854 182.966 116.751 182.475 115.772 181.624C113.569 179.435 111.121 176.757 109.406 174.325C104.267 167.513 99.7399 159.968 95.6983 152.183C93.7365 148.412 92.0216 144.275 90.4357 140.504C89.6949 139.043 89.6949 136.85 88.4739 136.125C86.6355 138.797 83.9466 141.115 82.5939 144.398C80.2672 149.628 80.0257 156.077 79.1697 162.769C78.6758 162.891 78.8953 162.769 78.6758 163.041C74.7631 162.071 73.4132 158.051 71.9453 154.648C68.274 146.01 67.6594 132.141 70.8422 122.164C71.6983 119.609 75.375 111.579 73.9071 109.146C73.1662 106.834 70.7242 105.498 69.3743 103.671C67.7829 101.359 66.0735 98.4409 64.9705 95.8859C62.0346 89.0689 60.5667 81.5293 57.3812 74.7151C55.9077 71.552 53.3396 68.2662 51.257 65.3486C48.9303 62.0628 46.3648 59.7505 44.5265 55.8593C43.9146 54.4959 43.0585 52.3309 44.0381 50.8693C44.2795 49.8959 44.7734 49.5059 45.7475 49.2878C47.3389 47.9244 51.8716 49.6532 53.463 50.3785C57.9903 52.2054 61.7849 53.907 65.5796 56.4592C67.2945 57.6754 69.1329 59.9877 71.3361 60.5985H73.9098C77.8279 61.4493 82.2317 60.8712 85.9002 61.9619C92.3893 64.0343 98.2637 67.0719 103.532 70.3604C119.567 80.4577 132.792 94.8143 141.725 111.971C143.193 114.769 143.805 117.324 145.155 120.244C147.729 126.208 150.912 132.289 153.477 138.132C156.051 143.85 158.498 149.694 162.17 154.438C164.008 156.993 171.35 158.329 174.654 159.668C177.104 160.759 180.896 161.741 183.105 163.077C187.264 165.632 191.427 168.552 195.342 171.35C197.298 172.806 203.423 175.849 203.787 178.276L203.801 178.21ZM78.9584 72.4873C77.267 72.4724 75.5809 72.6769 73.9427 73.0954V73.3681H74.1842C75.1637 75.315 76.8786 76.6538 78.1023 78.3581L80.9202 84.1989L81.1616 83.9262C82.8765 82.71 83.7353 80.7631 83.7353 77.8454C83 76.9947 82.8793 76.1412 82.2674 75.2904C81.5321 74.0743 79.9407 73.4635 78.9584 72.4928V72.4873Z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_147">
                    <rect
                      width="180"
                      height="180"
                      fill="#fff"
                      transform="translate(38 38)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="icon-container devtool-icon">
            <h2>Developer Tools :</h2>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#F03C2E" rx="60" />
                <g clipPath="url(#clip0_7_283)">
                  <path
                    fill="#fff"
                    d="M224.225 119.094L136.906 31.775C135.711 30.5787 134.291 29.6298 132.729 28.9824C131.166 28.3349 129.491 28.0017 127.8 28.0017C126.109 28.0017 124.434 28.3349 122.871 28.9824C121.309 29.6298 119.889 30.5787 118.694 31.775L100.569 49.9L123.569 72.9C128.919 71.025 135.044 72.3062 139.306 76.5687C141.335 78.6014 142.752 81.1638 143.394 83.9632C144.036 86.7626 143.878 89.6862 142.937 92.4L165.106 114.569C170.469 112.719 176.656 113.912 180.937 118.206C182.361 119.63 183.49 121.32 184.26 123.18C185.03 125.04 185.426 127.033 185.426 129.046C185.425 131.059 185.029 133.052 184.258 134.912C183.487 136.771 182.358 138.461 180.934 139.884C179.511 141.308 177.821 142.436 175.961 143.206C174.101 143.977 172.108 144.373 170.095 144.372C168.082 144.372 166.088 143.975 164.229 143.205C162.369 142.434 160.679 141.305 159.256 139.881C154.756 135.381 153.644 128.756 155.919 123.212L135.244 102.537V156.944C136.745 157.686 138.116 158.666 139.306 159.844C140.729 161.267 141.858 162.956 142.629 164.816C143.399 166.675 143.795 168.668 143.795 170.681C143.795 172.694 143.399 174.687 142.629 176.546C141.858 178.406 140.729 180.096 139.306 181.519C137.883 182.942 136.193 184.071 134.334 184.841C132.474 185.611 130.481 186.008 128.469 186.008C126.456 186.008 124.463 185.611 122.604 184.841C120.744 184.071 119.054 182.942 117.631 181.519C116.206 180.096 115.076 178.407 114.305 176.548C113.533 174.688 113.136 172.694 113.136 170.681C113.136 168.668 113.533 166.675 114.305 164.815C115.076 162.955 116.206 161.266 117.631 159.844C119.112 158.369 120.756 157.25 122.65 156.5V101.587C120.825 100.837 119.112 99.7312 117.631 98.2437C115.479 96.0943 114.016 93.3526 113.428 90.3684C112.841 87.3841 113.155 84.2924 114.331 81.4875L91.6437 58.8125L31.7687 118.625C30.5716 119.821 29.6219 121.241 28.9739 122.804C28.3259 124.367 27.9924 126.042 27.9924 127.734C27.9924 129.426 28.3259 131.102 28.9739 132.665C29.6219 134.228 30.5716 135.648 31.7687 136.844L119.094 224.156C120.289 225.352 121.709 226.301 123.271 226.949C124.834 227.596 126.509 227.929 128.2 227.929C129.891 227.929 131.566 227.596 133.129 226.949C134.691 226.301 136.111 225.352 137.306 224.156L224.225 137.375C225.422 136.179 226.372 134.759 227.02 133.196C227.668 131.633 228.001 129.958 228.001 128.266C228.001 126.574 227.668 124.898 227.02 123.335C226.372 121.772 225.422 120.352 224.225 119.156"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7_283">
                    <rect
                      width="200"
                      height="200"
                      fill="#fff"
                      transform="translate(28 28)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                fill="none"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="#242938" rx="60" />
                <path
                  fill="#2489CA"
                  d="M33.7158 100.208C33.7158 100.208 28.9814 96.795 34.6627 92.2381L47.8994 80.402C47.8994 80.402 51.6869 76.4172 55.6915 79.8891L177.84 172.368V216.714C177.84 216.714 177.781 223.678 168.844 222.908L33.7158 100.208Z"
                />
                <path
                  fill="#1070B3"
                  d="M65.1997 128.792L33.7157 157.415C33.7157 157.415 30.4805 159.822 33.7157 164.123L48.3333 177.418C48.3333 177.418 51.8052 181.147 56.9341 176.905L90.3119 151.596L65.1997 128.792Z"
                />
                <path
                  fill="#0877B9"
                  d="M120.474 129.029L178.215 84.9391L177.84 40.83C177.84 40.83 175.374 31.2033 167.148 36.2139L90.312 106.145L120.474 129.029Z"
                />
                <path
                  fill="#3C99D4"
                  d="M168.844 222.968C172.198 226.4 176.262 225.276 176.262 225.276L221.259 203.103C227.019 199.177 226.21 194.305 226.21 194.305V61.8982C226.21 56.0788 220.252 54.0667 220.252 54.0667L181.253 35.267C172.731 30 167.148 36.2139 167.148 36.2139C167.148 36.2139 174.328 31.0455 177.84 40.83V215.905C177.84 217.109 177.583 218.292 177.071 219.358C176.045 221.429 173.816 223.362 168.47 222.553L168.844 222.968Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
