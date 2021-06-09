<template>
  <div class="loading-page">
    <div class="content-pokeball">
      <svg
        width="106"
        height="106"
        viewBox="0 0 106 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pokeball"
      >
        <circle
          cx="53"
          cy="53"
          r="51"
          fill="white"
          stroke="#333333"
          stroke-width="4"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="106"
          height="53"
        >
          <rect width="106" height="53" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <circle
            cx="53"
            cy="53"
            r="51"
            fill="#F22539"
            stroke="#333333"
            stroke-width="4"
          />
        </g>
        <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
        <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
        <circle
          cx="53"
          cy="52.9998"
          r="18.8074"
          stroke="#333333"
          stroke-width="4"
        />
        <path
          d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="53.0001"
          cy="53.0004"
          r="10.3852"
          stroke="#808080"
          stroke-width="2"
        />
      </svg>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $bg-color;
  .content-pokeball {
    position: absolute;
  }
  .pokeball {
    animation: jump 0.8s ease-in infinite;
  }
  .shadow {
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0;
    display: block;
    border-radius: 100%;
    height: 20px;
    width: 120px;
    background: #000;
    opacity: 0.3;
    animation: scale-shadow 0.8s ease-in infinite;
  }
}

@keyframes jump {
  0% {
    transform: translateY(0) scale(1.15, 0.8);
  }
  20% {
    transform: translateY(-35px) scaleY(1.1);
  }
  50% {
    transform: translateY(-50px) scale(1);
  }
  80% {
    transform: translateY(-35px) scale(1);
  }
  100% {
    transform: translateY(0) scale(1.15, 0.8);
  }
}
@keyframes scale-shadow {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(0.5);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
</style>
