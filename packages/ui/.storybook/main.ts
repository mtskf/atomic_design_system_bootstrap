import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: { autodocs: true },
  viteFinal: async (config) => {
    // Vercelでのビルドエラーを防ぐための設定
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': '/src',
      };
    }

    // 外部依存関係の処理を改善
    if (config.optimizeDeps) {
      config.optimizeDeps.include = [
        ...(config.optimizeDeps.include || []),
        '@radix-ui/react-dialog',
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-progress',
        '@radix-ui/react-select',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip',
      ];
    }

    // Vercel環境でのビルド最適化
    if (process.env.NODE_ENV === 'production') {
      config.build = {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: [],
          output: {
            ...config.build?.rollupOptions?.output,
            manualChunks: undefined,
          },
        },
      };
    }

    return config;
  },
};

export default config;
