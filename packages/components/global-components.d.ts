declare module  vue {
  export interface GlobalComponents {
    NButton: typeof import('./button/src/Button.vue')
  }
}

export {}