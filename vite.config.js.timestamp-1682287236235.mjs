// vite.config.js
import { defineConfig } from "file:///C:/Users/pavlb/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/irabasara-group-project-23-watch/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/Users/pavlb/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/irabasara-group-project-23-watch/node_modules/glob/glob.js";
import injectHTML from "file:///C:/Users/pavlb/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/irabasara-group-project-23-watch/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/pavlb/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/irabasara-group-project-23-watch/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html")
    },
    outDir: "../dist"
  },
  plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwYXZsYlxcXFxPbmVEcml2ZVxcXFxcdTA0MTRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0NEJcXFxcaXJhYmFzYXJhLWdyb3VwLXByb2plY3QtMjMtd2F0Y2hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHBhdmxiXFxcXE9uZURyaXZlXFxcXFx1MDQxNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQ0QlxcXFxpcmFiYXNhcmEtZ3JvdXAtcHJvamVjdC0yMy13YXRjaFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcGF2bGIvT25lRHJpdmUvJUQwJTk0JUQwJUJFJUQwJUJBJUQxJTgzJUQwJUJDJUQwJUI1JUQwJUJEJUQxJTgyJUQxJThCL2lyYWJhc2FyYS1ncm91cC1wcm9qZWN0LTIzLXdhdGNoL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcm9vdDogJ3NyYycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbaW5qZWN0SFRNTCgpLCBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWliLFNBQVMsb0JBQW9CO0FBQzljLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsSUFDakM7QUFBQSxJQUNBLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
